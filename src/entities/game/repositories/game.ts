import { prisma } from "@/shared/lib/db";
import { removePassword } from "@/shared/lib/password";
import { Game, Prisma, User } from "@prisma/client";
import { z } from "zod";
import { GameEntity, GameIdleEntity, GameOverEntity } from "../domain";

async function gamesList({
  where,
}: {
  where: Prisma.GameWhereInput;
}): Promise<GameEntity[]> {
  const games = await prisma.game.findMany({
    where,
    include: {
      players: true,
      winner: true,
    },
  });
  return games.map(dbGameToGameEntity);
}
const fieldSchema = z.array(z.union([z.string(), z.null()]));
function dbGameToGameEntity(
  game: Game & {
    players: User[];
    winner?: User | null;
  },
): GameEntity {
  const players = game.players.map(removePassword);
  const [creator] = players;
  switch (game.status) {
    case "idle":
      return {
        id: game.id,
        players,
        status: "idle",
        creator,
      } satisfies GameIdleEntity;

    case "gameOverDraw":
    case "inProgress":
      return {
        id: game.id,
        players,
        field: fieldSchema.parse(game.field),
        status: "inProgress",
        creator,
      };
    case "gameOver":
      if (!game.winner) {
        throw new Error("Winner not found");
      }
      return {
        id: game.id,
        players,
        field: fieldSchema.parse(game.field),
        winner: game.winner,
        status: "gameOver",
        creator,
      } satisfies GameOverEntity;
  }
}

export const gameRepository = { gamesList };

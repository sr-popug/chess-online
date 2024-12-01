import { getIdleGames } from "@/entities/game";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardTitle } from "@/shared/ui/card";

export async function GamesList() {
  const games = await getIdleGames();
  console.log(games);
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold text-green-500">Список игр</h2>
      <article className="flex gap-4 mt-5">
        {games.map((game) => {
          return (
            <Card key={game.id} className="p-4">
              <CardTitle className="mb-2 text-yandex">
                Игра с {game.players[0].login}
              </CardTitle>
              <CardContent className="p-0 text-nowrap">
                Рейтинг игрока: {game.players[0].rating}
              </CardContent>
              <Button className="mt-8 mx-auto">Присоединиться</Button>
            </Card>
          );
        })}
      </article>
    </div>
  );
}

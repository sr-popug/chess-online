import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      login: "admin",
      passwordHash: "ertikljbha",
      rating: 1000,
    },
  });
  const user2 = await prisma.user.create({
    data: {
      login: "Гроссмейстер",
      passwordHash: "ertikljbha",
      rating: 12300,
    },
  });

  await prisma.game.create({
    data: {
      status: "idle",
      players: { connect: { id: user.id } },
      gameOverAt: new Date().toISOString(),
    },
  });
  await prisma.game.create({
    data: {
      status: "gameOver",
      players: { connect: { id: user.id } },
      gameOverAt: new Date().toISOString(),
      winnerId: user.id,
    },
  });
  await prisma.game.create({
    data: {
      status: "idle",
      players: { connect: { id: user2.id } },
      gameOverAt: new Date().toISOString(),
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

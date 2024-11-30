import { prisma } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";
import { Card, CardTitle } from "@/shared/ui/card";

export default async function Home() {
  const games = await prisma.game.findMany();

  console.log(games);

  return (
    <div className="">
      <Button size={"lg"} variant={"destructive"}>
        Button
      </Button>
      {games.map((game) => (
        <Card className="w-90" key={game.id}>
          <CardTitle>{game.name}</CardTitle>
        </Card>
      ))}
    </div>
  );
}

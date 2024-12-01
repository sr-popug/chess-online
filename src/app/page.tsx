import { GamesList } from "@/features/game-list/server";

export default async function Home() {
  return (
    <div className=" p-6 w-full">
      <GamesList />
    </div>
  );
}

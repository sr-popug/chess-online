export type GameEntity =
  | GameIdleEntity
  | GameInProgressEntity
  | GameOverEntity
  | GameOverDrawEntity;

export type GameIdleEntity = {
  id: string;
  players: PlayerEntity[];
  creator: PlayerEntity;
  status: "idle";
};

export type GameInProgressEntity = {
  id: string;
  players: PlayerEntity[];
  creator: PlayerEntity;
  field: Field;
  status: "inProgress";
};
export type GameOverEntity = {
  id: string;
  players: PlayerEntity[];
  creator: PlayerEntity;
  winner: PlayerEntity;
  field: Field;
  status: "gameOver";
};
export type GameOverDrawEntity = {
  id: string;
  players: PlayerEntity[];
  creator: PlayerEntity;
  field: Field;
  status: "gameOverDraw";
};

export type PlayerEntity = {
  id: string;
  login: string;
  rating: number;
};

export type PieceEntity = {
  id: string;
  name: string;
  color: string;
};

export type Field = (String | null)[];

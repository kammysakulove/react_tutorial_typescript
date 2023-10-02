type SquareState = "X" | "O" | null;

type BoardState = SquareState[];

type LogState = {
  nextPlayer: boolean;
  board: BoardState;
};

type GameState = {
  index: number;
  logs: LogState[];
};

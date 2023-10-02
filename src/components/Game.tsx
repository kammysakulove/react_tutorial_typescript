import Board from "./Board.tsx";
import Log from "./Log.tsx";
import { useState } from "react";
import "../types/types.ts";

const Game = () => {
  const [gameState, setGameState] = useState<GameState>({
    logs: [
      {
        board: Array(9).fill(null),
        nextPlayer: true,
      },
    ],
    index: 0,
  });
  const [player, setPlayer] = useState<boolean>(true);
  const currentBoard: BoardState = gameState.logs[gameState.index].board;

  const handlePlay = (nextSquares: BoardState) => {
    const nextPlayer = !player;
    setGameState(({ logs, index }) => {
      const newLogs: LogState[] = [
        ...logs.slice(0, index + 1),
        { nextPlayer: nextPlayer, board: nextSquares },
      ];
      return {
        logs: newLogs,
        index: index + 1,
      };
    });
    setPlayer(nextPlayer);
  };

  const loadLog = (index: number) => {
    setGameState((prevState) => ({ ...prevState, index: index }));
  };

  console.log(gameState);

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board player={player} squares={currentBoard} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <Log logs={gameState.logs} onClickLog={loadLog} />
        </div>
      </div>
    </>
  );
};

export default Game;

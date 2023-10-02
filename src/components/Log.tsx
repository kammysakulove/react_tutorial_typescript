type LogProps = {
  logs: LogState[];
  onClickLog: (index: number) => void;
};

const Log: React.FC<LogProps> = ({ logs, onClickLog }) => {
  return (
    <ol>
      {logs.map((_, index) => {
        return (
          <li key={index}>
            <button onClick={() => onClickLog(index)}>
              {index === 0 ? "go to start" : `go to move #${index}`}
            </button>
          </li>
        );
      })}
    </ol>
  );
};

export default Log;

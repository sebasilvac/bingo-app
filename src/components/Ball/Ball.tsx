import './Ball.css';

interface BallProps {
  letter: string;
  number: number;
  selected?: boolean;
  principal?: boolean;
  selectedNumber: number[];
  setSelectedNumber: (selectedNumber: number[]) => void;
}

export const Ball = ({
  letter,
  number,
  selected = true,
  principal = false,
  selectedNumber,
  setSelectedNumber,
}: BallProps) => {
  const getColor = (letter: string): string => {
    if (!selected) {
      return 'grey';
    }

    switch (letter.toLocaleUpperCase()) {
      case 'B':
        return 'red';
      case 'I':
        return 'orange';
      case 'N':
        return 'blue';
      case 'G':
        return 'green';
      case 'O':
        return 'white';
      default:
        return 'grey';
    }
  };

  return (
    <button
      className={`btn ${principal ? 'principal' : ''} `}
      data-number={`${letter}-${number}`}
      onClick={() => {
        if (setSelectedNumber) {
          const newList = [
            ...selectedNumber,
            number,
          ];

          setSelectedNumber(newList);
        }
      }}>
      <div className={`ball ${getColor(letter)}`}>
        <div className="ball-line">
          <div className={`color-line ${getColor(letter)}`}>
            <div className="ball-text">
              {letter}
              <br />
              {number}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

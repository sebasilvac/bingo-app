import { useEffect } from 'react';
import { Ball, Item } from '../../components';
import { useBingo } from '../../hooks';
import './Bingo.css';

interface BingoProps {
  time: number;
}

export const Bingo = ({time}: BingoProps ) => {
  let counter = 0;
  const {
    bingoLetters,
    numbers,
    selectedNumber,
    setSelectedNumber,
    getColor,
    lastLetter,
    lastNumber,
    refreshBingo,
    reset,
  } = useBingo();

  useEffect (() => {
    refreshBingo();
  }, [time]);

  return (
    <>
    <div className="flex flex-row w-full">
      <div id="tablero" className="w-11/12">
        {bingoLetters.map((letter) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const Column = numbers.map((_i) => {
            counter++;
            const selected = selectedNumber.includes(counter);
            return (
              <Item
                key={`${letter}-${counter}`}
                number={counter}
                selected={selected}
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
              />
            );
          });

          return (
            <div key={letter} className="flex flex-col flex-wrap">
              <div className={`item h-14 ${getColor(letter)}`}>{letter}</div>
              {Column}
            </div>
          );
        })}
      </div>

      <div
        id="last-number"
        className="w-5/12 flex justify-center content-center px-8">
        <Ball
          letter={lastLetter ?? ''}
          number={lastNumber ?? 0}
          selected={true}
          selectedNumber={selectedNumber}
          setSelectedNumber={() => {}}
          principal
        />
      </div>

    </div>
    <button onClick={reset}>Reiniciar</button>
    </>
  );
};

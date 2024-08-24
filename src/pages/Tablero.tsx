import { Item } from "../components";
import { useBingo } from "../hooks";

export const Tablero = () => {

  let counter = 0;

  const {
    bingoLetters,
    numbers,
    selectedNumber,
    setSelectedNumber,
    getColor,
  } = useBingo();

  return (
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
  );
};

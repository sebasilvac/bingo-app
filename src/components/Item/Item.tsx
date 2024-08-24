import './Item.css';

interface ItemProps {
  number: number;
  selected?: boolean;
  selectedNumber: number[];
  setSelectedNumber: (selectedNumber: number[]) => void;
}

export const Item = ({
  number,
  selected = false,
  selectedNumber,
  setSelectedNumber,
}: ItemProps) => {

  const getColor = (selected?: boolean): string => {
    if (!selected) {
      return 'grey';
    }
    
    return 'red';
  };

  return (
    <button
      className={`btn item ${getColor(selected)} h-10`}
      onClick={() => {
        //toggle
        if (selectedNumber.includes(number)) {
          const newList = selectedNumber.filter((num) => num !== number);

          setSelectedNumber(newList);
        } else if (setSelectedNumber) {
          const newList = [...selectedNumber, number];

          setSelectedNumber(newList);
        }
      }}>
      <span>{number}</span>
    </button>
  );
};

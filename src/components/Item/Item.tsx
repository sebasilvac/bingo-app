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
        if (setSelectedNumber) {
          const newList = [...selectedNumber, number];

          setSelectedNumber(newList);
        }
      }}>
      <span>{number}</span>
    </button>
  );
};

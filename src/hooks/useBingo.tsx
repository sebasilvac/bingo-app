import { useEffect, useState } from 'react';

const useBingo = () => {
  const [selectedNumber, setSelectedNumber] = useState<number[]>([]);
  const [lastNumber, setLastNumber] = useState<number | null>(null);
  const [lastLetter, setLastLetter] = useState<string | null>(null);
  const bingoLetters: string[] = ['B', 'I', 'N', 'G', 'O'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const initBingo = () => {
    if (selectedNumber.length > 0) {
      const num = selectedNumber[selectedNumber.length - 1];
      setLastNumber(num);
      setLastLetter(getLetter(num));
      localStorage.setItem('selectedNumbers', JSON.stringify(selectedNumber));
    }
  };

  useEffect(() => {
    initBingo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNumber]);

  const getSelectedNumbersFromLocalStorage = (): number[] => {
    const selectedNumbers = localStorage.getItem('selectedNumbers');
    if (selectedNumbers) {
      return JSON.parse(selectedNumbers);
    }
    return [];
  };

  useEffect(() => {
    const selectedNumbers = getSelectedNumbersFromLocalStorage();
    setSelectedNumber(selectedNumbers);
  }, []);

  const getLetter = (number: number): string => {
    if (number <= 15) {
      return 'B';
    } else if (number <= 30) {
      return 'I';
    } else if (number <= 45) {
      return 'N';
    } else if (number <= 60) {
      return 'G';
    } else {
      return 'O';
    }
  };

  const getColor = (letter: string): string => {
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

  const reset = () => {
    setSelectedNumber([]);
    setLastNumber(null);
    setLastLetter(null);
    localStorage.removeItem('selectedNumbers');
  };

  const refreshBingo = () => {
    const selectedNumbers = getSelectedNumbersFromLocalStorage();
    setSelectedNumber(selectedNumbers);
  };

  return {
    bingoLetters,
    numbers,
    selectedNumber,
    getColor,
    setSelectedNumber,
    lastNumber,
    lastLetter,
    reset,
    refreshBingo,
  };
};

export default useBingo;

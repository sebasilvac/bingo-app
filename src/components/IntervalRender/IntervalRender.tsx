import { useState, useEffect } from 'react';

interface IntervalRenderProps {
  Component: ({time}: {time: number}) => JSX.Element;
}

const IntervalRender = ({ Component }: IntervalRenderProps) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    // Establecer un intervalo para actualizar el estado cada cierto tiempo
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000); // Cambia 1000 por la cantidad de milisegundos que desees

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []); // El array vacío asegura que el intervalo solo se establezca una vez al montar

  return <Component time={time} />;
};

export default IntervalRender;

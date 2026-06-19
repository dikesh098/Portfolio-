import { useState, useEffect } from 'react';

interface Props {
  onDone: () => void;
}

export default function Loader({ onDone }: Props) {
  const [pct, setPct] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v += Math.random() * 5 + 2;
      if (v >= 100) {
        v = 100;
        clearInterval(id);
        setTimeout(() => {
          setOut(true);
          setTimeout(onDone, 700);
        }, 400);
      }
      setPct(Math.floor(v));
    }, 40);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <div className={`loader ${out ? 'out' : ''}`}>
      <div className="loader-code">// initializing portfolio.exe</div>
      <div className="loader-title">DIKESH</div>
      <div className="loader-bar"><div className="loader-fill" /></div>
      <div className="loader-pct">{String(pct).padStart(3, '0')}%</div>
    </div>
  );
}

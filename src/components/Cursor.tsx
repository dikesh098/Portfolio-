import { useState, useEffect, useRef } from 'react';

export default function Cursor() {
  const [mouse,  setMouse]  = useState({ x: -200, y: -200 });
  const [ring,   setRing]   = useState({ x: -200, y: -200 });
  const [trail,  setTrail]  = useState({ x: -200, y: -200 });
  const ringRef  = useRef({ x: -200, y: -200 });
  const trailRef = useRef({ x: -200, y: -200 });

  useEffect(() => {
    let af1: number, af2: number;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      const step = () => {
        ringRef.current.x = lerp(ringRef.current.x, e.clientX, 0.11);
        ringRef.current.y = lerp(ringRef.current.y, e.clientY, 0.11);
        setRing({ ...ringRef.current });
        af1 = requestAnimationFrame(step);
      };
      cancelAnimationFrame(af1);
      af1 = requestAnimationFrame(step);
    };

    const step2 = () => {
      trailRef.current.x = lerp(trailRef.current.x, ringRef.current.x, 0.07);
      trailRef.current.y = lerp(trailRef.current.y, ringRef.current.y, 0.07);
      setTrail({ ...trailRef.current });
      af2 = requestAnimationFrame(step2);
    };
    af2 = requestAnimationFrame(step2);
    window.addEventListener('mousemove', onMove);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(af1);
      cancelAnimationFrame(af2);
    };
  }, []);

  return (
    <>
      <div className="c-trail" style={{ left: trail.x, top: trail.y }} />
      <div className="c-ring"  style={{ left: ring.x,  top: ring.y  }} />
      <div className="c-dot"   style={{ left: mouse.x, top: mouse.y }} />
    </>
  );
}

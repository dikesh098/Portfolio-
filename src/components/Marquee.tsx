interface Props {
  items: string[];
  dur?: number;
  rev?: boolean;
  sm?: boolean;
}

export default function Marquee({ items, dur = 20, rev = false, sm = false }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`mq-wrap ${sm ? 'mq-sm' : ''}`}>
      <div
        className="mq-track"
        style={{ '--mq-dur': `${dur}s`, '--mq-dir': rev ? 'reverse' : 'normal' } as React.CSSProperties}
      >
        {doubled.map((w, i) => (
          <span key={i} className={`mq-item ${i % 4 === 2 ? 'outline' : 'fill'}`}>
            {w}
            {!sm && <span className="mq-dot" />}
          </span>
        ))}
      </div>
    </div>
  );
}

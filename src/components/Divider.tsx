import './Divider.css';

interface DividerProps {
  alignLeft: boolean;
  padding?: string;
}

export default function Divider({ alignLeft, padding }: DividerProps) {
  const moveLeft = {
    marginRight: alignLeft ? '0px' : '5px',
  };
  return (
    <div>
      <div
        className="divider"
        style={{
          alignItems: alignLeft ? 'flex-start' : 'flex-end',
          padding: '0 ' + padding,
        }}
      >
        <div className="divider-line" style={moveLeft}></div>
        <div className="divider-block" style={moveLeft}></div>
      </div>
    </div>
  );
}

import Divider from './Divider';
import './PanelTitle.css';

interface PanelTitleProps {
  alignLeft: boolean;
  subtitle: string;
  title: string;
}

export default function PanelTitle({ alignLeft, subtitle, title }: PanelTitleProps) {
  const moveLeft = {
    marginRight: alignLeft ? '0px' : '5px',
  };
  return (
    <div>
      <div
        className="panel-title-block"
        style={{
          alignItems: alignLeft ? 'flex-start' : 'flex-end',
          textAlign: alignLeft ? 'left' : 'right',
        }}
      >
        <div className="panel-subtitle">{subtitle}</div>
        <div className="panel-title" style={{ marginRight: alignLeft ? '0px' : '-7px' }}>
          {title}
        </div>
      </div>
      <Divider alignLeft={alignLeft} />
    </div>
  );
}

import React from "react";
import "./selectable.css";

interface SelectableProps {
  isSelected: boolean;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function Selectable(props: SelectableProps) {
  return (
    <div
      className="selectable"
      onClick={props.onClick}
      style={{
        color: props.isSelected ? "var(--blue)" : "white",
      }}
    >
      {props.children}
    </div>
  );
}

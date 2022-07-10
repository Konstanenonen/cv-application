import React from "react";
import "../styles/Group.css";

interface GroupProps {
  children?: React.ReactNode;
  name: string;
}

function Group({ children, name }: GroupProps) {
  return (
    <div className="group">
      <h3 className="group-name">{name}</h3>
      {children}
    </div>
  );
}

Group.defaultProps = {
  children: undefined,
};

export default Group;

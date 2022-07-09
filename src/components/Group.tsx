/* eslint-disable react/static-property-placement */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

interface GroupProps {
  children?: React.ReactNode;
  name: string;
}

class Group extends React.Component<GroupProps> {
  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children, name } = this.props;
    return (
      <div className="group">
        <h3>{name}</h3>
        {children}
      </div>
    );
  }
}

export default Group;

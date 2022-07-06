/* eslint-disable react/prefer-stateless-function */
import React from "react";

interface CvProps {
  name: string;
  email: string;
  phoneNumber: string;
  school: string;
  titleOfStudy: string;
  dateOfStudy: string;
  work: string;
  title: string;
  tasks: string;
  workDuration: string;
}

class Cv extends React.Component<CvProps> {
  render() {
    const {
      name,
      email,
      phoneNumber,
      school,
      titleOfStudy,
      dateOfStudy,
      work,
      title,
      tasks,
      workDuration,
    } = this.props;

    return (
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <p>{school}</p>
        <p>{titleOfStudy}</p>
        <p>{dateOfStudy}</p>
        <p>{work}</p>
        <p>{title}</p>
        <p>{tasks}</p>
        <p>{workDuration}</p>
      </div>
    );
  }
}

export default Cv;

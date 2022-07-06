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
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone number: {phoneNumber}</p>
        <p>School name: {school}</p>
        <p>Degree title: {titleOfStudy}</p>
        <p>Duration of study: {dateOfStudy}</p>
        <p>Company name: {work}</p>
        <p>Work title: {title}</p>
        <p>Main tasks: {tasks}</p>
        <p>Duration of work: {workDuration}</p>
      </div>
    );
  }
}

export default Cv;

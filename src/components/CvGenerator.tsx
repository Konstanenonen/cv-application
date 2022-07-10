import React, { useState } from "react";
import Button from "./Button";
import Section from "./Section";
import Cv from "./Cv";
import "../styles/CvGenerator.css";

function CvGenerator() {
  const [fillingForm, setFillingForm] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [school, setSchool] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");
  const [work, setWork] = useState("");
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState("");
  const [workDuration, setWorkDuration] = useState("");

  const toggleFormStatus = () => {
    setFillingForm(!fillingForm);
  };

  return (
    <div className="cv-generator">
      {fillingForm ? (
        <form
          className="cv-form"
          onSubmit={(e) => {
            e.preventDefault();
            toggleFormStatus();
          }}
        >
          <Section
            handleChange={(e) => setName(e.target.value)}
            value={name}
            label="Name:"
            input="name"
          />
          <Section
            handleChange={(e) => setEmail(e.target.value)}
            value={email}
            label="Email:"
            input="email"
            type="email"
          />
          <Section
            handleChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            label="Phone number:"
            input="phoneNumber"
          />
          <Section
            handleChange={(e) => setSchool(e.target.value)}
            value={school}
            label="School:"
            input="school"
          />
          <Section
            handleChange={(e) => setTitleOfStudy(e.target.value)}
            value={titleOfStudy}
            label="Title of Study:"
            input="titleOfStudy"
          />
          <Section
            handleChange={(e) => setDateOfStudy(e.target.value)}
            value={dateOfStudy}
            label="Date of Study:"
            input="dateOfStudy"
          />
          <Section
            handleChange={(e) => setWork(e.target.value)}
            value={work}
            label="Company name:"
            input="work"
          />
          <Section
            handleChange={(e) => setTitle(e.target.value)}
            value={title}
            label="Work title:"
            input="title"
          />
          <Section
            handleChange={(e) => setTasks(e.target.value)}
            value={tasks}
            label="Work tasks:"
            input="tasks"
          />
          <Section
            handleChange={(e) => setWorkDuration(e.target.value)}
            value={workDuration}
            label="Work duration:"
            input="workDuration"
          />
          <Button text="GENERATE" isSubmit />
        </form>
      ) : (
        <>
          <Cv
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            school={school}
            titleOfStudy={titleOfStudy}
            dateOfStudy={dateOfStudy}
            work={work}
            title={title}
            tasks={tasks}
            workDuration={workDuration}
          />
          <Button handleClick={toggleFormStatus} text="EDIT" isSubmit={false} />
        </>
      )}
    </div>
  );
}

export default CvGenerator;

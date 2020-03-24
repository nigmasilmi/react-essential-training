import React from 'react';
import ReactDOM from 'react-dom';

// Data
const studyHoursData = {

  average: 6,
  daysPerWeek: 7,
  codingPerSession: 4,
  dummy: "yeah"

};

const codingPerWeek = (average, codingPerSession) => {
  return average * codingPerSession;
};

// Function Component

const CodingPerWFunk = ({ average, daysPerWeek, codingPerSession }) => {

  return (
    <section className="funkSection">
      <div><p>
        My Average of study days in a week is {average}
      </p></div>
      <div><p>
        I am used to study {daysPerWeek} days per week <br />
      </p></div>
      <div><p>
        It includes theory and {codingPerSession} coding hours per session
    </p></div>
      <div><p>
        It means that my coding hours in a week are: {codingPerWeek(average, codingPerSession)} plus, hours
    </p></div>
    </section>
  )

};

ReactDOM.render(

  <CodingPerWFunk
    average={studyHoursData.average}
    daysPerWeek={studyHoursData.daysPerWeek}
    codingPerSession={studyHoursData.codingPerSession}
  />,
  document.getElementById("root")
);
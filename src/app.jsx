import ClassSchedule from "./class-schedule";
import Header from "./header";
import SchoolCatalog from "./school-catalog";
import { useState } from "react";

export default function App() {
  const [classes, setClasses] = useState([{
    "trimester": "1",
    "courseNumber": "OS1000",
    "courseName": "Fundamentals of Open Source Operating Systems",
    "semesterCredits": "2.5",
    "totalClockHours": "37.5"
  }]);

  return (
    <div>
      <Header />
      {/* Loading and pagination is working. Display of the class schedule is also working but adding and removing is not. */}
      <SchoolCatalog setClasses={(classes) => setClasses(classes)} />
      <ClassSchedule classes={classes} />
    </div>
  );
}

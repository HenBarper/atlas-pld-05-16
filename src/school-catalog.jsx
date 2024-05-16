import { useState, useEffect } from 'react';
import data from '../public/api/courses.json';

const paginationSize = 5;

export default function SchoolCatalog({ setClasses = () => void(0) }) {
  const [courses, setCourses] = useState(null);
  const [pagination, setPagination] = useState(0);
  useEffect(() => {
    (async () => {
      const coursesData = (await (await fetch('http://localhost:3000/api/courses.json')).json());
      console.log(coursesData);
      setCourses(coursesData);
    })();
  }, []);

  useEffect(() => {
    if (pagination < 0) {
      setPagination(0);
    }
    if (!courses) {
      return;
    }
    if (pagination * paginationSize > courses.length) {
      setPagination(pagination - 1);
    }
  }, [pagination]);

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <input type="text" placeholder="Search" />
      <table>
        <thead>
          <tr>
            <th>Trimester</th>
            <th>Course Number</th>
            <th>Courses Name</th>
            <th>Semester Credits</th>
            <th>Total Clock Hours</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {courses ? (() => {
            const paginatedCourses = courses.slice(pagination * paginationSize, (pagination + 1) * paginationSize);
            return paginatedCourses.map((course) => (
            <tr key={course.courseNumber}>
              <td>{course.trimester}</td>
              <td>{course.courseNumber}</td>
              <td>{course.courseName}</td>
              <td>{course.semesterCredits}</td>
              <td>{course.totalClockHours}</td>
              <td>
                <button onClick={() => {
                  const newClasses = Array.from
                }}>Enroll</button>
              </td>
            </tr>
            ))
          })()
           : null}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => setPagination(pagination - 1)}>Previous</button>
        <button onClick={() => setPagination(pagination + 1)}>Next</button>
      </div>
    </div>
  );
}

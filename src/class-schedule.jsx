export default function ClassSchedule({ classes = null }) {
  return (
    <div className="class-schedule">
      <h1>Class Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Course Number</th>
            <th>Course Name</th>
            <th>Drop</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((schoolClass) => (
          <tr>
            <td>{schoolClass.courseNumber}</td>
            <td>{schoolClass.courseName}</td>
            <td>
              <button>Drop</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { useState } from "react";
import "./Mentor.css";
import jsPDF from "jspdf";

const Mentor = ({mentor,assignedStudents,Remaining_students,Prev_page,Assign_student,Remove_student,MarksChange}) => {
  const [isFinalSubmitted, setIsFinalSubmitted] = useState(false);
  const RemoveStudent = (studentId) => {
    if (!isFinalSubmitted) {
      Remove_student(studentId);
    }
  };
  const Marks_Change = (studentId, markType, value) => {
    if(value>10){
      alert("Marks Cannot be greater than 10");
      return;
    }
    if (!isFinalSubmitted) {
      MarksChange(studentId, markType, value);
    }
  };
  const FinalSubmit = () => {
    var chk=1;
    if(assignedStudents.length<3){
      alert("Selected Students Cannot be less than 3");
      return;
    }
    assignedStudents.every(student=>{
      if(student.total>-1){

      }
      else{
        alert("The Marks Field Cannot be Empty");
        chk=0;
        return false;
      }
    });
    if(chk===0){
      return;
    }
    setIsFinalSubmitted(true);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Mentor: ${mentor.name}`, 10, 10);
    let y = 20;
    assignedStudents.forEach((student) => {
      doc.text(
        `${student.name} - Ideation: ${student.ideation}, Execution: ${student.execution}, Viva: ${student.viva}, Total: ${student.total}`,
        10,y
      );
      y += 10;
    });
    doc.save("students_report.pdf");
  };
  
  return (
    <div className="mentor">
      <h2>{mentor.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ideation</th>
            <th>Execution</th>
            <th>Viva</th>
            <th>Total</th>
            <th>Action</th>
            <th><button className="button1" onClick={Prev_page}>Return</button></th>
          </tr>
        </thead>
        <tbody>
          {assignedStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                <input
                  type="number"
                  value={student.ideation}
                  onChange={(e) =>
                    Marks_Change(student.id, "ideation", e.target.value)
                  }
                  disabled={isFinalSubmitted}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.execution}
                  onChange={(e) =>
                    Marks_Change(student.id, "execution", e.target.value)
                  }
                  disabled={isFinalSubmitted}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.viva}
                  onChange={(e) =>
                    Marks_Change(student.id, "viva", e.target.value)
                  }
                  disabled={isFinalSubmitted}
                />
              </td>
              <td>{student.total}</td>
              {!isFinalSubmitted && (
                <td>
                <button className="button1"
                  onClick={() => RemoveStudent(student.id)}
                  disabled={isFinalSubmitted}
                >
                  Remove
                </button>
              </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {!isFinalSubmitted && (
        <>
          <h2>Unassigned Students</h2>
          <table>
            <tbody>
              {Remaining_students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>
                    <button className="button2" onClick={() => Assign_student(student.name)}>
                      Assign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="button1" onClick={FinalSubmit}>Lock Grades</button>
        </>
      )}
      {isFinalSubmitted && <button className="button2" onClick={downloadPDF}>Download Report Card</button>}
    </div>
  );
};

export default Mentor;


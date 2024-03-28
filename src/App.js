import "./App.css";
import { useState } from "react";
import MentorList from "./components/Landing_page";
import MentorDetail from "./components/Mentor";
import { mentors as initialMentors, students as initialStudents } from "./database";

function App() {
  const [mentors] = useState(initialMentors);
  const [students, setStudents] = useState(initialStudents);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const select_Mentor = (mentorId) => {
    setSelectedMentor(mentorId);
  };

  const Prev_page = () => {
    setSelectedMentor(null);
  };

  const Assigned_Student_list = () => {
    return students.filter((student) => student.mentorId === selectedMentor);
  };

  const Marks_change = (studentId, markType, value) => {
    const updatedStudents = students.map((student) => {
      if (student.id === studentId) {
        var ideation=parseInt(student.ideation);
        var execution=parseInt(student.execution);
        var viva=parseInt(student.viva);
        var total=parseInt(ideation+execution+viva);
        if(markType==="ideation"){
          ideation=parseInt(value);
        }
        if(markType==="execution"){
          execution=parseInt(value);
        }
        if(markType==="viva"){
          viva=parseInt(value);
        }
        if(viva>10 || ideation>10 || execution>10){
          alert("Given Marks Cannot be greater than Maximum Marks");
        }
        else{
          total=parseInt(ideation+execution+viva);
        }
        return {
          ...student,
          ideation,
          execution,
          viva,
          total,
        };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const AddStudent = (studentName) => {
    if (Assigned_Student_list().length < 4) {
      const existingStudent = students.find(
        (student) => student.name === studentName
      );
      if (existingStudent) {
        if (!existingStudent.mentorId) {
          const updatedStudents = students.map((student) =>
            student.name === studentName ? { ...student, mentorId: selectedMentor }: student
          );
          setStudents(updatedStudents);
        } else {
          alert("This student is already assigned to a mentor.");
        }
      } else {
        const newStudent = {
          id: students.length + 1,
          name: studentName,
          mentorId: selectedMentor,
          ideation: 0,
          execution: 0,
          viva: 0,
          total: 0,
        };
        setStudents([...students, newStudent]);
      }
    } else {
      alert("A mentor can have a maximum of 4 students.");
    }
  };

  const RemoveStudent = (studentId) => {
    if (Assigned_Student_list().length > -1) {
      const updatedStudents = students.map((student) =>
        student.id === studentId ? { ...student, mentorId: null } : student
      );
      setStudents(updatedStudents);
    }
  };

  return (
    <div className="app">
      {selectedMentor ? (
        <MentorDetail
          mentor={mentors.find((mentor) => mentor.id === selectedMentor)}
          assignedStudents={Assigned_Student_list()}
          Remaining_students={students.filter((student) => !student.mentorId)}
          Prev_page={Prev_page}
          MarksChange={Marks_change}
          Assign_student={AddStudent}
          Remove_student={RemoveStudent}
        />
      ) : (
        <MentorList mentors={mentors} MentorClick={select_Mentor} />
      )}
    </div>
  );
}

export default App;

import "./Landing_page.css";

const MentorList = ({ mentors, MentorClick }) => {
  return (
    <div className="hero-section">
      <h2>Available Mentors</h2>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor.id} onClick={() => MentorClick(mentor.id)}>
            {mentor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorList;

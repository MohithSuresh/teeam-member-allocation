import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

const TeamMemberCard = ({
  employee,
  handleEmployeeCardColor,
  handleEmployeeCardClick,
}) => {
  return (
    <div
      key={employee.id}
      className={handleEmployeeCardColor(employee)}
      id={employee.id}
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      {employee.gender === "female" ? (
        <img src={femaleProfile} className="card-img-top" alt="..." />
      ) : (
        <img src={maleProfile} className="card-img-top" alt="..." />
      )}

      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation:</b> {employee.designation}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;

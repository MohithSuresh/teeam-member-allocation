import TeamMemberCard from "./TeamMemberCard";
const TeamMembers = ({
  employees,
  handleEmployeeCardColor,
  handleEmployeeCardClick,
}) => {
  return (
    <div className="row justify-content-center mt-3 mb-3">
      <div className="col-8">
        <div className="card-collection">
          {employees.map((employee) => (
            <TeamMemberCard
              employee={employee}
              key={employee.id}
              handleEmployeeCardColor={handleEmployeeCardColor}
              handleEmployeeCardClick={handleEmployeeCardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;

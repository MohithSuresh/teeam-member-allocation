import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";
import "./App.css";
import TeamsDropDown from "./TeamsDropDown";
import TeamMembers from "./TeamMembers";

const Employees = ({
  employees,
  setEmployees,
  selectedTeam,
  setSelectedTeam,
}) => {
  const handleEmployeeCardClick = (e) => {
    let transformedEmployees = employees.map((employee) => {
      if (employee.id === parseInt(e.currentTarget.id)) {
        if (employee.teamName === selectedTeam) {
          return { ...employee, teamName: "" };
        } else {
          return { ...employee, teamName: selectedTeam };
        }
      } else {
        return employee;
      }
    });
    setEmployees(transformedEmployees);
  };

  const handleEmployeeCardColor = (employee) => {
    // return employee.teamName === selectedTeam
    //   ? "card text-white bg-success mb-3"
    //   : "card text-white bg-primary mb-3";

    if (employee.teamName === selectedTeam) {
      return "card text-black bg-success mb-3 m-2";
    } else {
      return "card text-black bg-white mb-3 m-2";
    }
  };
  return (
    <>
      <main>
        <div className="container">
          <TeamsDropDown
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
          />

          <TeamMembers
            employees={employees}
            handleEmployeeCardColor={handleEmployeeCardColor}
            handleEmployeeCardClick={handleEmployeeCardClick}
          />
        </div>
      </main>
    </>
  );
};

export default Employees;

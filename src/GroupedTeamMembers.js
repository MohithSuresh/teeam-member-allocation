import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam }) => {
  const [collapsedTeam, setCollapsedTeam] = useState([selectedTeam]);

  const teams = ["TeamA", "TeamB", "TeamC", "TeamD"];
  const handleGroupMembersClick = (e) => {
    if (collapsedTeam.includes(e.currentTarget.id)) {
      setCollapsedTeam(
        collapsedTeam.filter((team) => team !== e.currentTarget.id)
      );
    } else {
      console.log(collapsedTeam);
      setCollapsedTeam([...collapsedTeam, e.currentTarget.id]);
    }
  };

  return (
    <main className="container">
      {teams.map((team) => {
        return (
          <div
            key={team}
            id={team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
            onClick={handleGroupMembersClick}
          >
            <h4 id={team} className="card-header text-secondary">
              {team}
            </h4>

            <div
              id={"collaple_" + team}
              className={!collapsedTeam.includes(team) ? "collapse" : ""}
            >
              <hr />
              {employees
                .filter((employee) => employee.teamName === team)
                .map((employee) => {
                  return (
                    <div key={employee.id} className="card-title">
                      <h5 className="card-title">
                        Full Name: {employee.fullName}
                      </h5>
                      <p className="card-text">
                        Designation: {employee.designation}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMembers;

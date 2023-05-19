const Header = ({ employees, selectedTeam }) => {
  const handleTeamCount = () => {
    return employees.filter((employee) => employee.teamName === selectedTeam)
      .length;
  };

  return (
    <header classsName="container">
      <div
        className="row justify-content-center mt-3 mb-4"
        style={{ textAlign: "center" }}
      >
        <div className="col-4">
          <h1>Employee Management</h1>
          <h3>
            {selectedTeam} has {handleTeamCount()}{" "}
            {handleTeamCount() === 1 ? "Member" : "Members"}{" "}
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;

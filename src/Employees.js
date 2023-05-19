import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";
import "./App.css";

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
          <div className="row justify-content-center mt-3 mb-3">
            <div className="col-2">
              <select
                className="form-select form-select-lg"
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
              >
                <option value="TeamA">TeamA</option>
                <option value="TeamB">TeamB</option>
                <option value="TeamC">TeamC</option>
                <option value="TeamD">TeamD</option>
              </select>
            </div>
          </div>
          <div className="row justify-content-center mt-3 mb-3">
            <div className="col-8">
              <div className="card-collection">
                {employees.map((employee) => (
                  <div
                    key={employee.id}
                    className={handleEmployeeCardColor(employee)}
                    id={employee.id}
                    style={{ cursor: "pointer" }}
                    onClick={handleEmployeeCardClick}
                  >
                    {employee.gender === "female" ? (
                      <img
                        src={femaleProfile}
                        className="card-img-top"
                        alt="..."
                      />
                    ) : (
                      <img
                        src={maleProfile}
                        className="card-img-top"
                        alt="..."
                      />
                    )}

                    <div className="card-body">
                      <h5 className="card-title">
                        Full Name: {employee.fullName}
                      </h5>
                      <p className="card-text">
                        <b>Designation:</b> {employee.designation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Employees;

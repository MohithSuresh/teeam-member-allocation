const TeamsDropDown = ({ selectedTeam, setSelectedTeam }) => {
  return (
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
  );
};

export default TeamsDropDown;

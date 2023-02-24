import "./summary.css";
import Data from "../../data.json";

export const Summary = () => {
  return (
    <div className="summary-card">
      <h2>Summary</h2>
      {Data.map((data) => (
        <div className={`list ${data.category}`}>
          <div className="icon-and-reaction">
            <img src={data.icon} alt={data.category} />
            <p>{data.category}</p>
          </div>
          <div className="score">
            {data.score}
            <span>&nbsp; /&nbsp;100</span>
          </div>
        </div>
      ))}

      <button className="button" type="button">
        Continue
      </button>
    </div>
  );
};

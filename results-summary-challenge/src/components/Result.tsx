import "./result.css";
import Data from "../../data.json";

export const Result = () => {
  return (
    <div className="result-card">
      <h2>Your Result</h2>
      <div className="circle">
        <span>76</span>
        <p>of 100</p>
      </div>
      <h1>Great</h1>
      <p className="text">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

import "./Error.css";

const Error = ({ errorMessage }) => {
  return (
    <div className="error-container">
      <p>{errorMessage}</p>
    </div>
  );
};

export default Error;
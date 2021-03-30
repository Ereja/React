import "./DefaultButton.css";

const DefaultButton = ({ onClick, disabled }) => {
  return (
    <button className="get-weather" type="submit" onClick={onClick} disabled={disabled}>
      Get weather
    </button>
  );
};

export default DefaultButton;

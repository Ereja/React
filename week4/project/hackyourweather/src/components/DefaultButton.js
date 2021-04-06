import "./DefaultButton.css";

const DefaultButton = ({ onClick, disabled }) => {
  return (
    <button
      className="weather-btn"
      type="submit"
      onClick={onClick}
      disabled={disabled}
    >
      Get weather
    </button>
  );
};

export default DefaultButton;

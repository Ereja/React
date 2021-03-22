import "./DefaultButton.css";

const DefaultButton = ({ onClick }) => {
  return (
    <div>
      <button type="submit" onClick={onClick}>
        Get weather
      </button>
    </div>
  );
};

export default DefaultButton;

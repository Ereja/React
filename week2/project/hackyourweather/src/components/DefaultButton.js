import "./DefaultButton.css";

const DefaultButton = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      Get weather
    </button>
  );
};

export default DefaultButton;

import "../DefaultButtons.css"

const Button = ({ getFriend }) => {
  return <button onClick={getFriend}>Get a friend!</button>;
};

export default Button;
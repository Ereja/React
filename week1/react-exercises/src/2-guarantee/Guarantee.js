import "./Guarantee.css";

const Guarantee = ({ img, title, description }) => {
  return (
    <div className="guarantees">
      <h1>Guarantees:</h1>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;

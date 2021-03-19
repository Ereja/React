import "./Guarantees.css";
import Guarantee from "./Guarantee";

const Guarantees = () => {
  const guarantees = [
    {
      img: "./images/f-delivery.png",
      title: "Free shipping",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sunt praesentium, quaerat voluptatum consequuntur nam",
    },
    {
      img: "./images/coin.png",
      title: "100% Money back",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sunt praesentium, quaerat voluptatum consequuntur nam",
    },
    {
      img: "./images/chat.png",
      title: "Online support 24/7",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique sunt praesentium, quaerat voluptatum consequuntur nam",
    },
  ];

  return (
    <div className="guarantees-container">
      {guarantees.map(guarantee => (
        <Guarantee
          key={guarantee.title}
          img={guarantee.img}
          title={guarantee.title}
          description={guarantee.description}
        />
      ))}
    </div>
  );
};

export default Guarantees;

import "./Loading.css"

//loading animation is taken from https://loading.io/css/
const Loading = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;

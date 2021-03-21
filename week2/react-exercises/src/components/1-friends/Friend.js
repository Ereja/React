import { useState } from "react";
import "./Friends.css";
import Button from "./Button";
import FriendProfile from "./FriendProfile";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const getFriend = () => {
    setLoading(true);
    return fetch("https://www.randomuser.me/api?results=1")
      .then(res => res.json())
      .then(data => {
        setFriend(data.results[0]);
      })
      .catch(err => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="friends-container">
      <Button getFriend={getFriend} />
      {isLoading && <p>Loading...</p>}
      {hasError && <p>Something went wrong!</p>}
      {!hasError && Object.entries(friend).length !== 0 && (
        <FriendProfile friendInfo={friend} />
      )}
    </div>
  );
};

export default Friend;

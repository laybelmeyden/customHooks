import React from "react";
const tweets = [
  { user: "user1", text: "text1" },
  { user: "user2", text: "text2" },
  { user: "user3", text: "text3" },
  { user: "user4", text: "text4" },
  { user: "user5", text: "text5" },
];
const TodoUser = () => {
  const [likedTweets, setLikedTweets] = React.useState([]);
  const onLikeFunc = (i) => {
    setLikedTweets(
      likedTweets.includes(i)
        ? likedTweets.filter((t) => t !== i)
        : likedTweets.concat(i)
    );
  };
  return (
    <div>
      <h1>Twitor</h1>
      <ul>
        <ListElement tweet={{ ...tweets }} onClick={onLikeFunc} />
      </ul>
    </div>
  );
};
const ListElement = ({ tweet, cl }) => {
  console.log("render");
  return (
    <>
      {console.log(tweet)}
      {tweet.map((e, i) => (
        <li key={i}>
          <div>{e.user}</div>
          <div>{e.text}</div>
          <button onClick={cl}>{tweet.likedTweets ? "da" : "net"}</button>
        </li>
      ))}
    </>
  );
};

export default TodoUser;

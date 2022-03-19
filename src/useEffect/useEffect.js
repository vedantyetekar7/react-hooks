import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffect = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [chatCnt, setChatCnt] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API called");
      });

    document.title = `Chats(${chatCnt})`;
  });

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <hr></hr>
      <div>
        <p
          style={{ fontStyle: "sans serif", fontSize: "19px" }}
        >{`Chats(${chatCnt})`}</p>
        <button onClick={() => setChatCnt(chatCnt + 1)}>chat</button>
      </div>
    </div>
  );
};

export default UseEffect;

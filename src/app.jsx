import React, { useState, useCallback } from "react";
import "./style.css";

export default function App() {
  const title = document.getElementsByClassName("title");
  const [isclicked, setIsClicked] = useState(false);
  const toggle = useCallback(() => {
    setIsClicked(!isclicked);
    console.log(isclicked);
  }, [isclicked]);
  return (
    <h1
      className="title"
      onClick={toggle}
      style={{ backgroundColor: isclicked ? "red" : "yellow" }}
    >
      오랜만에 리액트로 웹페이지를 만들고 서버를 띄웠어용
    </h1>
  );
}

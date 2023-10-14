import "./App.css";
import React, { useState } from "react";

import {
  FacebookIcon,
  TelegramShareButton,
  FacebookShareButton,
  TelegramIcon,
  WhatsappShareButton,
  LinkedinIcon,
  WhatsappIcon,
  LinkedinShareButton,
} from "react-share";
const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="share">
          <FacebookShareButton url="sdsdq" quote={quoteData.content}>
            <FacebookIcon quote={quoteData.content} />
          </FacebookShareButton>
          <TelegramShareButton title={quoteData.content} url={"/"}>
            <TelegramIcon size={50} round={true} />
          </TelegramShareButton>
          <WhatsappShareButton
            title={quoteData.content}
            separator={" "}
            url={"/"}
          >
            <WhatsappIcon size={50} round={true} />
          </WhatsappShareButton>
          <LinkedinShareButton url={"/"}>
            <LinkedinIcon />
          </LinkedinShareButton>
        </div>
      </div>
    </>
  );
};

export default App;

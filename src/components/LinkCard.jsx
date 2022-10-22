import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import style from "../styles/Main.module.scss";

const LinkCard = ({ original_link, full_short_link, handleCopy }) => {
  const [copied, setCopied] = React.useState(false);

  const copyTimeOut = () => {
    setCopied(true);
    setTimeout(function () {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className={style.LinkContainer}>
      <p>{original_link}</p>
      <p>{full_short_link}</p>
      {copied ? (
        <button
        style={{backgroundColor: 'hsl(257, 27%, 26%)'}}
        >
          Copied!
        </button>
      ) : (
        <button
          onClick={() => {
            handleCopy(full_short_link);
            copyTimeOut();
          }}
        >
          Copy
        </button>
      )}
      {/* <button
      className={copied ? style.ButtonCopied : style.Button}
        onClick={() => {
          handleCopy(full_short_link);
          copyTimeOut();
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button> */}
    </div>
  );
};

export default LinkCard;

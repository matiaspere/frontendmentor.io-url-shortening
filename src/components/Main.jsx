import React from "react";
import style from "../styles/Main.module.scss";
import LinkCard from "./LinkCard";

import image1 from "../images/icon-brand-recognition.svg";
import image2 from "../images/icon-detailed-records.svg";
import image3 from "../images/icon-fully-customizable.svg";

const Main = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [list, setList] = React.useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const fetchValue = async () => {
    const res = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${inputValue}`
    );
    const data = await res.json();

    const newList = [...list];
    newList.push(data.result);
    setList(newList);
    setInputValue("");
    localStorage.setItem("links", JSON.stringify(newList));
  };

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
  };

  React.useEffect(() => {
    let getLinks = localStorage.getItem("links");
    if (getLinks) {
      setList(JSON.parse(getLinks));
    }
  }, []);

  return (
    <div className={style.Main}>
      <div className={style.MainInput}>
        <input
          placeholder="Shorten a link here..."
          value={inputValue}
          onChange={handleInput}
        />
        <button onClick={fetchValue}>Shorten It!</button>
      </div>

      <div className={style.MainLinks}>
        {/* {list &&
          list.map((i, idx) => (
            <div className={style.LinkContainer}>
              <p>{i.original_link}</p>
              <p>{i.full_short_link}</p>
              <button onClick={() => {handleCopy(i.full_short_link)}}>Copy</button>
            </div>
          ))} */}

        {list &&
          list.map((i, idx) => (
            <LinkCard
              original_link={i.original_link}
              full_short_link={i.full_short_link}
              handleCopy={handleCopy}
            />
          ))}
      </div>

      <div className={style.MainContentTitle}>
        <p>Advanced Statistics</p>
        <p>
          Track how your links are perfoming across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className={style.MainContentContainer}>
        <div className={style.FeaturesContainer}>
          <div>
            <img src={image1} />
          </div>
          <p>Brand Recognition</p>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <hr></hr>
        <div className={style.FeaturesContainer}>
          <div>
            <img src={image2} />
          </div>
          <p>Detailed Records</p>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <hr></hr>
        <div className={style.FeaturesContainer}>
          <div>
            <img src={image3} />
          </div>
          <p>Fully Customizable</p>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
      <div className={style.MainBanner}>
        <p>Boost your links today</p>
        <button className={style.HeroButton}>Get Started</button>
      </div>
    </div>
  );
};

export default Main;

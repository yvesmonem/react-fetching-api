import { useState } from "react";
import "./App.css";

const URL = "https://random.dog/woof.json";

const getRandomDog = async () => {
  const response = await fetch(URL);

  const body = await response.json();

  return body.url;
};

export const Home = () => {
  const [url, setURL] = useState(null);

  const onClickhandler = async () => {
    const url = await getRandomDog();
    setURL(url);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={onClickhandler}>
        Click here for a Random Dog <br></br>
      </button>
      <span>
        <br></br>
        {url}
      </span>
    </div>
  );
};
export default Home;

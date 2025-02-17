import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Home = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = "h4HxlAAdZ1SD5VIbJW2xAAUciTM2sThV5DuJxMLL2yyQ62tkRoe8qUtT";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  // Closure
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    newURL =
      currentSearch === ""
        ? `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`
        : `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
            page + 1
          }`;

    console.log("morePicture: ", newURL);
    console.log(newURL);
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button
          onClick={morePicture}
          className="btn"
        >
          more
        </button>
      </div>
    </div>
  );
};

export default Home;

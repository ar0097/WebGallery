import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import ImgList from "./ImgList";

const Container = () => {
  const [imageList, setImageList] = useState([]);

  const loadFunc = (e) => {
    console.log(e);
    axios
      .get(
        `https://api.unsplash.com/photos/?page=${e}&per_page=20&client_id=kVFAqJTd6OE3at_DvdnEL8E0J92nMV8b4xK5LTuEm4Y`
      )
      .then((response) => setImageList((old) => [...old, ...response.data]));
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadFunc}
      hasMore={true || false}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <ImgList images={imageList} />
    </InfiniteScroll>
  );
};

export default Container;

import React, { useState } from "react";
import Mountain from "../Images/mountain.jpeg";
import Beach from "../Images/beach.jpeg";
import King from "../Images/king.jpeg";
import Chess from "../Images/chess.jpeg";
import Nature from "../Images/nature.jpeg";
import Rocket from "../Images/rocket.jpeg";

const MainOption = () => {
  const ImageSwitch = title => {
    switch (title) {
      case "mountain":
        return <img src={Mountain} alt="" />;
      case "beach":
        return <img src={Beach} alt="" />;
      case "king":
        return <img src={King} alt="" />;
      case "chess":
        return <img src={Chess} alt="" />;
      case "nature":
        return <img src={Nature} alt="" />;
      case "rocket":
        return <img src={Rocket} alt="" />;
    }
  };

  const { content } = this.props;
  return (
    <div className="main-gallery">
      <h2>{content}</h2>
      {ImageSwitch(content)}
    </div>
  );
};

const Option = () => {
   ImageSwitch  (title,pavi) { 
    switch (title) {
      case "mountain":
        return <img src={Mountain} onClick={() => pavi(title)} alt="" />;
      case "beach":
        return <img src={Beach} onClick={() => pavi(title)} alt="" />;
      case "king":
        return <img src={King} onClick={() => pavi(title)} alt="" />;
      case "chess":
        return <img src={Chess} onClick={() => pavi(title)} alt="" />;
      case "nature":
        return <img src={Nature} onClick={() => pavi(title)} alt="" />;
      case "rocket":
        return <img src={Rocket} onClick={() => pavi(title)} alt="" />;
    }
  };

  const { title, pavi } = this.props;
  return ImageSwitch(title, pavi);
};

const Selectoption = () => {
  const [gallerySelected, setGallerySelected] = useState("");

  const changeTitle = d => setGallerySelected(() => ({ gallerySelected: d }));

  return (
    <div className="gallery">
      <MainOption content={gallerySelected} />
      <div className="option-gallery">
        <Option title="mountain" pavi={changeTitle} />
        <Option title="beach" pavi={changeTitle} />
        <Option title="king" pavi={changeTitle} />
        <Option title="chess" pavi={changeTitle} />
        <Option title="nature" pavi={changeTitle} />

        <Option title="rocket" pavi={changeTitle} />
      </div>
    </div>
  );
};

export default Selectoption;

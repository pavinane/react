import React, { useState } from "react";
import Mountain from "../Images/mountain.jpeg";
import Beach from "../Images/beach.jpeg";
import King from "../Images/king.jpeg";
import Chess from "../Images/chess.jpeg";
import Nature from "../Images/nature.jpeg";
import Rocket from "../Images/rocket.jpeg";

class MainGallery extends React.Component {
  ImageSwitch(title) {
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
      default:
        return <img src="https://placeimg.com/1000/500/randoms" alt="" />;
    }
  }

  render() {
    const { content } = this.props;
    return (
      <div className="main-gallery">
        <h2>{content}</h2>
        {this.ImageSwitch(content)}
      </div>
    );
  }
}

const OptionGallery = () => {
  const ImageSwitch = (title, pavi) => {
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
      default:
        return <img src="https://placeimg.com/1000/500/randoms" alt="" />;
    }
  };
};

const Gallery = () => {
  const [gallerySelected, setGallerySelected] = useState("nane");

  const changeTitle = d => setGallerySelected(() => ({ gallerySelected: d }));

  return (
    <div className="gallery">
      <MainGallery content={gallerySelected} />
      <div className="option-gallery">
        <select>
          <option>
            <OptionGallery title="mountain" pavi={changeTitle} />
          </option>
          <option>
            <OptionGallery title="beach" pavi={changeTitle} />
          </option>
          <option>
            <OptionGallery title="king" pavi={changeTitle} />
          </option>
          <option>
            <OptionGallery title="chess" pavi={changeTitle} />
          </option>
          <option>
            <OptionGallery title="nature" pavi={changeTitle} />
          </option>
          <option>
            <OptionGallery title="rocket" pavi={changeTitle} />
          </option>
        </select>
      </div>
    </div>
  );
};

export default Gallery;

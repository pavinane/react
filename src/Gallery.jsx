import React from "react";
import Mountain from "./Images/mountain.jpeg";
import Beach from "./Images/beach.jpeg";
import King from "./Images/king.jpeg";
import Chess from "./Images/chess.jpeg";
import Nature from "./Images/nature.jpeg";
import Rocket from "./Images/rocket.jpeg";
import "./gallery.css";
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

class OptionGallery extends React.Component {
  ImageSwitch(title, pavi) {
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
  }
  render() {
    const { title, pavi } = this.props;
    return this.ImageSwitch(title, pavi);
  }
}

class Gallery extends React.Component {
  state = {
    gallerySelected: "nane"
  };
  changeTitle = d => this.setState(() => ({ gallerySelected: d }));

  render() {
    const { gallerySelected } = this.state;
    return (
      <div className="gallery">
        <MainGallery content={gallerySelected} />
        <div className="option-gallery">
          <OptionGallery title="mountain" pavi={this.changeTitle} />
          <OptionGallery title="beach" pavi={this.changeTitle} />
          <OptionGallery title="king" pavi={this.changeTitle} />
          <OptionGallery title="chess" pavi={this.changeTitle} />
          <OptionGallery title="nature" pavi={this.changeTitle} />

          <OptionGallery title="rocket" pavi={this.changeTitle} />
        </div>
      </div>
    );
  }
}

export default Gallery;

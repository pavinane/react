import React from "react";
import "./left.scss";
import prfimg from "./ImagesInsta/vijay.jpg";

const Gimages = ({
 image, h2, small, p 
}) => (
  <div className="Stories">
    <div className="stry">
      <img src={image} alt="" />
    </div>
    <div className="stry-name">
      <h2>{h2}</h2>
      <small>{small}</small>
    </div>
    <p>{p}</p>
  </div>
);
class Leftcards extends React.Component {
  render() {
    return (
      <div className="left-card">
        <div className="cards">
          <div className="Dp">
            <div className="pic">
              <img src={prfimg} alt="" />
            </div>
            <div className="U-name">
              <h2>nanepavi97</h2>
              <span>Páví Ñañ Ê 18/4/97</span>
            </div>
          </div>
          <div className="stories">
            <div className="tit">
              <h4>stories</h4>
              <h3>watch all</h3>
            </div>
            <Sto />
          </div>
          <div className="suggest">
            <div className="sug-1">
              <h4>suggestion for you</h4>
              <h3>see all</h3>
            </div>
            <Suggs />
          </div>
          <div className="pavi">
            <ul>
              <li>about us</li>
              <li>support</li>
              <li>press</li>
              <li>API</li>
              <li>jobs</li>
              <li>privacy</li>
              <li>Terms</li>
              <li>directory</li>
              <li>profiles</li>
              <li>hashtags</li>
              <li>LANGUAGE</li>
            </ul>
          </div>
          <div className="company">
            <div className="company">
              <p>© 2019 INSTAGRAM</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Suggs = () => (
  <div className="sug-2">
    <Gimages
      image="https://placeimg.com/45/45/place"
      h2="veeramani53"
      small="Followed by prabha.smarty  "
      p="follow"
    />
    <Gimages
      image="https://placeimg.com/45/45/place"
      h2="
                thala_pr44"
      small="Followed by ravin_4_ + 6 more"
      p="follow"
    />
    <Gimages
      image="https://placeimg.com/45/45/place"
      h2="saran_maestro"
      small="Follows you    "
      p="follow"
    />
  </div>
);
const Sto = () => (
  <div className="u-story">
    <Gimages
      image="https://placeimg.com/45/45/place"
      h2="fantastic four"
      small="3  minutes ago"
    />
    <Gimages
      image="https://placeimg.com/45/45/animal"
      h2="vidyu_hff"
      small="7  minutes ago"
    />
    <Gimages
      image="https://placeimg.com/45/45/birds"
      h2="Devesh"
      small="1 Day ago"
    />
    <Gimages
      image="https://placeimg.com/45/45/tiger"
      h2="veeramani"
      small="10 hours ago"
    />
    <Gimages
      image="https://placeimg.com/45/45/cat"
      h2="soncar"
      small="9 hours ago"
    />
    <Gimages
      image="https://placeimg.com/45/45/lion"
      h2="i_nevathathomas"
      small="2 hours ago"
    />
    <Gimages
      image="https://placeimg.com/45/45/sparrow"
      h2="ritika_offl"
      small="16 hours ago"
    />
    <Gimages
      image="https://placeimg.com/45/45/zeebra"
      h2="abirami_official"
      small="8 minutes ago"
    />
    <Gimages
      image="https://placeimg.com/45/45/dog"
      h2="premgi"
      small="1 day ago"
    />
    <Gimages
      image="https://placeimg.com/45/45/monkey"
      h2="rufisingh12"
      small="24  minutes ago"
    />
    <Gimages
      image="https://placeimg.com/45/45/elephant"
      h2="yash_rockey__"
      small="48 minutes ago"
    />
    <Gimages
      image="https://placeimg.com/45/45/horse"
      h2="chandrikaravi"
      small="18 minutes ago"
    />
  </div>
);
export default Leftcards;

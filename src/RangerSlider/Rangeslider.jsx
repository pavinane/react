import React, { Component } from "react";
import { Slider, Rail, Handles } from "react-compound-slider";
import Handle from "./Index";

const sliderStyle = {
  position: "relative",
  width: "100%",
  // marginLeft: -20,
  marginTop: 40
  // marginLeft: 20px,
};

const railStyle = {
  position: "absolute",
  width: "100%",
  height: 8,
  borderRadius: 4,
  cursor: "pointer",
  backgroundColor: "#C8C8C8"
};

const domain = [10, 100];
const defaultValues = [0, 100];

class Ranger extends Component {
  render() {
    return (
      <div style={{ margin: "10%", width: "80%" }}>
        <Slider
          mode={2}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={defaultValues}
        >
          <Rail>
            {({ getRailProps }) => (
              <div style={railStyle} {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
        </Slider>
      </div>
    );
  }
}
export default Ranger;

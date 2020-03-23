import React, { Component } from "react";

class Handle extends Component {
  state = {
    showTooltip: false
  };

  render() {
    const {
      domain: [min, max],
      handle: { id, value, percent },
      getHandleProps
    } = this.props;
    const { showTooltip } = this.state;

    return (
      <div>
        {showTooltip ? (
          <div
            className="slid"
            style={{
              left: `${percent}%`,
              position: "absolute",
              marginLeft: "-35px",
              marginTop: "-30px",
              width: "80px"
            }}
          >
            <div className="tooltip">
              <span className="tooltiptext">Value: {value}</span>
            </div>
          </div>
        ) : null}
        <div
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          style={{
            left: `${percent}%`,
            position: "absolute",
            marginLeft: "-11px",
            marginTop: "-9px",
            zIndex: 2,
            width: 14.97,
            height: 20,
            cursor: "pointer",
            borderRadius: "30%",
            boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.4)",
            backgroundColor: "darkgray"
          }}
          {...getHandleProps(id, {
            onMouseLeave: () => {
              this.setState({
                showTooltip: false
              });
            },
            onMouseOver: () => {
              this.setState({
                showTooltip: true
              });
            }
          })}
        />
      </div>
    );
  }
}

export default Handle;

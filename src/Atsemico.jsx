import React from "react";
import "./atsemi.scss";

// import "./time.scss";

const Title = () => (
  <div className="title">
    <div className="t1">
      <h1>Schedule a Call</h1>
      <h3>Programs</h3>
    </div>
    <MainButton />
  </div>
);

class MainButton extends React.Component {
  state = {
    text: "",
    options: false,
    name: "",
    email: "",
    mobile: "",
    designation: "",
    period: "",
    submit: ""
  };
  click = show => {
    this.setState({ text: show, options: true });
  };
  click2 = () => this.setState({ text: "", options: false });
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  click3 = show => this.setState({ period: show });
  click4 = display => this.setState({ submit: display });
  render() {
    const {
      text,
      options,
      name,
      email,
      number,
      designation,
      period,
      submit
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="atsemicolon">
          <div className="option">
            {options ? (
              <div className="main-btn">
                <button type="button" onClick={this.click2}>
                  {text}
                </button>
              </div>
            ) : (
              <div className="sh-btn">
                <button className="button" onClick={() => this.click("Design")}>
                  Design
                </button>
                <button
                  className="button"
                  onClick={() => this.click(" Mobile Dev")}
                >
                  Mobile Dev
                </button>
                <button
                  className="button"
                  onClick={() => this.click("Front-End")}
                >
                  Front-End
                </button>
                <button className="button" onClick={() => this.click(" Iot")}>
                  Iot
                </button>
                <button
                  className="button"
                  onClick={() => this.click(" Back-End")}
                >
                  Back-End
                </button>
                <button
                  className="button"
                  onClick={() => this.click(" FullStackDev")}
                >
                  FullStackDev
                </button>
                <button
                  className="button"
                  onClick={() => this.click("   Machine Learning")}
                >
                  Machine Learning
                </button>
                <button
                  className="button"
                  onClick={() => this.click("  Data Science")}
                >
                  Data Science
                </button>
              </div>
            )}
          </div>
          <div className="contact">
            <input
              name="name"
              type="text"
              value={name}
              onChange={this.handleChange}
              placeholder="name"
            />
            <input
              name="email"
              type="text"
              value={email}
              onChange={this.handleChange}
              placeholder="email"
            />
            <input
              name="tel"
              type="text"
              value={number}
              onChange={this.handleChange}
              placeholder="mobile number"
            />
            <input
              name="designation"
              type="text"
              value={designation}
              onChange={this.handleChange}
              placeholder="educations"
            />
          </div>
          <div className="day">
            {console.log(this.state)}
            <button
              type="button"
              onClick={() => this.click3("parttime")}
              style={{
                background: period === "parttime" ? "white" : "#2D80B9",
                color: period === "parttime" ? "#2D80B9" : "white"
              }}
            >
              part-time
            </button>
            <button
              type="button"
              onClick={() => this.click3("fulltime")}
              style={{
                background: period === "fulltime" ? "white" : "#2D80B9",
                color: period === "fulltime" ? "#2D80B9" : "white"
              }}
            >
              full-time
            </button>
            <button
              type="button"
              onClick={() => this.click3("online")}
              style={{
                background: period === "online" ? "white" : "#2D80B9",
                color: period === "online" ? "#2D80B9" : "white"
              }}
            >
              online
            </button>
          </div>
        </div>
        <div className="sub">
          <button
            type="button"
            onClick={() => this.click4("schedule")}
            style={{
              background: submit === "schedule" ? "white" : "#2D80B9",
              color: submit === "schedule" ? "#2D80B9" : "white"
            }}
          >
            schedule
          </button>
        </div>
      </form>
    );
  }
}

const Form = () => (
  <div className="form">
    <Title />
  </div>
);

export default Form;

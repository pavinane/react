import React from "react";
import "./contactform.scss";
class ContactForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    designation: "",
    remember: false,
    domain: "",
    number: "",
    email: ""
  };
  // handleFirstNameChange = event =>
  //   this.setState({ firstname: event.target.value });

  // handleLastNameChange = event =>
  //   this.setState({ lastname: event.target.value });

  // handleDesignationChange = event =>
  //   this.setState({ designation: event.target.value });

  // handleChange = event => {
  //   const isCheckbox = event.target.type === "checkbox";
  //   this.setState({
  //     [event.target.name]: isCheckbox
  //       ? event.target.checked
  //       : event.target.value
  //   });
  // };

  // handleDomainSelect = event => this.setState({ domain: event.target.value });

  // handleNumberChange = event => this.setState({ number: event.target.value });

  // handleEmailChange = event => this.setState({ email: event.target.value });

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

  render() {
    const {
      firstname,
      lastname,
      designation,
      remember,
      domain,
      number,
      email
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-form">
          <input
            name="firstname"
            type="text"
            value={firstname}
            onChange={this.handleChange}
            placeholder="first name"
          />
          <input
            name="lastname"
            type="text"
            value={lastname}
            onChange={this.handleChange}
            placeholder="last name"
          />
        </div>
        <textarea
          name="designation"
          type="text"
          value={designation}
          onChange={this.handleChange}
        />

        <>
          <select name="domain" value={domain} onChange={this.handleChange}>
            <option>Development</option>
            <option>Design</option>
            <option>Cloud</option>
            <option>Layout</option>
          </select>
        </>
        <input
          name="number"
          type="text"
          value={number}
          onChange={this.handleChange}
          placeholder="enter your number"
        />
        <input
          name="email"
          type="text"
          value={email}
          onChange={this.handleChange}
          placeholder="enter  your email"
        />
        <input
          name="remember"
          type="checkbox"
          checked={remember}
          onChange={this.handleChange}
        />
        <button onClick={this.handleForSubmit}>submit</button>
      </form>
    );
  }
}

export default ContactForm;

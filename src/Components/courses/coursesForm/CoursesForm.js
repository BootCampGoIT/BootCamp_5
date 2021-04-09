import React, { Component } from "react";

const levelOptions = ["basic", "middle", "advanced"];

const initialState = {
  name: "",
  duration: 0,
  level: "middle",
};

class CoursesForm extends Component {
  state = { ...initialState };

  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc);
    if (localStorage.getItem("data")) {
      this.setState({...JSON.parse(localStorage.getItem("data"))})
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc);
    localStorage.setItem("data", JSON.stringify(this.state));
  }

  handleEsc = (e) => {
    if (e.code === "Escape") console.log("Esc");
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addCourse(this.state);
    this.setState({ ...initialState });
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, duration, level } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label className='formLabel'>
          Name:
          <input
            type='text'
            className='formInput'
            name='name'
            value={name}
            onChange={this.onHandleChange}
          />
        </label>

        <label className='formLabel'>
          Duration:
          <input
            type='number'
            className='formInput'
            name='duration'
            value={duration}
            onChange={this.onHandleChange}
          />
        </label>

        <select
          className='formSelect'
          name='level'
          value={level}
          onChange={this.onHandleChange}>
          {levelOptions.map((option) => (
            <option value={option} key={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>

        <button type='submit' className='formButton'>
          Add course
        </button>
      </form>
    );
  }
}

export default CoursesForm;

const data = [{ title: "dfghj" }, { title: "dfghjkl" }];

const newData = [...data];

newData.push({ title: "By" });

newData[0].title = "Hello";

console.log(data);

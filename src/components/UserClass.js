import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };

    console.log(this.props.name  + "User class component");
  }

  async componentDidMount() {
    console.log(this.props.name + "Component did mount user class");
    const data = await fetch("https://api.github.com/users/abhira2412");
    const json = await data.json();
    console.log(json);
  }

  render() {
    console.log(this.props.name  + "User class Render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        {/* <h1>Count2 : {count2}</h1> */}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
            // console.log(this.state.count);
          }}
        >
          Counter
        </button>
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : abhirad_124</h4>
      </div>
    );
  }
}

export default UserClass;

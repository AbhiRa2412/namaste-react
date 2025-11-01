import React from "react";
import User from "./User";
import UserClass from "./UserClass";

import UserContext from "../utils/UserContext";

// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <h2>This is Namaste react </h2>
//       <hr />
//       {/* <User name={"Abhinav Dubey (Function)"} location = {"Pune"}/>
//       <hr /> */}
//       <UserClass name={"Abhinav Dubey (Class)"} location={"Pune"}/>
//     </div>
//   );
// };

//converting function component to class component for lifecycle understanding

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About constructor");
  }

  async componentDidMount() {
    console.log("Component did mount of About component");
  }

  render() {
    console.log("Render About component");
    return (
      <div className="px-2 m-4">
        <h1>About us</h1>
        <h2>This is Namaste react </h2>
        <div>
          Loggedin User :
          <UserContext.Consumer>
            {/* for showing data can't use 2 children */}
            {/* {(data) => console.log(data)} */}
            {({ loggedInUser }) => <h1 className="text-lg">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <hr />
        <UserClass name={"Abhinav Dubey (Class)"} location={"Pune"} />
        <UserClass name={"Radha (Class)"} location={"Mumbai"} />
      </div>
    );
  }
}

export default About;

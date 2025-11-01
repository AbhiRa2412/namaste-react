//React.creteElement => ReactElement-JS Object => HTMLElement(render)
const heading = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "Child1" }, [
    React.createElement("h1", { id: "red" }, "Hello h1 from React"),
    React.createElement("h2", {}, "Hello h2 from React"),
  ]),
  React.createElement("div", { id: "Child2" }, [
    React.createElement("h1", {}, "Hello h1 from React"),
    React.createElement("h2", {}, "Hello h2 from React"),
  ]),
]);

const elem = <span>React Element</span>;

//Transpiled before it reacehes to JS - Parcel - Babel

//JSX  =>. React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1>This is JSX heading</h1>;

//react element
const headingJSXReactElement = (
  <h1 className="red" tabIndex="5">
    {elem} Namaste from JSX
  </h1>
);

//converted headingJSXReactElement to functional component
// const Title = () => (
//   <h1 className="red" tabIndex="5" id="hello">
//     Namaste from JSX
//   </h1>
// );

//This is component composition
const Heading = () => (
  <div id="container">
    {headingJSXReactElement}
    <Title />
    <h1 className="red">This is a Functional Component</h1>
  </div>
);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//for react element
// root.render(heading)
// root.render(headingJSXReactElement);
// root.render(<Heading />);

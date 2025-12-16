// const element = React.createElement("h1", null, "Hello, world!");

// const element2 = React.createElement(
//   "div",
//   null,
//   React.createElement("h1", null, "Hello, world!"),
//   React.createElement("h2", null, "Hi, world!")
// );

// JSX: JavaScript XML: look like HTML
// JSX is not HTML, it is a syntax extension for JavaScript
// JSX is transpiled to React.createElement using Babel
// JSX is not a string, it is a JavaScript object
// JSX is not a HTML, it is a JavaScript object
// React.createElement() -> React Element(JS Object) -> HTML Element
// Babel -> React -> ReactDOM -> HTML
// const element = <h1 id="title">Hello, world!</h1>;

// const element2 = (
//   <div>
//     <h1 id="title">Hello, world!</h1>
//     <h2 id="title">Hi, world!</h2>
//   </div>
// );

const element3 = (
  <div>
    <h1 id="title">Hello Coder Army!</h1>
    <h2 id="title">Kese hain?</h2>
  </div>
);

//React Component
//Component is a function or a class that returns a React element
//Component is a reusable piece of code
//Component is a black box
//Component is a function that returns a React element

// function App(name) {
//   return (
//     <div>
//       <h1 id="title">Hello {name}!</h1>
//       <h2 id="title">Kese hain?</h2>
//     </div>
//   );
// }

// const a = App("Karan");

const courses = ["HTML", "CSS", "JS", "REACT", "NODE", "MONGODB"];

// const element4 = (
//   <div>
//     <h1
//       style={{
//         textAlign: "center",
//       }}
//       id="title"
//     >
//       Courses
//     </h1>
//     <ul>
//       {courses.map((course) => (
//         <li>{course}</li>
//       ))}
//     </ul>
//   </div>
// );

function Header() {
  return (
    <h1
      style={{
        textAlign: "center",
      }}
      id="title"
    >
      Courses
    </h1>
  );
}

function Main() {
  return (
    <ul>
      {courses.map((course) => (
        <li>{course}</li>
      ))}
    </ul>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; 2025</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

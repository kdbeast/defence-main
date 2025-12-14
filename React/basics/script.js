function createElement(tag, attributes, children) {
  const element = document.createElement(tag);
  element.textContent = children;

  for (const key in attributes) {
    if (key === "style") {
      Object.assign(element.style, attributes.style);
    } else {
      element.setAttribute(key, attributes[key]);
    }
  }
  return element;
}

const reactDOM = {
  render: function (element, container) {
    container.appendChild(element);
  },
};

// create a h1 element using js

const element1 = createElement(
  "h1",
  {
    id: "first",
    className: "element",
    style: {
      color: "white",
      fontSize: "20px",
      padding: "10px",
      borderRadius: "10px",
      backgroundColor: "orange",
    },
  },
  "Hello World 1"
);

const element2 = createElement(
  "h1",
  {
    id: "second",
    className: "element",
    style: {
      color: "white",
      fontSize: "20px",
      padding: "10px",
      borderRadius: "10px",
      backgroundColor: "blue",
    },
  },
  "Hello World 2"
);

const root = document.getElementById("root");
root.append(element1, element2);

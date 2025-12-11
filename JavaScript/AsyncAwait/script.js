// async await

// async function greet() {
//   return "Hemlo Friends";
// }

// const res = greet();
// console.log(res);

// res.then((data) => console.log(data));

// const res = await fetch("https://api.github.com/users");
// const data = await res.json();
// console.log(data);

async function gitHub() {
  try {
    const res = await fetch("https://api.github.com/users");
    if (!res.ok) {
      throw new Error("Data is not present");
    }
    const data = await res.json();

    const parent = document.getElementById("first");

    for (let user of data) {
      const element = document.createElement("div");
      element.classList.add("user");

      const image = document.createElement("img");
      image.src = user.avatar_url;

      const username = document.createElement("h2");
      username.textContent = user.login;

      const anchor = document.createElement("a");
      anchor.href = user.html_url;
      anchor.textContent = "Visit Profile";

      element.append(image, username, anchor);
      parent.append(element);
    }
  } catch (error) {
    console.log(error);
  }
}

gitHub();

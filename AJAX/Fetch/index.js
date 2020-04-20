async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const root = document.querySelector("#root");
  const ul = document.createElement("ul");

  posts.forEach(item => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.appendChild(document.createTextNode(item.title));
    anchor.setAttribute(
      "href",
      `https://jsonplaceholder.typicode.com/posts/${item.id}`
    );

    li.appendChild(anchor);
    ul.appendChild(li);
  });
  root.appendChild(ul);
}

getData();

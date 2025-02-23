import preact, { render } from "preact";

function App() {
  return <p class="big">Hello World!</p>;
}

const d = document.getElementById("app");
if (d) render(<App />, d);

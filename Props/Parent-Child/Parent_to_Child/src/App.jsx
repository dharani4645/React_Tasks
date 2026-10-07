import { useState } from "react";

function Parent() {
  const [name, setName] = useState("Dharani");

  return <Child name={name}/>;
}

function Child({name}) {
  return <h1>hello, {name}</h1>;
}

function App() {
  return <Parent/>;
}

export default App;
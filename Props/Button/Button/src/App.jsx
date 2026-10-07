function Button({children,onClick}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default App;
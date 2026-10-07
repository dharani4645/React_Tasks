function Parent({children}) {
  return(
    <div>
      {children}
    </div>
  );
}

function Child() {
  return (
    <Parent>
      <h2>hello</h2>
    </Parent>
  );
}

export default Child;
function UserCard({name="Guest"}) {
  return(
    <div>
      <h2>{name}</h2>
      
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCard
        name="dharani"
      />
      <UserCard />
    </div>
  );
}
export default App;
function UserCard({name,age,role}){
  return (
    <div>
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
      <p>Role:{role}</p>
    </div>
  );
}

function App(){
  return (
    <UserCard
    name="dharani"
    age={21}
    role="developer"
    />
  );
}

export default App;
function ProductCard({name,price,inStock}){
  return (
    <div>
      <h2>{name}</h2>
      <p>Price:{price}</p>
      <p>{inStock ? "Available" : "Out Of Stock"}</p>
    </div>
  );
}

function App() {
  return (
    <ProductCard
    name="phone"
    price={30000}
    inStock={false}
    />
  );
}


export default App;
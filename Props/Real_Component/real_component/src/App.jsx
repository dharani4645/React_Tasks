function ProductCard({name,price,image,category,children,onBuy}){
  return(
    <div>
      <h1>{name}</h1>
      <p>price:{price}</p>
      <img src={image} alt={name}/>
      <p>Category:{category}</p>
      {children}
      <button onClick={() => onBuy(name)}>Buy Now</button>
    </div>
  );
}

function App() {
  function handleBuy(productName) {
    alert('${productName} added to cart!');
  }
  return (
    <div>
      <ProductCard
      name="Laptop"
      price={60000}
      image="https://png.pngtree.com/png-vector/20250304/ourmid/pngtree-sleek-modern-laptop-with-high-resolution-display-png-image_15711292.png"
      category="Electronics"
      onBuy={handleBuy}
      >
        <p>Powerful laptop for work and study.</p>
      </ProductCard>
    </div>
  );
}

export default App;
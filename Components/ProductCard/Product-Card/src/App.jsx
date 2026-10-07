import ProductCard from "./ProductCard";

function App() {
  return (
    <div>
      <h1>Products</h1>

      <ProductCard
        name="Laptop"
        price={55000}
        category="Electronics"
      />

      <ProductCard
        name="Smartphone"
        price={25000}
        category="Electronics"
      />

      <ProductCard
        name="Headphones"
        price={2000}
        category="Accessories"
      />

      <ProductCard
        name="Backpack"
        price={1500}
        category="Bags"
      />

      <ProductCard
        name="Smart Watch"
        price={5000}
        category="Wearables"
      />
    </div>
  );
}

export default App;
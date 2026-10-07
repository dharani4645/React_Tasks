import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="content">
        <Sidebar />
        <Dashboard />
      </div>

      <Footer />
    </div>
  );
}

export default App;
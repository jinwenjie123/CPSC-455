import Navbar from "./Navbar";
import './App.css';
import Home from "./pages/Home"
import Grab from "./pages/Grab"
import Recipes from "./pages/Recipes"

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/grab":
      component = <Home />
      break
    case "/recipes":
      component = <Recipes />
      break
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">{component}</div>
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import RouterComponent from "./routes";

function App() {
  return (     
        <BrowserRouter>
          <Header />
          <RouterComponent />
        </BrowserRouter>
  );
}

export default App;

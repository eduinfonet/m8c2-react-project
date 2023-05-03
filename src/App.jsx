import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header></Header>
        <Button>Sort By Date</Button>
        {/* <Button>See More</Button> */}
        <Card></Card>
      </div>
    </>
  );
}

export default App;

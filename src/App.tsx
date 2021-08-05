import { useState } from "react";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import ElementContextProvider from "./contexts/ElementContext";

function App() {
  const [sidebarOpenned, setSidebarOpenned] = useState<boolean>(false)

  return (
    <ElementContextProvider>
      <div className="App">
        <h1 className="title">
          Page editor
        </h1>
        <Container sidebarOpenned={sidebarOpenned} setSidebarOpenned={setSidebarOpenned} />
        <Sidebar sidebarOpenned={sidebarOpenned} setSidebarOpenned={setSidebarOpenned} />
      </div>
    </ElementContextProvider>
  );
}

export default App;

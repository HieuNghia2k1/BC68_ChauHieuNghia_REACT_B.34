import Body from "./components/Body";
import Detail from "./components/Detail";

import Header from "./components/Header";
import Props from "./components/Props";
import Shoe from "./components/Shoe";

function App() {
  let hoTen = "Hieu Nghia";
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1 className="bg-danger">Home work Shoe Shop</h1>
      <Header />
      <Body />
      <Detail />

      <Props />
      {/* <Shoe /> */}
    </>
  );
}

export default App;

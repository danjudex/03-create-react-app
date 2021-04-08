import { useState } from "react";
import "./App.css";

function App() {
  const [columnCount, setColumnCount] = useState(4);
  const [rowCount, setRowCount] = useState(4);

  console.log("render");
  const columnCountChangeHandler = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setColumnCount(value);
    }
  };

  const rowCountChangeHandler = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setRowCount(value);
    }
  };

  return (
    <div className="App">
      <div className="panel">
        <div className="field">
          <input
            type="number"
            placeholder="columnCount"
            onChange={columnCountChangeHandler}
          />
        </div>
        <div className="field">
          <input
            type="number"
            placeholder="rowCount"
            onChange={rowCountChangeHandler}
          />
        </div>
      </div>

      <div className="content">
        <div className="board">
          {Array(rowCount)
            .fill()
            .map((_, index) => (
              <div key={index} className="row">
                {Array(columnCount)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="cell" />
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

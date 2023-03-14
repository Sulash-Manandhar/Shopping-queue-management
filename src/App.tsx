import { useEffect, useState } from "react";
import "./App.css";
import { MdOutlineMonitor } from "react-icons/md";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  const [counter, setCounter] = useState<number[][]>([
    [],
    [2, 1, 1],
    [5, 1, 3, 2],
    [1, 2],
    [2, 1],
  ]);

  function decreaseItem() {
    const newCounter: number[][] = [...counter];

    newCounter.forEach((item) => {
      if (item.length === 0) {
        return;
      }
      if (item[0] < 1) {
        return item.shift();
      }
      return (item[0] = item[0] - 1);
    });
    setCounter(newCounter);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      decreaseItem();
      console.count("rendering");
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  function addQueue(numberOfItem: number): void {
    const lowestArray = counter.reduce((acc, i) => {
      const totalCurrentValue = i.reduce((totalSum, j) => {
        return j + totalSum;
      }, i[0]);

      const totalSmallestValue = acc.reduce((totalSum, j) => {
        return j + totalSum;
      }, acc[0]);

      if (totalCurrentValue < totalSmallestValue) {
        return i;
      }
      return acc;
    }, counter[0]);

    let newCounter: number[][] = [...counter];

    newCounter.forEach((item) => {
      if (JSON.stringify(item) === JSON.stringify(lowestArray)) {
        return item.push(numberOfItem);
      }
    });
    setCounter(newCounter);
  }

  return (
    <main>
      <div>
        <h1>Shopping Queue Management</h1>
      </div>
      <div className="App">
        <CheckoutForm addQueue={addQueue} />
        <div className="counter-container">
          {counter.map((item, index) => (
            <div key={index}>
              <MdOutlineMonitor className="counter-icon" />
              <div className="hr"></div>
              {item.map((item, index) => (
                <div key={index} className="queue">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;

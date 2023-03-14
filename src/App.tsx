import { useEffect, useState } from "react";
import "./App.css";
import { MdOutlineMonitor } from "react-icons/md";
import CheckoutForm from "./components/CheckoutForm";
import { decreaseInitialItemValue, getTotalSum } from "./utils/functions";

function App() {
  const [counter, setCounter] = useState<number[][]>([
    [],
    [2, 1, 1],
    [5, 1, 3, 2],
    [1, 2],
    [2, 1],
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(decreaseInitialItemValue(counter));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  function addQueue(numberOfItem: number): void {
    const lowestArray = counter.reduce((lowestValue, currentValue) => {
      if (getTotalSum(currentValue) < getTotalSum(lowestValue)) {
        return currentValue;
      }
      return lowestValue;
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
      <div className="heading">
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

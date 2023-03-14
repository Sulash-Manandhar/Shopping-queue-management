import React, { useState } from "react";

interface Props {
  addQueue: (item: number) => void;
}

const CheckoutForm: React.FC<Props> = (props) => {
  const { addQueue } = props;
  const [numberOfItem, setNumberOfItem] = useState<number>(1);

  const handleSubmit = () => {
    addQueue(numberOfItem);
    setNumberOfItem(1);
  };

  return (
    <div className="form">
      <div className="input-wrapper">
        <label htmlFor="cart-item">Number of item:</label>
        <input
          type="number"
          id="cart-item"
          value={numberOfItem}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNumberOfItem(e.currentTarget.valueAsNumber)
          }
          required
        />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;

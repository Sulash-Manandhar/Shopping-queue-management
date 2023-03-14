import React, { useState } from "react";

interface Props {
  addQueue: (item: number) => void;
}

const CheckoutForm: React.FC<Props> = (props) => {
  const { addQueue } = props;
  const [numberOfItem, setNumberOfItem] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addQueue(numberOfItem);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
        <button type="submit">Checkout</button>
      </div>
    </form>
  );
};

export default CheckoutForm;

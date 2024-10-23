"use client";

import { useCallback, useEffect, useState } from "react";

export default function NumbersCallbackComponent() {
  const [number, setNumber] = useState(0);
  const [numbers, setNumbers] = useState<number[]>([]);
  console.log("Component re-render");

  function handleIncrement() {
    setNumber((prev) => prev + 1);
  }
  function handleDecrement() {
    setNumber((prev) => prev - 1);
  }

  const multiples = useCallback(() => {
    return [number + 3, number + 6, number + 9];
  }, [number]);

  useEffect(() => {
    setNumbers(multiples());
  }, [multiples]);

  return (
    <>
      <p>{number}</p>
      <p>{numbers.join(", ")}</p>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
}

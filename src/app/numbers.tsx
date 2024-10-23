"use client";

import { useEffect, useRef, useState } from "react";

export default function NumbersComponent() {
  const [number, setNumber] = useState(0);
  const [numbers, setNumbers] = useState<number[]>([]);
  console.log("Component re-render");

  function handleIncrement() {
    setNumber((prev) => prev + 1);
  }
  function handleDecrement() {
    setNumber((prev) => prev - 1);
  }

  function multiples(): number[] {
    return [number + 3, number + 6, number + 9];
  }

  useEffect(() => {
    setNumbers(multiples());
  }, [number]);

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

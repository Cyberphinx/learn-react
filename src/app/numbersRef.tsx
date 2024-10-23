"use client";

import { useEffect, useRef, useState } from "react";

export default function NumbersRefComponent() {
  const [number, setNumber] = useState(0);
  const numbersRef = useRef<number[]>([]);
  console.log("Component re-render");

  function handleClick() {
    setNumber((prev) => prev + 1);
  }
  function handleDecrement() {
    setNumber((prev) => prev - 1);
  }

  function multiples(): number[] {
    return [number + 3, number + 6, number + 9];
  }

  useEffect(() => {
    numbersRef.current = multiples();
  }, [number]);

  return (
    <>
      <p>{number}</p>
      <p>{numbersRef.current.join(", ")}</p>
      <button onClick={handleClick}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
}

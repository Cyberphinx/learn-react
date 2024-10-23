"use client";

import { useEffect, useRef, useState } from "react";

export default function NumbersRefComponent() {
  const [number, setNumber] = useState(0);
  const [suffix, setSuffix] = useState("Suffix");
  const numbersRef = useRef<number[]>([]);
  console.log("Component re-render");

  function handleClick() {
    setNumber((prev) => prev + 1);
  }
  function handleDecrement() {
    setNumber((prev) => prev - 1);
  }
  function handleSuffix() {
    setSuffix((prev) => prev + "!");
  }

  function multiples(): number[] {
    return [number + 3, number + 6, number + 9];
  }

  useEffect(() => {
    numbersRef.current = multiples();
    // console.log("Change number");
  }, [number]);

  return (
    <>
      <p>{number} - {suffix}</p>
      <p>{numbersRef.current.join(", ")}</p>
      <button onClick={handleClick}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
      <button onClick={handleSuffix}>Change Suffix</button>
    </>
  );
}

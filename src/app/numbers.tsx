"use client";

import { useEffect, useState } from "react";

export default function NumbersComponent() {
  const [number, setNumber] = useState(0);
  const [suffix, setSuffix] = useState("Suffix");
  const [numbers, setNumbers] = useState<number[]>([]);
  console.log("Component re-render");

  function handleIncrement() {
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
    setNumbers(multiples());
    // console.log("Change number");
  }, [number]);

  return (
    <>
      <p>{number} - {suffix}</p>
      <p>{numbers.join(", ")}</p>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
      <button onClick={handleSuffix}>Change Suffix</button>
    </>
  );
}

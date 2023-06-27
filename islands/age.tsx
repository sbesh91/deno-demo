import { Signal } from "@preact/signals";
import Counter from "./Counter.tsx";

interface AgeProps {
  age: Signal<number>;
}
export default function Age({age}: AgeProps) {
  

  return (
    <>
      - Age ({age})
      <Counter count={age} />
    </>
  );
}

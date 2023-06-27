import { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter({count}: CounterProps) {
  return (
    <div class="flex gap-2 w-full border-2 border-red-500 rounded p-2">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button onClick={() => count.value -= 1}>-1</Button>
      <Button onClick={() => count.value += 1}>+1</Button>
    </div>
  );
}

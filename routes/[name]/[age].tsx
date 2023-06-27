import { PageProps } from "$fresh/server.ts";
import Age from "../../islands/age.tsx";
import { useSignal } from "@preact/signals";

export default function Greet({params}: PageProps) {
  const count = useSignal(Number(params.age));

  return (
    <div>
      Hello ({params.name})
      <Age age={count} />
    </div>
  );
}

import { Counter } from "./components/counter";
import { Greet } from "./components/greet";

export default function Home() {
  console.log('Hello');
  return (
    <div>
      <h2>Welcome to my Next Js website!</h2>
      <Greet />
      <Counter />
    </div>
  );
}

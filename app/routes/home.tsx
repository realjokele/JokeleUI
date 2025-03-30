import { Button } from "#/components/ui/button";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button onPress={() => alert("Hello!")}>Click me</Button>
    </div>
  );
}

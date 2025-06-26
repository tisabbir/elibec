import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { Anchor } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button variant="destructive"> <Anchor /> Click me </Button>
    </div>
  );
}

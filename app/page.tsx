import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Navbar from "@/components/ui/navbar";
import Layout from "@/components/ui/layouts";
import Container from "@/components/ui/container";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Layout />
      <Container />
    </div>
  );
}

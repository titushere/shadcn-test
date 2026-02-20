import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import Layout from "@/components/ui/layouts";
import Container from "@/components/ui/container";

export default function HomePage(){
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Layout />
            <Container />
        </div>
    );
}

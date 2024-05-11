"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Main from "@/components/main";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <div className="">
    <Navbar />   
    <Main />
    </div>
    <Footer />
    </>  );
}

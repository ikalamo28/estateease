import Image from "next/image"
import Header from "../components/header"
import Main from "../components/main"

export default function Home() {
  return (
    <div className=" bg-amber-100 min-h-screen min-w-full"> 
      <Header />
      <Main />

    </div>
  );
}

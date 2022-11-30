import Link from "next/link"
import Register from "../components/Login and SignUp/SignUp"
import Footer from '../components/Footer/Footer';


export default function SignUp_Page() {
  return (
    <>
    <div className="bg-black">
    <div className="flex items-center justify-center h-screen mb-12 custom-img2">
      <div className="top-0 left-0 right-0 bottom-0 z-[2] z-2" />
      <div className="absolute p-5 z-[2]  mt-[-10rem]">
        <Register />
      </div>
    </div><Footer />
    </div>
    </>
  )
}

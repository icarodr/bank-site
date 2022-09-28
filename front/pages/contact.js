import Link from "next/link"
import NavBar from '../components/NavBar/NavBar';
import MobileNavbar from '../components/NavBar/MobileMenu';

export default function Contact() {
  return (
    <>
    <NavBar />
    <MobileNavbar />
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-cover custom-img">
          <div className="top-0 left-0 right-0 bottom-0 z-[2] custom-img z-2"/>
          <div className="absolute p-5 z-[2]  mt-[-10rem]">
          </div>
      </div>
    </>
  )
}
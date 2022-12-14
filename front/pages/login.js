import Login from "../components/Login and SignUp/Login"
import Footer from '../components/Footer/Footer';


export default function Login_Page() {
  return (
    <>
    <div className="bg-black">
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-cover custom-img2">
      <div className="top-0 left-0 right-0 bottom-0 z-[2] custom-img z-2" />
      <div className="absolute p-5 z-[2]  mt-[-10rem]">
        <Login />
      </div>
    </div><Footer />
    </div>
    </>
  )
}

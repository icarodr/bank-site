import Link from "next/link";

const Register = () => {
 return(
    <div className="bg-black bg-opacity-20 rounded-2xl border border-r-0 border-b-0 border-gray-200/25 drop-shadow-2xl backdrop-filter backdrop-blur-sm">
      <form className="m-16 flex flex-col items-center">
        <div className="text-white text-2xl tracking-wider mb-8">SignUp</div>
        <input type="username" placeholder="Username:" className="w-64 text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide mb-10"/>
        <input type="email" placeholder="Email:" className="w-64 text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide mb-10"/>
        <input type="password" placeholder="Password:" className="w-64 text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide mb-10"/>
        <input type="password" placeholder="Repeat Password:" className="w-64 text-white bg-transparent focus:outline-none border border-r-0 border-t-0 border-l-0 tracking-wide mb-16"/>
        <div className="mb-8">
          <button className="text-white cursor-pointer px-8 py-2 bg-transparent hover:bg-white/20 border mr-6">Login</button>
          <button className="text-white cursor-pointer px-8 py-2 bg-transparent hover:bg-white/20 border">SignUp</button>
        </div>
      </form>
    </div>  
  )
}

export default Register;
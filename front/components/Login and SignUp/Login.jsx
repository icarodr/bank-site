const Login = () => {
    return(
      <>
      <div className="bg-none flex flex-col rounded-sm">
        <h1 className="text-white">Login</h1>
        <input type="text" className="mb-10 bg-transparent border rounded-sm" />
        <h1 className="text-white">Senha</h1>
        <input type="password" className="mb-10 bg-transparent border rounded-sm" />

        <div className="text-white">
        <button className="px-8 py-2 border hover:bg-gray-600/30 mr-6">Login</button>
        <button className="px-8 py-2 border hover:bg-gray-600/30">SignUp</button>
      </div>

      </div>
      </>
  )
}

export default Login;
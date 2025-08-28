import { Link } from "react-router"


const LoginMed = () => {
  return (
    <div className="">
          <h2 className="">Log ind med</h2>
          <div className="flex justify-between mt-2">
            <button
              // onClick={() => handleLogin(googleProvider)}
              className="w-26 bg-googleColor hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xs"
            >
              Google
            </button>
            <button
              // onClick={() => handleLogin(facebookProvider)}
              className="w-26 bg-facebookColor hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xs"
            >
              Facebook
            </button>
            <button
              // onClick={() => handleLogin(twitterProvider)}
              className="w-26 bg-inputbg hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-xs"
            >
              X
            </button>
          </div>
          <p className="mt-4 text-center">Har du ikke en konto? <Link to="/register" className="text-blue-500">Opret bruger.</Link></p>
        </div>
  )
}

export default LoginMed
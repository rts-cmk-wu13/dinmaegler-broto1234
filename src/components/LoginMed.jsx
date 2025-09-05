import { Link } from "react-router"


const LoginMed = () => {
  return (
    <div className="">
          <h2 className="">Log ind med</h2>
          <div className="flex gap-1 sm:gap-4 justify-between mt-2">
            <button
              // onClick={() => handleLogin(googleProvider)}
              className="w-18 sm:w-26 text-xs px-2 bg-googleColor hover:bg-red-600 text-white font-semibold py-2 sm:px-4 rounded-xs"
            >
              Google
            </button>
            <button
              // onClick={() => handleLogin(facebookProvider)}
              className="w-18 sm:w-26 text-xs px-2 bg-facebookColor hover:bg-blue-700 text-white font-semibold py-2 sm:px-4 rounded-xs"
            >
              Facebook
            </button>
            <button
              // onClick={() => handleLogin(twitterProvider)}
              className="w-18 sm:w-26 text-xs px-2 bg-inputbg hover:bg-gray-800 text-white font-semibold py-2 sm:px-4 rounded-xs"
            >
              X
            </button>
          </div>
          <p className="mt-4 text-xs sm:text-base text-center">Har du ikke en konto? <Link to="/register" className="text-blue-500">Opret bruger.</Link></p>
        </div>
  )
}

export default LoginMed
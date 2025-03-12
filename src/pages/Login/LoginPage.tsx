import styles from "./Login.module.css"; // Importa el archivo CSS Module

const LoginPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col lg:flex-row justify-center items-center min-h-screen">
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 h-64 lg:h-screen relative overflow-hidden">
        <img
          src="/logo.png"
          alt="Placeholder Image"
          className={` h-full lg:block px-40  hidden ${styles["animate-fade-in-left"]}`}
        />
        {/* Fallback for mobile */}
        <div
          className={`lg:hidden bg-blue-500 text-white text-center py-8 px-4 ${styles["animate-fade-in"]}`}
        >
          <h2 className="text-2xl font-bold">Welcome Back!</h2>
          <p className="mt-2">Please log in to continue.</p>
        </div>
      </div>

      {/* Right: Login Form */}
      <div
        className={`lg:p-36 md:p-16 p-8 w-full lg:w-1/2 ${styles["animate-fade-in-right"]}`}
      >
        <h1
          className={`text-2xl font-semibold mb-6 text-center lg:text-left ${styles["animate-slide-down"]}`}
        >
          Login
        </h1>
        <form action="#" method="POST" className="space-y-4">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 transition-all duration-300"
              autoComplete="off"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 transition-all duration-300"
              autoComplete="off"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500 transition-all duration-300"
            />
            <label htmlFor="remember" className="text-gray-600 ml-2">
              Remember Me
            </label>
          </div>

          {/* Forgot Password Link */}
          <div className="text-blue-500 text-sm">
            <a href="#" className="hover:underline transition-all duration-300">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mt-4 transform hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
        </form>

        {/* Sign up Link */}
        <div className="mt-6 text-blue-500 text-center text-sm">
          <span>Don't have an account? </span>
          <a href="#" className="hover:underline transition-all duration-300">
            Sign up Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

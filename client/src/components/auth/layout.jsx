import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="bg-cyan min-h-screen w-full flex justify-center items-center md:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="grid md:grid-cols-2 justify-center items-center rounded-lg bg-gray-300 shadow-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        <div className="px-4 py-12 sm:px-6 lg:px-8 ">
          <h1 className="text-5xl font-extrabold text-center text-white tracking-tight"> Welcome</h1>
        </div>
        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;

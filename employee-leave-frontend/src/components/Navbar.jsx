function Navbar() {
  return (
    <nav className="h-16 bg-white shadow-md flex items-center justify-between px-8">

      
      <div>
        <h1 className="text-2xl font-bold text-blue-600">
          Leave Management
        </h1>
      </div>

      
      <div className="flex items-center gap-4">

        
        <button className="relative text-2xl">
          🔔
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        
        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-gray-800">
              John Doe
            </h3>

            <p className="text-sm text-gray-500">
              Employee
            </p>
          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
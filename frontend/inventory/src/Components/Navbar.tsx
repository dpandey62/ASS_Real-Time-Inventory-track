import { Loader2 } from "lucide-react";

const Navbar = ({ onRefresh, loading }: any) => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">🚀</span>
        <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
          Tracker Pro
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Refresh Button */}
        <button
          onClick={onRefresh}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-all duration-200"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin w-4 h-4" />
              Refreshing...
            </>
          ) : (
            <>🔄 Refresh</>
          )}
        </button>

        {/* User Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold cursor-pointer">
          D
        </div>

      </div>
    </div>
  );
};

export default Navbar;
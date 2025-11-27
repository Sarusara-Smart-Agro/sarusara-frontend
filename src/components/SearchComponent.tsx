const SearchComponent = () => {
  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <input
        type="text"
        placeholder="Search items..."
        className="w-64 px-4 py-2 rounded-l-lg border border-green-700 bg-white/10 text-green-900
                   placeholder:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-600
                   focus:border-green-600 transition-all duration-300 shadow-inner"
      />
      <button
        className="px-4 py-2 bg-green-700 text-white font-semibold rounded-r-lg
                   hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;

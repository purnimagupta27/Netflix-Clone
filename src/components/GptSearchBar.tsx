const GptSearchBar = () => {
  return (
    <div className="pt-[35%] md:pt-[8%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black/80 grid grid-cols-12 rounded-lg"
      >
        <input
          className="p-4 m-4 col-span-9 bg-zinc-800 text-white rounded-lg outline-none placeholder:text-gray-400 text-base"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg text-base cursor-pointer transition duration-200">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
import { useRef } from "react";
import { groq } from "../utils/openai";
import { options } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const searchText = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch()

  const searchResults = async(movie: string) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, options)
    const json = await data.json()
    console.log(json.results)
    return json.results
  }

  const handleGptSearchClick = async () => {
    console.log(searchText.current?.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current?.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{role: "user", content: gptQuery}],
    //   model: "gpt-3.5-turbo"
    // })
    // console.log(gptResults)

    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    console.log(chatCompletion.choices[0]?.message?.content || "");

    async function getGroqChatCompletion() {
      return groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: gptQuery,
          },
        ],
        model: "openai/gpt-oss-20b",
      });
    }

    const gptMessages = chatCompletion.choices[0]?.message.content?.split(", ")
    //console.log(gptMessages)

    const gptMovieArray = gptMessages?.map((movie) => searchResults(movie))

    const resolvedMovieArray = await Promise.all(gptMovieArray ?? [])
    //const filteredMovies = resolvedMovieArray.filter((movie) => )
    console.log(resolvedMovieArray)
    dispatch(addGptMovies({movieNames: gptMessages, movieResults: resolvedMovieArray}))
  };

  return (
    <div className="pt-[35%] md:pt-[8%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-white/20 hover:bg-white/15 grid grid-cols-12 rounded-lg"
      >
        <input
          className="p-4 m-4 col-span-9 bg-zinc-600 text-white font-semibold outline-none placeholder:text-gray-400 text-base rounded-lg"
          type="text"
          ref={searchText}
          placeholder="What would you like to watch today?"
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg text-base cursor-pointer transition duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

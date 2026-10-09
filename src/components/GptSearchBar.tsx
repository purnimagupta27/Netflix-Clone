import { useRef } from "react";
import { groq } from "../utils/openai";

const GptSearchBar = () => {
  const searchText = useRef<HTMLInputElement>(null);

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
  };

  return (
    <div className="pt-[35%] md:pt-[8%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black/80 grid grid-cols-12"
      >
        <input
          className="p-4 m-4 col-span-9 bg-zinc-800 text-white outline-none placeholder:text-gray-400 text-base"
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

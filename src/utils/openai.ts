// import OpenAi from 'openai'
// import { OPENAI_KEY } from './constants';

// const openai = new OpenAi({
//     apiKey: OPENAI_KEY,
//     dangerouslyAllowBrowser: true
// });

// export default openai

import Groq from "groq-sdk";

export const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY, dangerouslyAllowBrowser: true });
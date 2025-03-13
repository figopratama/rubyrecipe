import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they
could make with some or all of those ingredients. You don't need to use every ingredients they 
mention in your recipe. The recipe can include additional recipe they didn't mention, but try
not to include too many extra ingredients. Format your response in markdown to make it easier to
render on a web page.
`
const hf = new HfInference(HF_TOKEN)



export async function getRecipeFromLlama(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "meta-llama/Llama-3.2-3B-Instruct",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}


// const HF_ACCESS_TOKEN = import.meta.env.VITE_HF_ACCESS_TOKEN;
// console.log("Hugging Face Token:", HF_ACCESS_TOKEN);

// export async function getRecipeFromMistral(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(', ')
//     try {
//         const response = await fetch("https://api-inference.huggingface.co/v1/chat/completions", {
//             method: "POST",
//             headers: {
//                 "Authorization": `Bearer ${HF_ACCESS_TOKEN.trim()}`,
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 model: "mistralai/Mistral-7B-Instruct-v0.1",
//                 messages: [
//                     { role: "system", content: SYSTEM_PROMPT },
//                     { role: "user", content: `I have ${ingredientsString}, please give me a recipe you'd recommend I make!` },
//                 ],
//                 max_tokens: 1024,
//             })
//         });
//         const data = await response.json();
//         console.log("API Response:", data);

//         if (!data.choices) {
//             throw new Error("Unexpected API response structure");
//         }

//         return data.choices[0].message.content;
//     } catch (err) {
//         console.error("API Request Error:", err)
//     }
// }
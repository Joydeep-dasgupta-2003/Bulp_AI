
  import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyBLNiNdiYtZp05UggyVL9I9zaY_KwYBEnA"; // Replace with your actual API key or use environment variables for better security.
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const responseText = await result.response.text(); // Ensure `text` is awaited properly
    console.log(responseText);
    return responseText;
  }
  
  export default run;
  
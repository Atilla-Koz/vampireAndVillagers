import axios from 'axios';

// Doğrudan API anahtarınızı kullanarak, çevresel değişkenlerle ilgili sorunları ekarte edelim
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY; // OpenAI API anahtarınızı buraya doğrudan yazın

const apiClient = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const sendMessageToChatGPT = async (message) => {
  try {
    const response = await apiClient.post('/chat/completions', {
      model: 'gpt-4', // Model adı olarak 'gpt-4' kullanılıyor
      messages: [{ role: 'user', content: message }],
      max_tokens: 150,
      temperature: 0.7,
    });
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error(
      'Error sending message to ChatGPT:',
      error.response ? error.response.data : error.message
    );
    return 'Sorry, something went wrong. Please try again later.';
  }
};

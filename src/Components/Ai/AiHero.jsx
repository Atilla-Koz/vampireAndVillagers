import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.svg'; // Dosya yolunu kontrol edin
import { sendMessageToChatGPT } from '../../api/openai';

export default function AiHero() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = async () => {
    if (inputValue.trim() === '') return;

    // Add user message
    setMessages([...messages, { text: inputValue, type: 'user' }]);

    // Clear input field
    setInputValue('');

    // Get bot response
    const botResponse = await sendMessageToChatGPT(inputValue);
    setMessages([
      ...messages,
      { text: inputValue, type: 'user' },
      { text: botResponse, type: 'bot' },
    ]);
  };

  return (
    <section className="min-h-screen bg-cover bg-center bg-custom-bg font-sans flex flex-col items-center justify-center p-4">
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col h-full max-h-[calc(100vh-200px)] overflow-y-auto">
        <div className="flex flex-row justify-between mb-4">
          <Link to="/">
            <img className="w-4" src={arrow} alt="Back" />
          </Link>
          <h1 className="text-2xl font-bold">AiHero</h1>
        </div>

        <div className="flex-1 overflow-y-auto mb-4">
          <div className="flex flex-col space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.type === 'user' ? 'justify-end' : 'justify-start'
                } space-x-2`}
              >
                {msg.type === 'user' && (
                  <div className="bg-blue-500 text-white p-2 rounded-lg">
                    {msg.text}
                  </div>
                )}
                {msg.type === 'bot' && (
                  <div className="bg-gray-300 p-2 rounded-lg">{msg.text}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-lg flex-1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

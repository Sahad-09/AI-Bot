import "./App.css";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImageLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openai";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    // Input validation
    if (!input.trim()) {
      setError("Please enter a message");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await sendMsgToOpenAI(input);
      console.log(res);
      setInput(""); // Clear input after successful send
    } catch (err) {
      setError(err.message || "Failed to send message");
      console.error("Error sending message:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="txt">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
              maiores error quae cumque. Tempora illo ut eligendi, non tenetur?
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImageLogo} alt="" />
            <p className="txt">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam facilis fugit, quo et impedit dicta placeat, amet iure
              praesentium ratione fuga nesciunt, itaque ut adipisci molestias
              expedita consequatur. Numquam voluptatibus quaerat beatae dolores
              deleniti eligendi blanditiis ducimus exercitationem iure? Pariatur
              facilis, quia quidem cupiditate voluptatum eos nulla quos dicta
              suscipit corrupti sit fugit hic voluptas distinctio sapiente
              explicabo natus dolorem! Earum rerum laborum dolores, animi dolor
              fugiat delectus voluptates dolorum odit libero, amet beatae
              asperiores quam dolorem deserunt. Ipsa voluptate, maiores dolorem,
              culpa quis quod numquam aspernatur magnam velit, dolorum ipsum
              maxime accusamus voluptatem sed? Tempora necessitatibus ea dicta
              et?
            </p>
          </div>
        </div>
        <div className="chatFooter">
          {error && <div className="error-message">{error}</div>}
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (error) setError(""); // Clear error when user starts typing
              }}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button 
              className="send" 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
            >
              <img src={sendBtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

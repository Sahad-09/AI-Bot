import "./App.css";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImageLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openai";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
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
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

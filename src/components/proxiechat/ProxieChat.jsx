import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getProxieResponse, getWelcomeMessage } from './ProxieMessage';
import emojione from "emojione";
import "./ProxieGlobalStyles.css";

const ProxieChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([getWelcomeMessage()]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      showMobileWarning();
    } else {
      setIsChatOpen(!isChatOpen);
    }
  };

  const showMobileWarning = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Atención",
      text: "ProxieChat no está disponible para dispositivos móviles. Por favor, usa una PC. 🚫💻",
      icon: "info",
      confirmButtonText: "Entendido",
    });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    const newUserMessage = { type: "user", content: inputValue };
    const newProxieMessage = getProxieResponse(inputValue);

    setMessages([...messages, newUserMessage, newProxieMessage]);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const renderMessage = (message, index) => (
    <div key={index} className={`proxie-message ${message.type}`}>
      {message.type === "proxie" && (
        <img
          src="https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78="
          alt="Proxie Avatar"
          className="proxie-avatar"
        />
      )}
      <div className="message-content">
        {message.content.split("\n").map((line, i) => {
          const isQuestion = /^\d+\./.test(line);
          return (
            <p key={i} className={isQuestion ? "question" : ""}>
              {isQuestion && <span className="blue-line"></span>}
              <span
                dangerouslySetInnerHTML={{
                  __html: emojione.toImage(line),
                }}
              />
            </p>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="proxie-chat-container">
      <button className="proxie-chat-button" onClick={toggleChat}></button>

      {isChatOpen && (
        <div className="proxie-chat-window">
          <div className="proxie-chat-header">
            <h3>Chat con Proxie</h3>
            <div className="proxie-chat-header-icons">
              <FontAwesomeIcon icon={faQuestionCircle} className="help-icon" />
              <button className="close-button" onClick={() => setIsChatOpen(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
          <div className="proxie-chat-messages">
            {messages.map(renderMessage)}
            <div ref={messagesEndRef} />
          </div>
          <div className="proxie-chat-input">
            <input
              type="text"
              placeholder="Escribe tu mensaje"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSendMessage} disabled={inputValue.trim() === ""}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProxieChat;
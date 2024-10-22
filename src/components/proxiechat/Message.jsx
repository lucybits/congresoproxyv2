import emojione from 'emojione';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return (
    <div className={`proxie-message ${message.type}`}>
      {message.type === 'proxie' && (
        <img
          src="https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78="
          alt="Proxie Avatar"
          className="proxie-avatar"
        />
      )}
      <div className="message-content">
        {message.content.split('\n').map((line, i) => {
          const isQuestion = /^\d+\./.test(line);
          return (
            <p key={i} className={isQuestion ? 'question' : ''}>
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
};

Message.propTypes = {
  message: PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;

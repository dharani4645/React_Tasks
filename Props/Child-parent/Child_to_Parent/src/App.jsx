import { useState } from "react";

function Parent() {
  const [message, setMessage] = useState("No message yet");

  function handleMessage(newMessage) {
    setMessage(newMessage);
  }

  return (
    <div>
      <h1>{message}</h1>
      <Child onSendMessage={handleMessage} />
    </div>
  );
}

function Child({ onSendMessage }) {
  return (
    <button onClick={() => onSendMessage("Hello from Child!")}>
      Send Message
    </button>
  );
}

function App() {
  return <Parent />;
}

export default App;
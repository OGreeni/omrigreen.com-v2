import { useState } from 'react';

interface Props {
  messages: string[];
}

export default function Greeting({ messages }: Props) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeeting] = useState(randomMessage());

  return (
    <div>
      <h2>{greeting}! Thank you for visiting!</h2>
      <button onClick={() => setGreeeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}

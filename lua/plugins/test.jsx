import { useState } from "react";

export default function Test({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <main>
      <div>
        <p>Testing</p>
        <button onClick={handleCloseMenu}>{isOpen ? "Close" : "Open"}</button>
      </div>
    </main>
  );
}

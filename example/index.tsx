import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useDropdown } from "../src";
import { useRef } from "react";

const App = () => {
  const buttonRef = useRef(null);
  const { dropdownRef, isOpen, open, close } = useDropdown({ additionalRefs: [buttonRef] });

  const handleClick = isOpen ? close : open;

  return (
    <div>
      <button onClick={handleClick} ref={buttonRef}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && (
        <ul ref={dropdownRef}>
          <li>dropdown item 1</li>
          <li>dropdown item 2</li>
          <li>dropdown item 3</li>
        </ul>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import { useEffect, useRef, useState } from "react";
import "./App.css";

import Help from "./help";
import Home from "./Components/home";
import About from "./Components/about";
import Skills from "./Components/skills";
import Contact from "./Components/contact";
import Projects from "./Components/projects";

function App() {
  const [input, setInput] = useState("");
  const [showOutput, setShoeOutput] = useState(false);

  const [getData, setData] = useState({
    output: [
      { type: "text", value: ` ` },
      { type: "text", value: "Welcome to My Terminal Portfolio." },
      { type: "text", value: "Type 'help' to see available commands." },
    ],
    history: [],
    length: -1,
  });

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const userCommand = (cmd) => {
    if (cmd.trim() === "") return;

    setData((prev) => {
      // switch (cmd) {
      //   case "help":
      //     setComponents((prev) => [...prev, <Help />]);
      //     break;
      //   case "home":
      //     setComponents((prev) => [...prev, <Home />]);
      //     break;
      //   case "about":
      //     setComponents((prev) => [...prev, <About />]);
      //     break;
      //   case "skills":
      //     setComponents((prev) => [...prev, <Skills />]);
      //     break;
      //   case "projects":
      //     setComponents((prev) => [...prev, <Projects />]);
      //     break;
      //   case "contact":
      //     setComponents((prev) => [...prev, <Contact />]);
      //     break;
      //   case "clear":
      //     setComponents([]);
      //     setLines([]);
      //     break;
      //   default:
      //     errorLine.push(
      //       `Unknown command: ${cmd}  \n.Type 'help' for a list of commands.`
      //     );
      // }
      const newOutput = [
        ...prev.output,
        { type: "text", value: `terminal@prasd-portfolio:~$ ${cmd}` },
      ];
      const newHistory = [...prev.history, cmd];
      const newLength = newHistory.length;

      switch (cmd) {
        case "help":
          newOutput.push({ type: "component", value: <Help /> });
          break;
        case "home":
          newOutput.push({ type: "component", value: <Home /> });
          break;
        case "about":
          newOutput.push({ type: "component", value: <About /> });
          break;
        case "skills":
          newOutput.push({ type: "component", value: <Skills /> });
          break;
        case "projects":
          newOutput.push({ type: "component", value: <Projects /> });
          break;
        case "contact":
          newOutput.push({ type: "component", value: <Contact /> });
          break;
        case "exit":
          // window.location.href = "about:blank";
          window.close();
          break;
        case "clear":
          return {
            output: [],
            history: [],
            length: -1,
          };
        default:
          newOutput.push({
            type: "text",
            value: `Unknown command: ${cmd}\nType 'help' for a list of commands.`,
          });
          break;
      }

      return {
        ...prev,
        output: newOutput,
        history: newHistory,
        length: newLength,
      };
    });
  };

  const keyDown = (e) => {
    if (e.key === "Enter") {
      userCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      if (getData.history.length === 0 || getData.length <= 0) return;
      const newLength = getData.length - 1;
      setData((prev) => ({
        ...prev,
        length: newLength,
      }));
      setInput(getData.history[newLength]);
    } else if (e.key === "ArrowDown") {
      if (getData.length + 1 >= getData.history.length) return;
      const newLength = getData.length + 1;
      setData((prev) => ({
        ...prev,
        length: newLength,
      }));
      setInput(getData.history[newLength]);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setShoeOutput(true);
    }, 2200);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="container" onClick={focusInput}>
      <div className="output">
        <p>terminal@user:~$</p>
        <p>terminal@user:~$ install prasad-portfolio </p>

        {showOutput && (
          <>
            <p>&gt;terminal-portfolio@0.0.0 dev</p>
            <p>portfolio [Version 0.3.0]</p>

            {getData.output.map((item, idx) =>
              item.type === "text" ? (
                <p key={idx}>{item.value}</p>
              ) : (
                <div key={idx}>{item.value}</div>
              )
            )}
          </>
        )}

        <div className="input-line">
          <span className="prompt">terminal@prasd-portfolio:~$&nbsp;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={keyDown}
            autoFocus
            ref={inputRef}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

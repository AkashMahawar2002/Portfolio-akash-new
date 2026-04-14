"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal } from "react-icons/fa6";

type CommandHistory = {
  id: number;
  command: string;
  output: React.ReactNode;
};

const fileSystem = {
  "skills.txt": "Java, C++, Next.js, React.js, AWS, TailwindCSS, TypeScript",
  "experience.txt": "SDE Intern @ Ziostech Solutions & BlueStock FinTech\nGoogle Cloud & Gen AI Certified",
  "projects.txt": "1. Ziostech Solutions Portfolio\n2. Ekta Janch Kendra\n3. Narayan Energy Platform\n4. IPO Web Application",
  "readme.md": "Terminal commands:\n- `whoami`: display identity\n- `ls`: list known files\n- `cat [file]`: view file contents",
  "resume.pdf": "Error: binary file cannot be read by cat. Please download instead.",
};

export const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const [history, setHistory] = useState<CommandHistory[]>([
    {
      id: 0,
      command: "",
      output: (
        <div>
          Welcome to Akash OS v1.0.0.
          <br />
          Type <span className="text-purple">'help'</span> to see a list of available commands.
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Focus input when terminal is clicked
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  // Scroll to bottom on new output
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen, isMinimized, isMaximized]);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none), (pointer: coarse)").matches);
  }, []);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      const args = cmd.split(" ").filter(Boolean);
      const commandName = args[0];
      
      let output: React.ReactNode = "";

      if (cmd === "") {
        output = "";
      } else if (commandName === "help") {
        output = (
          <div>
            Available commands:
            <ul className="list-inside list-disc pl-4 mt-2 space-y-1">
              <li><span className="text-purple">whoami</span> - Display current user info</li>
              <li><span className="text-purple">ls</span> - List directory contents</li>
              <li><span className="text-purple">cat [file]</span> - Read file contents</li>
              <li><span className="text-purple">clear</span> - Clear the terminal</li>
              <li><span className="text-purple">ping</span> - Check server status</li>
              <li><span className="text-purple">exit</span> - Close the terminal</li>
            </ul>
          </div>
        );
      } else if (commandName === "whoami") {
        output = "akash_mahawar - Software Development Engineer";
      } else if (commandName === "ls") {
        output = (
          <div className="flex gap-4 mt-1">
            {Object.keys(fileSystem).map((file) => (
              <span key={file} className={file.endsWith(".pdf") ? "text-red-400" : "text-blue-400 font-semibold"}>{file}</span>
            ))}
          </div>
        );
      } else if (commandName === "cat") {
        if (args.length < 2) {
          output = "cat: missing file operand";
        } else {
          const fileName = args[1];
          output = fileSystem[fileName as keyof typeof fileSystem] ? (
            <pre className="whitespace-pre-wrap font-sans mt-1 text-green-300">{fileSystem[fileName as keyof typeof fileSystem]}</pre>
          ) : (
            `cat: ${fileName}: No such file or directory`
          );
        }
      } else if (commandName === "clear") {
        setHistory([]);
        setInput("");
        return;
      } else if (commandName === "ping") {
        output = "Pong! AWS & WebGL rendering pipelines are operating at 100%.";
      } else if (commandName === "exit") {
        setIsOpen(false);
        setInput("");
        return;
      } else {
        output = `command not found: ${commandName}`;
      }

      setHistory((prev) => [
        ...prev,
        { id: Date.now(), command: input, output },
      ]);
      setInput("");
    }
  };

  return (
    <>
      <AnimatePresence>
        {(!isOpen || isMinimized) && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => { setIsOpen(true); setIsMinimized(false); }}
            className="fixed bottom-5 left-4 z-[99] flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 shadow-2xl shadow-purple/30 backdrop-blur-md md:bottom-6 md:left-6"
            title="Open Interactive Terminal"
          >
            <FaTerminal className="h-6 w-6 text-purple" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div 
            drag={!isMaximized && !isTouchDevice}
            dragMomentum={false}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed z-[9999] shadow-2xl bg-[#04071D] font-mono text-sm lg:text-base border border-white/[0.2] overflow-hidden flex flex-col ${
              isMaximized 
                ? "inset-0 w-full h-full rounded-none" 
                : "left-2 right-2 top-16 h-[78dvh] rounded-2xl md:left-[15%] md:right-auto md:top-[20%] md:h-[60vh] md:w-[70vw] md:max-h-[600px] lg:left-[25%] lg:w-[50vw]"
            }`}
            onClick={handleTerminalClick}
          >
            {/* Header / Draggable Handle */}
            <div className="bg-[#10132E] w-full h-12 flex items-center px-4 border-b border-white/[0.1] cursor-grab active:cursor-grabbing justify-between">
              <div className="flex gap-2 items-center h-full">
                {/* Close */}
                <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="h-3 w-3 rounded-full border border-red-900 border-opacity-30 bg-red-500 shadow-sm flex items-center justify-center group md:h-4 md:w-4">
                  <span className="opacity-0 group-hover:opacity-100 text-red-900 text-[10px] font-bold leading-none select-none">x</span>
                </button>
                {/* Minimize */}
                <button onClick={(e) => { e.stopPropagation(); setIsMinimized(true); }} className="h-3 w-3 rounded-full border border-yellow-900 border-opacity-30 bg-yellow-500 shadow-sm flex items-center justify-center group md:h-4 md:w-4">
                  <span className="opacity-0 group-hover:opacity-100 text-yellow-900 text-[10px] font-bold leading-none select-none">-</span>
                </button>
                {/* Maximize */}
                <button onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }} className="h-3 w-3 rounded-full border border-green-900 border-opacity-30 bg-green-500 shadow-sm flex items-center justify-center group md:h-4 md:w-4">
                  <span className="opacity-0 group-hover:opacity-100 text-green-900 text-[10px] font-bold leading-none select-none">+</span>
                </button>
              </div>
              
              <div className="flex-1 text-center font-bold text-xs md:text-sm text-slate-400 opacity-60 ml-[-60px] pointer-events-none select-none">
                akash@portfolio: ~ (bash)
              </div>
            </div>

            {/* Body */}
            <div 
              ref={scrollRef}
              className="p-4 md:p-6 flex-1 overflow-y-auto text-slate-300 scroll-smooth pb-10 cursor-text"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#475569 transparent" }}
            >
              {history.map((item) => (
                <div key={item.id} className="mb-4">
                  {item.command !== "" && (
                    <div className="flex gap-2">
                      <span className="text-green-400 whitespace-nowrap">akash@portfolio:~$</span>
                      <span className="text-white break-all">{item.command}</span>
                    </div>
                  )}
                  <div className="mt-1 leading-relaxed">{item.output}</div>
                </div>
              ))}

              <div className="flex gap-2 mt-2">
                <span className="text-green-400 whitespace-nowrap">akash@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="flex-1 bg-transparent border-none outline-none text-white focus:outline-none focus:ring-0 placeholder-gray-600 caret-white"
                  autoFocus
                  spellCheck={false}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaRobot, FaXmark, FaUser, FaPaperPlane } from "react-icons/fa6";

import { web3FormsAccessKey } from "@/config";

type Message = {
  id: number;
  sender: "user" | "ai";
  text: string;
};

const preconfiguredPrompts = [
  {
    label: "IPO Web App?",
    query: "Tell me about Akash's IPO App",
    response: "Akash co-led a team of 10 developers to build a robust IPO web application using RESTful APIs. This led to a 40% improvement in data retrieval speed for the end users at BlueStock FinTech!",
  },
  {
    label: "Tech Stack?",
    query: "What is his tech stack?",
    response: "He is highly skilled in React.js, Next.js, and TailwindCSS for frontend perfection, matched with strong foundational knowledge in Java, C++, and MySQL. He integrates AWS (S3, CloudFront, Lambda) for scalable deployments.",
  },
  {
    label: "AI Experience?",
    query: "Does he have AI experience?",
    response: "Absolutely! Akash has acquired 40 Badges in Google Cloud Computing Foundations and Generative AI, positioning him beautifully to architect modern AI-driven cloud solutions.",
  },
  {
    label: "Ziostech SDE?",
    query: "Tell me about Akash's internship at Ziostech Solutions.",
    response: "During his time as an SDE Intern at Ziostech Solutions, Akash developed advanced web applications using Next.js and Tailwind CSS. He built their official portfolio with reusable components representing 15+ pages, and pushed platform deployments using AWS S3 and CloudFront!",
  },
  {
    label: "Hackathons?",
    query: "What are his hackathon results?",
    response: "He successfully placed in the Top 6 out of 154 teams during the Be SDE Ready 1.0 Hackathon, and took 1st PRIZE at his campus technical fest AADHAR!",
  },
  {
    label: "Send a Note!",
    query: "I'd like to send Akash a note.",
    response: "That's awesome! What would you like your note to say? Type it in the chat box below, and I'll send it directly to Akash's inbox immediately!",
    isTrigger: true,
  }
];

export const AIAssistant = () => {
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hi there! I'm Akash's virtual assistant. Ask me anything about his skills, projects, or experience!",
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isDraftingEmail, setIsDraftingEmail] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  const handlePromptClick = (prompt: typeof preconfiguredPrompts[0]) => {
    setMessages(prev => [...prev, { id: Date.now(), sender: "user", text: prompt.query }]);
    setIsTyping(true);
    
    if (prompt.isTrigger) {
      setIsDraftingEmail(true);
      setTimeout(() => inputRef.current?.focus(), 1300);
    } else {
      setIsDraftingEmail(false);
    }

    // Simulate API intelligence latency
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: "ai", text: prompt.response }]);
    }, 1200);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = inputValue.trim();
    if (!text) return;

    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), sender: "user", text }]);
    setInputValue("");
    setIsTyping(true);

    if (isDraftingEmail) {
      setIsDraftingEmail(false);
      
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsAccessKey,
            subject: "New Note from Portfolio AI Assistant!",
            message: text,
            from_name: "Portfolio AI Agent",
          }),
        });

        const result = await response.json();
        
        setIsTyping(false);
        if (result.success) {
          setMessages(prev => [...prev, { id: Date.now() + 1, sender: "ai", text: "Boom! Your note was sent successfully. Akash will see it in his Gmail shortly!" }]);
        } else {
          setMessages(prev => [...prev, { id: Date.now() + 1, sender: "ai", text: "Oops! Something went wrong while sending the note. Try connecting with him on LinkedIn instead." }]);
        }
      } catch (error) {
        setIsTyping(false);
        setMessages(prev => [...prev, { id: Date.now() + 1, sender: "ai", text: "Oops! A network error occurred. Please check your connection." }]);
      }
    } else {
      // Fallback for non-drafting chat attempts
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { id: Date.now() + 1, sender: "ai", text: "I'm currently running on a predefined dataset without LLM backend generation. Please select one of the queries above, or select 'Send a Note!' to message Akash directly." }]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={reduceMotion ? undefined : { scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-5 right-4 z-[99] flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 shadow-2xl shadow-blue-500/20 backdrop-blur-md md:bottom-6 md:right-6"
            title="Ask Akash AI"
          >
            <FaRobot className="h-6 w-6 text-blue-400" />
            {/* Notification Dot */}
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.3 }}
            className="fixed inset-x-3 bottom-3 top-20 z-[9999] flex max-h-[calc(100dvh-6rem)] flex-col overflow-hidden rounded-2xl border border-white/[0.15] bg-[#04071D]/95 shadow-2xl backdrop-blur-xl md:inset-x-auto md:bottom-6 md:right-6 md:top-auto md:h-[600px] md:w-[380px] md:max-h-[85vh]"
          >
            {/* Header */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/[0.1] bg-[#10132E]/50 px-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                  <FaRobot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Ask Akash AI</h3>
                  <p className="text-xs text-blue-400 flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-green-500 inline-block"></span> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-2"
              >
                <FaXmark size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scroll-smooth"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#1e293b transparent" }}
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full mt-1 ${
                      msg.sender === "ai" ? "bg-blue-500/20 text-blue-400" : "bg-purple/20 text-purple"
                    }`}>
                      {msg.sender === "ai" ? <FaRobot size={14} /> : <FaUser size={14} />}
                    </div>
                    <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-md whitespace-pre-wrap ${
                      msg.sender === "user" 
                        ? "bg-purple/20 text-white rounded-tr-sm border border-purple/30" 
                        : "bg-slate-800/60 text-slate-200 rounded-tl-sm border border-slate-700"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex w-full justify-start">
                  <div className="flex gap-3 max-w-[80%] flex-row">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full mt-1 bg-blue-500/20 text-blue-400">
                      <FaRobot size={14} />
                    </div>
                    <div className="rounded-2xl px-4 py-3 text-sm bg-slate-800/60 text-slate-200 rounded-tl-sm border border-slate-700 flex gap-1 items-center">
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                  </div>
                </div>
              )}

              {!isTyping && !isDraftingEmail && (
                <div className="flex w-full justify-start">
                  <div className="max-w-[90%] rounded-2xl border border-slate-700 bg-slate-800/40 p-3">
                    <p className="mb-2 text-xs text-slate-300">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {preconfiguredPrompts.map((prompt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handlePromptClick(prompt)}
                          disabled={isTyping}
                          className="px-3 py-1.5 text-xs rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {prompt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Message Input Box */}
            <div className="p-3 border-t border-white/[0.1] bg-[#04071D] flex-shrink-0">
              <form onSubmit={handleSendMessage} className="flex gap-2 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={isDraftingEmail ? "Type your note for Akash..." : "Select a prompt above or send a note!"}
                  disabled={isTyping}
                  className="flex-1 bg-[#10132E] border border-white/[0.1] rounded-full px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors disabled:opacity-50 pr-10"
                />
                <button
                  type="submit"
                  disabled={isTyping || !inputValue.trim()}
                  className="absolute right-1 top-1 bottom-1 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-400 transition-colors"
                >
                  <FaPaperPlane size={12} className="ml-[-2px]" />
                </button>
              </form>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

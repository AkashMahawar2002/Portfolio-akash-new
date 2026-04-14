"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import { MagicButton } from "@/components/ui/magic-button";
import { links, web3FormsAccessKey } from "@/config";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusText, setStatusText] = useState("");

  const resetForm = () => {
    setEmail("");
    setMessage("");
    setStatus("idle");
    setStatusText("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setStatusText("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: `New portfolio message for ${links.ownerName}`,
          from_name: "Portfolio Contact Form",
          email,
          message,
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setStatusText("Message sent successfully. I will get back to you soon.");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setStatusText("Unable to send right now. Please try again in a moment.");
      }
    } catch {
      setStatus("error");
      setStatusText("Network error while sending your message. Please retry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="relative mb-[100px] w-full pb-10 md:mb-auto">
      <div className="pointer-events-none absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div id="get-in-touch" className="relative z-10 flex flex-col items-center scroll-mt-28">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help your
          achieve your goals.
        </p>

        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => setIsModalOpen(true)}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 px-4">
          <div className="max-h-[92dvh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/[0.15] bg-[#04071D] p-4 shadow-2xl md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Let&apos;s get in touch</h2>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full p-1 text-slate-400 transition-colors hover:text-white"
                aria-label="Close contact form"
              >
                <IoClose size={24} />
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="viewer-email" className="mb-2 block text-sm font-medium text-white-100">
                  Your Gmail
                </label>
                <input
                  id="viewer-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="youremail@gmail.com"
                  className="w-full rounded-xl border border-white/[0.12] bg-[#10132E] px-4 py-3 text-white outline-none transition-colors focus:border-purple"
                />
              </div>

              <div>
                <label htmlFor="viewer-message" className="mb-2 block text-sm font-medium text-white-100">
                  Message
                </label>
                <textarea
                  id="viewer-message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-white/[0.12] bg-[#10132E] px-4 py-3 text-white outline-none transition-colors focus:border-purple"
                />
              </div>

              {status !== "idle" && (
                <p className={status === "success" ? "text-sm text-green-400" : "text-sm text-red-400"}>
                  {statusText}
                </p>
              )}

              <div className="flex flex-col-reverse items-stretch gap-2 pt-2 sm:flex-row sm:items-center sm:justify-end sm:gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full rounded-xl border border-white/[0.2] px-4 py-2 text-sm text-white transition-colors hover:border-white/[0.4] sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-purple px-4 py-2 text-sm font-semibold text-black transition-opacity disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="relative z-[999] mt-16 flex items-center justify-center">
        <p className="text-center text-sm font-light md:text-base md:font-normal">
          Copyright &copy; 2026 <span className="text-purple">Akash Mahawar</span>
        </p>
      </div>
    </footer>
  );
};

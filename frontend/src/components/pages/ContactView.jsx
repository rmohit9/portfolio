import { useState } from 'react';

export const ContactView = () => {
  const gUsername = "rmohit9";
  const email = "mohitraut009@gmail.com";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendSuccess(false);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("Web3Forms access key is missing from environment variables.");
      alert("Form submission failed: Access Key is missing from the env configuration. Please make sure you have added VITE_WEB3FORMS_ACCESS_KEY to your .env file and saved it.");
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Message",
          message: formData.message,
          from_name: "Portfolio Visitor"
        })
      });

      const result = await response.json();
      if (result.success) {
        setSendSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSendSuccess(false), 4000);
      } else {
        console.error("Web3Forms error response:", result);
        alert(`Failed to send message: ${result.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Submission fetch error:", err);
      alert("An error occurred while dispatching the message. Please check your internet connection.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="text-left space-y-12 animate-slideIn md:max-w-5xl mx-auto py-4 md:py-8 px-4 md:px-0">
      {/* Header Block */}
      <div className="reveal-item">
        <h1 className="text-5xl md:text-6xl font-black text-gray-100 tracking-tight leading-tight">
          Contact
        </h1>
        <span className="text-[#6a9955] font-mono text-sm block mt-3 font-semibold">
          // open to work, collabs & good conversations
        </span>
      </div>

      {/* Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Social Links */}
        <div className="space-y-6 reveal-item delay-150">
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black font-mono text-[#e5c07b]">
            FIND ME ON
          </div>

          <div className="space-y-4">
            {/* Email Card */}
            <a 
              href={`mailto:${email}`}
              className="flex items-center gap-4 bg-[#16171d]/60 border border-[#2e303a] p-4.5 rounded-xl hover:border-[#58a6ff]/40 hover:bg-[#1f242e]/30 transition-all duration-300 group"
            >
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg group-hover:border-[#58a6ff]/30 transition-colors">
                <svg className="w-5 h-5 text-[#58a6ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider font-mono">Email</div>
                <div className="text-sm font-bold text-gray-200 mt-0.5 truncate font-mono">{email}</div>
              </div>
              <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://linkedin.com/in/mohit-raut" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#16171d]/60 border border-[#2e303a] p-4.5 rounded-xl hover:border-[#58a6ff]/40 hover:bg-[#1f242e]/30 transition-all duration-300 group"
            >
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg group-hover:border-[#58a6ff]/30 transition-colors">
                <svg className="w-5 h-5 text-[#58a6ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider font-mono">LinkedIn</div>
                <div className="text-sm font-bold text-gray-200 mt-0.5 truncate font-mono">linkedin.com/in/mohit-raut</div>
              </div>
              <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* GitHub Card */}
            <a 
              href={`https://github.com/${gUsername}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#16171d]/60 border border-[#2e303a] p-4.5 rounded-xl hover:border-[#58a6ff]/40 hover:bg-[#1f242e]/30 transition-all duration-300 group"
            >
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg group-hover:border-[#58a6ff]/30 transition-colors">
                <svg className="w-5 h-5 text-[#58a6ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider font-mono">GitHub</div>
                <div className="text-sm font-bold text-gray-200 mt-0.5 truncate font-mono">github.com/{gUsername}</div>
              </div>
              <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Phone Card */}
            <div className="flex items-center gap-4 bg-[#16171d]/60 border border-[#2e303a] p-4.5 rounded-xl transition-all duration-300">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg">
                <svg className="w-5 h-5 text-[#58a6ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.622c0-1.07.868-1.94 1.94-1.94h3.14c.73 0 1.35.48 1.52 1.192l.83 3.498c.15.65-.13 1.33-.7 1.693L7.04 12.51c1.23 2.512 3.26 4.542 5.772 5.772l1.378-1.85c.37-.57 1.05-.85 1.693-.7l3.498.83c.712.17 1.192.79 1.192 1.52v3.14c0 1.072-.868 1.94-1.94 1.94h-3.14C6.545 22 2 17.455 2 11.86v-3.14z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider font-mono">Phone</div>
                <div className="text-sm font-bold text-gray-200 mt-0.5 truncate font-mono">+91 9561569348</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Code Form */}
        <div className="space-y-6 reveal-item delay-300">
          <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black font-mono text-[#e5c07b]">
            SEND A MESSAGE
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 font-mono">
            {/* Name input */}
            <div>
              <div className="text-[#6a9955] text-xs mb-2">// YOUR_NAME *</div>
              <input 
                type="text" 
                name="name"
                placeholder="string"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#16171d]/60 border border-[#2e303a] focus:border-[#58a6ff]/40 rounded-xl p-3.5 text-sm text-gray-200 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Email input */}
            <div>
              <div className="text-[#6a9955] text-xs mb-2">// YOUR_EMAIL *</div>
              <input 
                type="email" 
                name="email"
                placeholder="string"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#16171d]/60 border border-[#2e303a] focus:border-[#58a6ff]/40 rounded-xl p-3.5 text-sm text-gray-200 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Subject input */}
            <div>
              <div className="text-[#6a9955] text-xs mb-2">// SUBJECT</div>
              <input 
                type="text" 
                name="subject"
                placeholder="string"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#16171d]/60 border border-[#2e303a] focus:border-[#58a6ff]/40 rounded-xl p-3.5 text-sm text-gray-200 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Message input */}
            <div>
              <div className="text-[#6a9955] text-xs mb-2">// MESSAGE *</div>
              <textarea 
                name="message"
                placeholder="string"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#16171d]/60 border border-[#2e303a] focus:border-[#58a6ff]/40 rounded-xl p-3.5 text-sm text-gray-200 focus:outline-none transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit button */}
            <div className="pt-2 flex items-center gap-4">
              <button 
                type="submit"
                disabled={isSending || sendSuccess}
                className="px-6 py-3 bg-[rgba(88,166,255,0.05)] hover:bg-[rgba(88,166,255,0.08)] border border-[#2e303a] hover:border-[#58a6ff]/40 focus:border-[#58a6ff]/60 text-[#58a6ff] rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer disabled:opacity-50"
              >
                {isSending ? "sending_message()..." : sendSuccess ? "message_sent(true)" : "send_message()"}
              </button>
              {sendSuccess && (
                <span className="text-[#98c379] text-xs animate-fadeIn">
                  // Message dispatched successfully!
                </span>
              )}
            </div>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default ContactView;

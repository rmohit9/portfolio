import React from 'react';

export const ContactView = ({ data }) => {
  const gUsername = "rmohit9";
  const location = data?.profile?.location || "Nagpur / Hyderabad";
  const email = "mohit.raut@example.com";

  const contactItems = [
    { medium: "Github URL", path: `github.com/${gUsername}`, url: `https://github.com/${gUsername}`, color: "#58a6ff" },
    { medium: "Location Base", path: location, url: "#", color: "#27c93f" },
    { medium: "Primary Contact", path: email, url: `mailto:${email}`, color: "#c084fc" },
    { medium: "LinkedIn Profile", path: "linkedin.com/in/mohit-raut", url: "#", color: "#ffbd2e" }
  ];

  return (
    <div className="text-left space-y-6 animate-fadeIn md:max-w-3xl">
      <div>
        <span className="text-[#6a9955] font-mono">/* contact.css - Style variables for communication channels */</span>
        <h2 className="text-2xl font-semibold text-gray-200 mt-1 border-none pb-0">Get In Touch</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
        {contactItems.map((item, idx) => (
          <div key={idx} className="bg-[#16171d] border border-[#2e303a] p-5 rounded-xl hover:border-gray-500 transition-colors">
            <div className="font-bold uppercase tracking-wider text-[10px] text-gray-500" style={{ color: item.color }}>{item.medium}</div>
            <a href={item.url} target="_blank" rel="noreferrer" className="text-sm text-[#f3f4f6] font-bold block mt-2 hover:underline">
              {item.path}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ContactView;

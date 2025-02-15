import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";
import { useState } from "react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  const [page, setPage] = useState(0);
  const themesPerPage = 6;
  const paginatedThemes = THEMES.slice(page * themesPerPage, (page + 1) * themesPerPage);

  return (
    <div className="h-screen flex flex-col md:flex-row container mx-auto px-6 py-10">
      {/* Sidebar for Theme Selection */}
      <aside className="md:w-1/3 p-6 bg-base-200 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Appearance</h2>
        <p className="text-sm text-base-content/70 mb-6">Choose a theme for your chat interface.</p>
        
        <div className="grid grid-cols-3 gap-3">
          {paginatedThemes.map((t) => (
            <button
              key={t}
              className={`
                group flex flex-col items-center p-3 rounded-lg transition-all shadow-md
                ${theme === t ? "bg-primary text-primary-content" : "bg-base-100 hover:bg-base-300"}
              `}
              onClick={() => setTheme(t)}
            >
              <div className="h-8 w-full rounded-md" style={{ backgroundColor: t }}></div>
              <span className="text-xs font-medium mt-2">{t.charAt(0).toUpperCase() + t.slice(1)}</span>
            </button>
          ))}
        </div>
        
        <div className="flex justify-between mt-4">
          <button 
            className="btn btn-secondary text-xs" 
            disabled={page === 0} 
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <button 
            className="btn btn-secondary text-xs" 
            disabled={(page + 1) * themesPerPage >= THEMES.length} 
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-6 p-6">
        {/* Preview Section */}
        <h3 className="text-xl font-semibold">Chat Preview</h3>
        <div className="rounded-xl border border-base-300 bg-base-100 shadow-lg p-6">
          {/* Chat Header */}
          <div className="flex items-center gap-4 pb-4 border-b border-base-300">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold">J</div>
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-xs text-base-content/70">Online</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="py-4 space-y-4 min-h-[250px] max-h-[250px] overflow-y-auto">
            {PREVIEW_MESSAGES.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`
                    max-w-[75%] p-3 rounded-xl text-sm shadow-sm
                    ${message.isSent ? "bg-primary text-primary-content" : "bg-base-300"}
                  `}
                >
                  <p>{message.content}</p>
                  <span className="block text-xs mt-1 opacity-70">12:00 PM</span>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex gap-3 border-t pt-3">
            <input
              type="text"
              className="input input-bordered flex-1 text-sm h-10"
              placeholder="Type a message..."
              value="This is a preview"
              readOnly
            />
            <button className="btn btn-primary h-10 min-h-0">
              <Send size={18} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
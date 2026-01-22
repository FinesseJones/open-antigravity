import { useState } from 'react';
import { Terminal, Code, Settings, Play, Folder, Search, Command, X, Mic, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('editor');
  const [output, setOutput] = useState(['TACF IDE v1.0.0 initialized...', 'Waiting for command...']);

  return (
    <div className="flex h-screen w-screen bg-tacf-dark text-white overflow-hidden font-sans">
      {/* Sidebar - Ombre Purple */}
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        className="w-16 flex flex-col items-center py-4 bg-gradient-to-b from-tacf-purple-dark to-tacf-purple-light border-r border-white/10 z-10 shadow-lg"
      >
        <div className="mb-8 p-2 rounded-xl bg-tacf-gold/20 text-tacf-gold shadow-[0_0_15px_rgba(255,215,0,0.3)]">
          <Code size={28} />
        </div>

        <div className="flex flex-col gap-6 w-full items-center">
          {['files', 'search', 'debug', 'extensions'].map((item, i) => (
            <button
              key={item}
              className={`p-3 rounded-lg transition-all duration-300 hover:bg-white/10 ${i === 0 ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'}`}
            >
              {item === 'files' && <Folder size={20} />}
              {item === 'search' && <Search size={20} />}
              {item === 'debug' && <Play size={20} className="rotate-90" />}
              {item === 'extensions' && <Settings size={20} />}
            </button>
          ))}
        </div>

        <div className="mt-auto mb-4">
          <button className="p-3 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all">
            <Settings size={20} />
          </button>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative bg-tacf-dark">
        {/* Top Bar */}
        <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-tacf-panel/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-tacf-blue-DEFAULT via-tacf-purple-light to-tacf-gold text-lg tracking-wide">TACF IDE</span>
            <span className="text-xs text-zinc-500 ml-2 border border-zinc-700 px-2 py-0.5 rounded-full">BETA</span>
          </div>

          <div className="flex-1 max-w-xl mx-4">
            <div className="flex items-center bg-black/40 border border-white/5 rounded-md px-3 py-1.5 text-sm text-zinc-400">
              <Search size={14} className="mr-2" />
              <span>Search or jump to...</span>
              <span className="ml-auto text-xs bg-white/10 px-1.5 rounded">⌘K</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-tacf-purple hover:bg-tacf-purple-light text-white text-xs font-medium rounded transition-colors shadow-[0_0_10px_rgba(106,13,173,0.4)]">
              <Play size={12} fill="white" /> Run Project
            </button>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* File Tree (Placeholder) */}
          <div className="w-60 bg-tacf-panel border-r border-white/5 hidden md:flex flex-col">
            <div className="p-3 text-xs font-bold text-zinc-400 tracking-wider uppercase">Explorer</div>
            <div className="flex-1 overflow-y-auto px-2">
              {['mitmserver', 'src', 'public', 'package.json', 'Dockerfile', 'README.md'].map((file) => (
                <div key={file} className="flex items-center gap-2 px-2 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded cursor-pointer transition-colors">
                  {file.includes('.') ? <Code size={14} className="text-tacf-blue-DEFAULT" /> : <Folder size={14} className="text-tacf-gold" />}
                  {file}
                </div>
              ))}
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 flex flex-col bg-[#0d0d0d]">
            {/* Tabs */}
            <div className="flex items-center bg-[#111] border-b border-white/5 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#0d0d0d] border-t-2 border-tacf-gold text-sm text-white min-w-[120px]">
                <span className="text-tacf-blue-DEFAULT">JS</span> server.js
                <X size={14} className="ml-auto hover:text-red-400 cursor-pointer" />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-500 hover:bg-[#1a1a1a] cursor-pointer min-w-[120px] transition-colors">
                <span className="text-tacf-purple-light">MD</span> README.md
              </div>
              <button className="px-2 text-zinc-500 hover:text-white">
                <Plus size={16} />
              </button>
            </div>

            {/* Code Content */}
            <div className="flex-1 p-0 relative font-mono text-sm overflow-auto">
              <div className="absolute top-0 left-0 bottom-0 w-12 bg-[#111] border-r border-white/5 flex flex-col items-end pr-2 py-4 text-zinc-600 select-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="leading-6">{i + 1}</div>
                ))}
              </div>
              <div className="pl-16 py-4 pr-4 leading-6">
                <div className="text-zinc-400"><span className="text-tacf-purple-light">const</span> <span className="text-tacf-blue-DEFAULT">http</span> = <span className="text-tacf-gold">require</span>(<span className="text-green-400">'http'</span>);</div>
                <div className="text-zinc-400"><span className="text-tacf-purple-light">const</span> <span className="text-tacf-blue-DEFAULT">server</span> = http.<span className="text-tacf-gold">createServer</span>((<span className="text-orange-300">req</span>, <span className="text-orange-300">res</span>) ={'>'} {'{'}</div>
                <div className="text-zinc-400 ml-4"><span className="text-zinc-500">// TACF MITM Server Logic</span></div>
                <div className="text-zinc-400 ml-4">console.<span className="text-tacf-gold">log</span>(<span className="text-green-400">'Request received on '</span> + req.url);</div>
                <div className="text-zinc-400 ml-4">res.<span className="text-tacf-gold">writeHead</span>(<span className="text-purple-400">200</span>, {'{'}<span className="text-green-400">'Content-Type'</span>: <span className="text-green-400">'text/plain'</span>{'}'});</div>
                <div className="text-zinc-400 ml-4">res.<span className="text-tacf-gold">end</span>(<span className="text-green-400">'Hello from TACF IDE Server'</span>);</div>
                <div className="text-zinc-400">{'}'});</div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal / Output Panel */}
        <div className="h-48 bg-[#0a0a0a] border-t border-tacf-purple-dark/30 flex flex-col">
          <div className="flex items-center px-4 py-1 bg-[#111] border-b border-white/5 gap-4">
            <span className="text-xs uppercase font-bold text-tacf-gold border-b border-tacf-gold py-1">Terminal</span>
            <span className="text-xs uppercase font-bold text-zinc-500 hover:text-white cursor-pointer py-1">Output</span>
            <span className="text-xs uppercase font-bold text-zinc-500 hover:text-white cursor-pointer py-1">Debug Console</span>
            <div className="ml-auto flex gap-2">
              <button className="text-zinc-500 hover:text-white"><X size={14} /></button>
            </div>
          </div>
          <div className="flex-1 p-3 font-mono text-sm overflow-y-auto">
            <div className="text-zinc-400 font-bold mb-2">finessejones@tacf-machine:~/projects/open-antigravity$</div>
            {output.map((line, i) => (
              <div key={i} className="text-zinc-300 mb-1 flex items-center gap-2">
                <span className="text-green-500">➜</span> {line}
              </div>
            ))}
          </div>
        </div>

        {/* Status Bar */}
        <div className="h-6 bg-tacf-purple-dark flex items-center px-3 justify-between text-[10px] text-white/80 select-none">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Online</div>
            <div>master*</div>
            <div>0 errors, 0 warnings</div>
          </div>
          <div className="flex items-center gap-4">
            <div>Ln 4, Col 22</div>
            <div>UTF-8</div>
            <div>JavaScript</div>
            <div className="font-bold text-tacf-gold">TACF Agent Active</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

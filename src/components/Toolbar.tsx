import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Square, 
  RotateCcw, 
  Search, 
  Download, 
  Cpu, 
  Terminal,
  FileText,
  Settings,
  GitFork
} from 'lucide-react';

interface ToolbarProps {
  onAnalyze: () => void;
  onDump: () => void;
  onSearch: () => void;
  isRunning: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({ 
  onAnalyze, 
  onDump, 
  onSearch, 
  isRunning 
}) => {
  return (
    <motion.div 
      className="bg-debugger-panel border-b border-debugger-border px-2 sm:px-4 py-2 flex items-center gap-1 sm:gap-2 overflow-x-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-1 flex-shrink-0">
        <motion.button
          onClick={onAnalyze}
          className={`px-2 sm:px-3 py-1.5 rounded text-xs font-mono flex items-center gap-1.5 transition-colors whitespace-nowrap ${
            isRunning 
              ? 'bg-debugger-error text-white hover:bg-red-600' 
              : 'bg-debugger-success text-white hover:bg-green-600'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRunning ? <Square size={12} /> : <Play size={12} />}
          {isRunning ? 'STOP' : 'ANALYZE'}
        </motion.button>
        
        <motion.button
          className="px-2 sm:px-3 py-1.5 rounded text-xs font-mono bg-debugger-border text-debugger-text hover:bg-gray-600 flex items-center gap-1.5 transition-colors whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCcw size={12} />
          RESET
        </motion.button>
      </div>

      <div className="w-px h-6 bg-debugger-border mx-2" />

      <div className="flex items-center gap-1 flex-shrink-0">
        <motion.button
          onClick={onSearch}
          className="px-2 sm:px-3 py-1.5 rounded text-xs font-mono bg-debugger-border text-debugger-text hover:bg-gray-600 flex items-center gap-1.5 transition-colors whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Search size={12} />
          SEARCH
        </motion.button>
        
        <motion.button
          onClick={onDump}
          className="px-2 sm:px-3 py-1.5 rounded text-xs font-mono bg-debugger-accent text-white hover:bg-sky-600 flex items-center gap-1.5 transition-colors whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={12} />
          <span className="hidden sm:inline">DUMP RESUME</span>
          <span className="sm:hidden">DUMP</span>
        </motion.button>
      </div>

      <div className="flex-1" />

      <div className="hidden md:flex items-center gap-2 lg:gap-4 text-xs font-mono text-debugger-muted flex-shrink-0">
        <div className="flex items-center gap-1">
          <Cpu size={12} />
          <span className="hidden lg:inline">CPU: 2.4GHz</span>
          <span className="lg:hidden">2.4GHz</span>
        </div>
        <div className="flex items-center gap-1">
          <Terminal size={12} />
          <span className="hidden lg:inline">MEM: 8.2GB</span>
          <span className="lg:hidden">8.2GB</span>
        </div>
        <div className="flex items-center gap-1">
          <FileText size={12} />
          <span className="hidden lg:inline">PID: 1337</span>
          <span className="lg:hidden">1337</span>
        </div>
      </div>

      <motion.a
        href="https://github.com/nipv20s/template-debugger-style-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 rounded hover:bg-debugger-border text-debugger-muted hover:text-debugger-accent transition-colors flex items-center gap-1"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Fork this template on GitHub"
      >
        <GitFork size={14} />
        <span className="hidden xl:inline text-xs font-mono">FORK</span>
      </motion.a>
    </motion.div>
  );
};
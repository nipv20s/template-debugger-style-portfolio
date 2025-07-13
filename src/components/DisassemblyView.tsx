import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Github, Eye, FileText, Play } from 'lucide-react';

interface DisassemblyViewProps {
  project: Project | null;
  isAnalyzing: boolean;
}

export const DisassemblyView: React.FC<DisassemblyViewProps> = ({ 
  project, 
  isAnalyzing 
}) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);

  useEffect(() => {
    if (isAnalyzing && project) {
      setIsExecuting(true);
      const interval = setInterval(() => {
        setCurrentLine(prev => (prev + 1) % 8);
      }, 800);

      const timeout = setTimeout(() => {
        setIsExecuting(false);
        clearInterval(interval);
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isAnalyzing, project]);

  if (!project) {
    return (
      <div className="bg-debugger-panel flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-mono text-debugger-muted mb-4">◉</div>
          <div className="text-sm font-mono text-debugger-muted">
            Select a memory region to analyze
          </div>
        </div>
      </div>
    );
  }

  const generateDisassembly = (project: Project) => {
    return [
      { addr: '0x0000', instr: 'mov', operands: 'eax, "' + project.name + '"', comment: '// Load project name' },
      { addr: '0x0004', instr: 'push', operands: 'ebp', comment: '// Setup stack frame' },
      { addr: '0x0008', instr: 'mov', operands: 'ebp, esp', comment: '// Base pointer' },
      { addr: '0x000C', instr: 'call', operands: 'init_techstack', comment: '// Initialize technology stack' },
      { addr: '0x0010', instr: 'cmp', operands: 'status, "production"', comment: '// Check deployment status' },
      { addr: '0x0014', instr: 'je', operands: 'deploy_success', comment: '// Jump if deployed' },
      { addr: '0x0018', instr: 'call', operands: 'optimize_performance', comment: '// Performance optimization' },
      { addr: '0x001C', instr: 'ret', operands: '', comment: '// Return to caller' }
    ];
  };

  const disassembly = generateDisassembly(project);

  return (
    <div className="bg-debugger-panel flex-1 flex flex-col">
      <div className="px-4 py-3 border-b border-debugger-border flex items-center justify-between">
        <div>
          <h2 className="text-sm font-mono font-semibold text-debugger-text">
            DISASSEMBLY - {project.name}
          </h2>
          <p className="text-xs font-mono text-debugger-muted mt-1">
            Base: {project.address} | Size: {project.size} | {project.permissions}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {project.links.github && (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-debugger-border text-debugger-muted hover:text-debugger-text transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={16} />
            </motion.a>
          )}
          {project.links.demo && (
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-debugger-border text-debugger-muted hover:text-debugger-text transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye size={16} />
            </motion.a>
          )}
          {project.links.case && (
            <motion.a
              href={project.links.case}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:bg-debugger-border text-debugger-muted hover:text-debugger-text transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FileText size={16} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Disassembly Code */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1 font-mono text-sm">
            {disassembly.map((line, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-4 p-2 rounded transition-all ${
                  isExecuting && currentLine === index
                    ? 'bg-debugger-accent/20 border-l-2 border-debugger-accent'
                    : ''
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-debugger-accent w-16">{line.addr}</span>
                <span className="text-debugger-exec w-12">{line.instr}</span>
                <span className="text-debugger-text flex-1">{line.operands}</span>
                <span className="text-debugger-muted text-xs">{line.comment}</span>
                {isExecuting && currentLine === index && (
                  <Play size={12} className="text-debugger-accent animate-pulse" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Details - Hidden on mobile, shown on larger screens */}
        <div className="hidden lg:block w-80 border-l border-debugger-border p-4 bg-debugger-bg/50 min-w-0">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-mono font-semibold text-debugger-text mb-3">
                PROJECT SUMMARY
              </h3>
              <p className="text-sm text-debugger-muted leading-relaxed break-words">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-mono font-semibold text-debugger-text mb-3">
                TECH STACK
              </h3>
              <div className="flex flex-wrap gap-2 min-w-0">
                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 bg-debugger-panel border border-debugger-border rounded text-xs font-mono text-debugger-text whitespace-nowrap"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono font-semibold text-debugger-text mb-3">
                ACHIEVEMENTS
              </h3>
              <div className="space-y-2">
                {project.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                  >
                    <span className="text-debugger-success mt-1">•</span>
                    <span className="text-sm text-debugger-muted break-words">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Project Details - Shown below disassembly on mobile */}
      <div className="lg:hidden border-t border-debugger-border p-4 bg-debugger-bg/50">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-mono font-semibold text-debugger-text mb-2">
              PROJECT SUMMARY
            </h3>
            <p className="text-sm text-debugger-muted leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-mono font-semibold text-debugger-text mb-2">
              TECH STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-debugger-panel border border-debugger-border rounded text-xs font-mono text-debugger-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-mono font-semibold text-debugger-text mb-2">
              ACHIEVEMENTS
            </h3>
            <div className="space-y-2">
              {project.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-debugger-success mt-1">•</span>
                  <span className="text-sm text-debugger-muted">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
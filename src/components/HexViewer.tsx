import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface HexViewerProps {
  project: Project | null;
  isAnalyzing: boolean;
}

export const HexViewer: React.FC<HexViewerProps> = ({ project, isAnalyzing }) => {
  const [currentByte, setCurrentByte] = useState(0);

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setCurrentByte(prev => (prev + 1) % 16);
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isAnalyzing]);

  const generateHexData = (project: Project | null) => {
    if (!project) {
      return Array.from({ length: 8 }, (_, i) => ({
        offset: `0000000${i}0`,
        hex: '00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00',
        ascii: '................'
      }));
    }

    const techData = project.techStack.join(' ').padEnd(128, '\0');
    const lines = [];
    
    for (let i = 0; i < 8; i++) {
      const start = i * 16;
      const chunk = techData.slice(start, start + 16);
      const hex = Array.from(chunk)
        .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
        .join(' ');
      const ascii = chunk.replace(/[\x00-\x1F\x7F-\xFF]/g, '.');
      
      lines.push({
        offset: `0000000${i.toString(16).toUpperCase()}0`,
        hex: hex.padEnd(47, ' '),
        ascii: ascii.padEnd(16, '.')
      });
    }
    
    return lines;
  };

  const hexData = generateHexData(project);

  return (
    <div className="bg-debugger-panel border-t border-debugger-border h-48 flex flex-col">
      <div className="px-4 py-2 border-b border-debugger-border flex items-center justify-between">
        <h2 className="text-sm font-mono font-semibold text-debugger-text">
          HEX VIEWER - TECH STACK DUMP
        </h2>
        <div className="text-xs font-mono text-debugger-muted">
          {project ? `${project.techStack.length} technologies detected` : 'No data loaded'}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="font-mono text-xs">
          <div className="grid grid-cols-1 gap-0.5">
            {hexData.map((line, lineIndex) => (
              <motion.div
                key={lineIndex}
                className="flex items-center gap-4 hover:bg-debugger-border/30 px-2 py-0.5 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: lineIndex * 0.1 }}
              >
                <span className="text-debugger-accent w-20">{line.offset}</span>
                <div className="flex-1 flex">
                  <div className="w-96">
                    {line.hex.split(' ').map((byte, byteIndex) => {
                      const globalByteIndex = lineIndex * 16 + byteIndex;
                      return (
                        <span
                          key={byteIndex}
                          className={`mr-1 ${
                            isAnalyzing && currentByte === globalByteIndex
                              ? 'bg-debugger-accent text-debugger-bg animate-pulse'
                              : 'text-debugger-text'
                          }`}
                        >
                          {byte}
                        </span>
                      );
                    })}
                  </div>
                  <span className="text-debugger-muted ml-4 border-l border-debugger-border pl-4">
                    {line.ascii}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {project && (
            <motion.div
              className="mt-4 pt-4 border-t border-debugger-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-debugger-muted">
                <div className="mb-2">DECODED TECH STACK:</div>
                <div className="text-debugger-success">
                  {project.techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="inline-block mr-2 mb-1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      [{tech}]
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
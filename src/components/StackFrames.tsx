import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface StackFramesProps {
  skills: Skill[];
  selectedSkill: Skill | null;
  onSelectSkill: (skill: Skill) => void;
}

export const StackFrames: React.FC<StackFramesProps> = ({ 
  skills, 
  selectedSkill, 
  onSelectSkill 
}) => {
  const getLevelColor = (level: number) => {
    if (level >= 90) return 'text-debugger-success';
    if (level >= 80) return 'text-debugger-accent';
    if (level >= 70) return 'text-debugger-warning';
    return 'text-debugger-error';
  };

  return (
    <div className="bg-debugger-panel border-l border-debugger-border h-full flex flex-col min-w-0">
      <div className="px-4 py-3 border-b border-debugger-border">
        <h2 className="text-sm font-mono font-semibold text-debugger-text">
          STACK FRAMES
        </h2>
        <p className="text-xs font-mono text-debugger-muted mt-1">
          {skills.length} frames active
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-1 min-w-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className={`p-2 sm:p-3 rounded cursor-pointer transition-all duration-200 min-w-0 ${
                selectedSkill?.id === skill.id
                  ? 'bg-debugger-success/20 border border-debugger-success/50'
                  : 'hover:bg-debugger-border/50 border border-transparent'
              }`}
              onClick={() => onSelectSkill(skill)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-debugger-accent truncate">
                    Frame {skill.frameAddress}
                  </span>
                  {selectedSkill?.id === skill.id ? (
                    <ChevronDown size={12} className="text-debugger-muted" />
                  ) : (
                    <ChevronRight size={12} className="text-debugger-muted" />
                  )}
                </div>
                <span className={`text-xs font-mono font-bold ${getLevelColor(skill.level)}`}>
                  {skill.level}%
                </span>
              </div>
              
              <div className="font-mono text-sm text-debugger-text mb-2 truncate">
                {skill.name}
              </div>
              
              <div className="mb-2">
                <div className="h-1 bg-debugger-bg rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${
                      skill.level >= 90 ? 'bg-debugger-success' :
                      skill.level >= 80 ? 'bg-debugger-accent' :
                      skill.level >= 70 ? 'bg-debugger-warning' :
                      'bg-debugger-error'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>
              
              {selectedSkill?.id === skill.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-debugger-muted"
                >
                  <div className="mb-2 break-words">{skill.description}</div>
                  <div>
                    Used in: {skill.projects.length} project{skill.projects.length !== 1 ? 's' : ''}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="px-4 py-3 border-t border-debugger-border">
        <div className="text-xs font-mono text-debugger-muted">
          <div>Stack Depth: {skills.length}</div>
          <div>Avg Level: {Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length)}%</div>
        </div>
      </div>
    </div>
  );
};
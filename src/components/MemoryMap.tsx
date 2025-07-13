import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ChevronRight, Circle } from 'lucide-react';

interface MemoryMapProps {
  projects: Project[];
  selectedProject: Project | null;
  onSelectProject: (project: Project) => void;
}

export const MemoryMap: React.FC<MemoryMapProps> = ({ 
  projects, 
  selectedProject, 
  onSelectProject 
}) => {
  const getPermissionColor = (perm: string) => {
    if (perm.includes('EXEC')) return 'text-debugger-exec';
    if (perm.includes('WRITE')) return 'text-debugger-write';
    return 'text-debugger-read';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-debugger-success';
      case 'loaded': return 'text-debugger-accent';
      case 'stopped': return 'text-debugger-error';
      default: return 'text-debugger-muted';
    }
  };

  return (
    <div className="bg-debugger-panel border-r border-debugger-border h-full flex flex-col min-w-0">
      <div className="px-4 py-3 border-b border-debugger-border">
        <h2 className="text-sm font-mono font-semibold text-debugger-text">
          MEMORY MAP
        </h2>
        <p className="text-xs font-mono text-debugger-muted mt-1">
          {projects.length} segments loaded
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-1 min-w-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`p-2 sm:p-3 rounded cursor-pointer transition-all duration-200 min-w-0 ${
                selectedProject?.id === project.id
                  ? 'bg-debugger-accent/20 border border-debugger-accent/50'
                  : 'hover:bg-debugger-border/50 border border-transparent'
              }`}
              onClick={() => onSelectProject(project)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Circle 
                    size={6} 
                    className={`${getStatusColor(project.status)} fill-current animate-pulse-slow`} 
                  />
                  <span className="text-xs font-mono text-debugger-accent truncate">
                    {project.address}
                  </span>
                </div>
                <ChevronRight 
                  size={12} 
                  className={`text-debugger-muted transition-transform ${
                    selectedProject?.id === project.id ? 'rotate-90' : ''
                  }`}
                />
              </div>
              
              <div className="font-mono text-sm text-debugger-text mb-1 truncate">
                {project.name}
              </div>
              
              <div className="flex items-center justify-between text-xs font-mono flex-wrap gap-1">
                <span className={getPermissionColor(project.permissions)}>
                  {project.permissions}
                </span>
                <span className="text-debugger-muted">{project.size}</span>
              </div>
              
              <div className="mt-2 text-xs text-debugger-muted line-clamp-2 hidden sm:block">
                {project.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="px-4 py-3 border-t border-debugger-border">
        <div className="text-xs font-mono text-debugger-muted">
          <div>Total: 215 KB</div>
          <div>Free: 839 KB</div>
        </div>
      </div>
    </div>
  );
};
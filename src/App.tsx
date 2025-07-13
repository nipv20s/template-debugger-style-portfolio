import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toolbar } from './components/Toolbar';
import { MemoryMap } from './components/MemoryMap';
import { StackFrames } from './components/StackFrames';
import { DisassemblyView } from './components/DisassemblyView';
import { HexViewer } from './components/HexViewer';
import { projects, skills } from './data/portfolio';
import { Project, Skill } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (selectedProject) {
      setIsAnalyzing(!isAnalyzing);
    }
  };

  const handleDump = () => {
    // Create a resume dump
    const resume = {
      name: "Software Engineer",
      projects: projects.map(p => ({
        name: p.name,
        tech: p.techStack,
        achievements: p.achievements
      })),
      skills: skills.map(s => ({
        name: s.name,
        level: s.level
      }))
    };
    
    const blob = new Blob([JSON.stringify(resume, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio_dump.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSearch = () => {
    console.log('Search functionality would open here');
  };

  return (
    <div className="h-screen bg-debugger-bg text-debugger-text font-mono flex flex-col overflow-hidden">
      <Toolbar
        onAnalyze={handleAnalyze}
        onDump={handleDump}
        onSearch={handleSearch}
        isRunning={isAnalyzing}
      />
      
      <div className="flex-1 flex overflow-hidden min-h-0">
        {/* Left Panel - Memory Map */}
        <motion.div
          className="w-full sm:w-80 flex-shrink-0 sm:block hidden"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 'auto', opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MemoryMap
            projects={projects}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />
        </motion.div>

        {/* Mobile Memory Map Toggle */}
        <motion.div
          className="sm:hidden w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {!selectedProject ? (
            <MemoryMap
              projects={projects}
              selectedProject={selectedProject}
              onSelectProject={setSelectedProject}
            />
          ) : (
            <div className="flex flex-col h-full">
              {/* Mobile back button */}
              <div className="bg-debugger-panel border-b border-debugger-border p-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-debugger-accent text-sm font-mono hover:text-debugger-text transition-colors"
                >
                  ← Back to Memory Map
                </button>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex-1">
                  <DisassemblyView
                    project={selectedProject}
                    isAnalyzing={isAnalyzing}
                  />
                </div>
                <div className="h-48">
                  <HexViewer
                    project={selectedProject}
                    isAnalyzing={isAnalyzing}
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>
        {/* Center Panel - Disassembly View */}
        <div className="hidden sm:flex flex-1 flex-col min-w-0">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DisassemblyView
              project={selectedProject}
              isAnalyzing={isAnalyzing}
            />
          </motion.div>

          {/* Bottom Panel - Hex Viewer */}
          <motion.div
            className="h-48"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <HexViewer
              project={selectedProject}
              isAnalyzing={isAnalyzing}
            />
          </motion.div>
        </div>

        {/* Right Panel - Stack Frames */}
        <motion.div
          className="hidden lg:block w-80 flex-shrink-0"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 'auto', opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <StackFrames
            skills={skills}
            selectedSkill={selectedSkill}
            onSelectSkill={setSelectedSkill}
          />
        </motion.div>
      </div>
      
      {/* Mobile Stack Frames - Bottom sheet style */}
      <motion.div
        className="lg:hidden bg-debugger-panel border-t border-debugger-border max-h-64 overflow-y-auto"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <StackFrames
          skills={skills}
          selectedSkill={selectedSkill}
          onSelectSkill={setSelectedSkill}
        />
      </motion.div>
    </div>
  );
}

export default App;
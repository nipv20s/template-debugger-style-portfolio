# Debugger-Style Portfolio Template

A unique developer portfolio designed to look like a debugger interface. This template presents your projects, skills, and experience through the lens of a memory debugger, creating an engaging and technical presentation perfect for developers.

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop)

## ✨ Features

- **Debugger Interface**: Authentic debugger UI with memory maps, disassembly views, and hex viewers
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Interactive Elements**: Animated components with smooth transitions and hover effects
- **Modern Tech Stack**: Built with React, TypeScript, Tailwind CSS, and Framer Motion
- **Easy Customization**: Simple data structure for adding your own projects and skills
- **Production Ready**: Optimized build with Vite for fast loading times

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd debugger-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see your portfolio

## 🎨 Customization

### Adding Your Projects

Edit `src/data/portfolio.ts` to add your projects:

```typescript
export const projects: Project[] = [
  {
    id: 'your-project-id',
    name: 'Your_Project_Name',
    address: '0x0010', // Memory address (can be any hex value)
    size: '45 KB',     // Project size indicator
    permissions: 'READ/EXEC', // READ, WRITE, EXEC, or combinations
    description: 'Brief description of your project',
    techStack: ['React', 'Node.js', 'PostgreSQL'], // Technologies used
    achievements: [
      'Key achievement or metric',
      'Another important accomplishment',
      'Third notable result'
    ],
    links: {
      github: 'https://github.com/username/repo',
      demo: 'https://your-demo-url.com',
      case: 'https://case-study-url.com' // Optional
    },
    status: 'running' // 'running', 'loaded', or 'stopped'
  }
];
```

### Adding Your Skills

Update the skills array in the same file:

```typescript
export const skills: Skill[] = [
  {
    id: 'skill-id',
    name: 'JavaScript/ES6+',
    level: 95, // Proficiency level (0-100)
    frameAddress: '0x01', // Stack frame address
    description: 'Detailed description of your skill',
    projects: ['project-id-1', 'project-id-2'] // Related project IDs
  }
];
```

### Customizing Colors

The color scheme is defined in `tailwind.config.js`. You can modify the debugger theme colors:

```javascript
colors: {
  debugger: {
    bg: '#0f1419',      // Main background
    panel: '#1a1f29',   // Panel background
    border: '#2d3748',  // Border color
    text: '#e2e8f0',    // Primary text
    muted: '#94a3b8',   // Muted text
    accent: '#38bdf8',  // Accent color (cyan)
    success: '#10b981', // Success color (green)
    warning: '#f59e0b', // Warning color (amber)
    error: '#ef4444',   // Error color (red)
    exec: '#8b5cf6',    // Execute permission (purple)
    read: '#06b6d4',    // Read permission (cyan)
    write: '#f97316',   // Write permission (orange)
  }
}
```

### Updating Personal Information

1. **Page Title**: Edit the `<title>` tag in `index.html`
2. **Resume Download**: The "DUMP RESUME" button in `src/App.tsx` generates a JSON file with your data
3. **Favicon**: Replace `public/favicon.svg` with your own icon

## 📱 Responsive Behavior

The template adapts to different screen sizes:

- **Desktop (1024px+)**: Full three-panel layout with memory map, disassembly, and stack frames
- **Tablet (768px-1023px)**: Two-panel layout with collapsible stack frames at bottom
- **Mobile (<768px)**: Single-panel layout with navigation between sections

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # React components
│   ├── Toolbar.tsx     # Top toolbar with controls
│   ├── MemoryMap.tsx   # Left panel - project list
│   ├── DisassemblyView.tsx # Center panel - project details
│   ├── HexViewer.tsx   # Bottom panel - tech stack hex dump
│   └── StackFrames.tsx # Right panel - skills list
├── data/
│   └── portfolio.ts    # Your projects and skills data
├── types/
│   └── index.ts        # TypeScript type definitions
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

### Key Components

- **MemoryMap**: Displays projects as memory segments with status indicators
- **DisassemblyView**: Shows project details in assembly-like format
- **HexViewer**: Displays tech stack as hexadecimal dump
- **StackFrames**: Lists skills as stack frames with proficiency levels
- **Toolbar**: Contains action buttons and system information

## 🎯 Customization Tips

1. **Memory Addresses**: Use realistic hex addresses (0x0010, 0x0020, etc.)
2. **Project Status**: Use 'running' for current projects, 'loaded' for completed ones
3. **Permissions**: Match permissions to project type (READ for documentation, EXEC for applications)
4. **Tech Stack**: Keep technology names concise for better hex viewer display
5. **Achievements**: Use specific metrics and numbers when possible

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🤝 Contributing

Feel free to submit issues and enhancement requests! This template is designed to be easily customizable while maintaining the authentic debugger aesthetic.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎨 Design Credits

Inspired by popular debuggers like GDB, LLDB, and modern IDE debugging interfaces. The color scheme draws from popular developer themes like One Dark and Monokai.

---

**Happy coding!** 🚀 Make this template your own and showcase your projects in a unique, technical way that stands out from typical portfolio sites.
# Roadmap Planner

An advanced web application for creating, organizing, and tracking your roadmap progress with a beautiful, modern interface.

## Features

- **Create Roadmaps**: Build visual roadmaps with multiple steps and milestones
- **Track Progress**: Monitor your progress with real-time completion tracking
- **Visual Timeline**: See your journey with beautiful visual timelines
- **Persistent Storage**: Your roadmap is automatically saved to your browser's localStorage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark purple theme with smooth animations
- **No Backend Required**: Runs entirely in the browser

## Tech Stack

- **Framework**: Next.js (latest) with App Router
- **Language**: JavaScript (ES6+)
- **Styling**: Plain CSS with modular CSS files
- **State Management**: React Context API
- **Storage**: Browser localStorage

## Project Structure

```
roadmap-planner/
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── layout.js         # Root layout component
│   │   ├── page.js           # Home page
│   │   ├── page.css          # Home page styles
│   │   ├── roadmap/
│   │   │   ├── page.js       # Roadmap page
│   │   │   ├── roadmap.css   # Roadmap page styles
│   │   └── globals.css       # Global styles and CSS variables
│   ├── components/
│   │   ├── Navbar.js         # Navigation bar component
│   │   ├── Navbar.css        # Navbar styles
│   │   ├── NodeCard.js       # Individual roadmap step component
│   │   ├── NodeCard.css      # Node card styles
│   │   ├── ProgressBar.js    # Progress tracking component
│   │   ├── ProgressBar.css   # Progress bar styles
│   │   └── Providers.js      # Context provider wrapper
│   ├── context/
│   │   └── RoadmapContext.js # Context for global state management
│   ├── hooks/
│   │   └── useLocalStorage.js # Custom hook for localStorage
│   ├── utils/
│   │   └── helpers.js        # Utility functions
│   └── styles/
│       └── variables.css     # CSS design system variables
├── .env.local                # Environment variables
├── .gitignore               # Git ignore rules
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## Installation

### Prerequisites

- Node.js 16+ installed on your system
- npm or yarn package manager

### Setup Steps

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The application will reload automatically when you make changes.

## Available Scripts

### `npm run dev`
Runs the development server on port 3000. The app will reload on file changes.

### `npm run build`
Creates an optimized production build.

### `npm start`
Runs the production server (build must be run first).

### `npm run lint`
Runs the Next.js linter to check for code issues.

## Usage Guide

### Home Page
- Welcome screen with application overview
- Quick access button to start planning your roadmap
- Overview of key features

### Roadmap Page
- **View Your Steps**: All your roadmap steps are displayed as cards
- **Add New Step**: Use the form on the right to add new steps with title, description, and duration
- **Mark Complete**: Click the "Mark Complete" button to toggle step completion status
- **Delete Step**: Click the ✕ button to delete a step
- **Track Progress**: View your progress percentage in the progress bar

### Data Persistence
- All data is automatically saved to your browser's localStorage
- Your roadmap will persist even after closing the browser
- Clear your browser cache to reset all data

## Component Overview

### Navbar
Navigation bar with links to Home and Roadmap pages. Shows the active page.

### NodeCard
Individual step card with:
- Title and description
- Duration information
- Toggle complete button
- Delete button
- Completion badge

### ProgressBar
Visual progress indicator showing:
- Animated fill percentage
- Current completion percentage
- Smooth transitions

### ProgressTracker
Displays statistics about your roadmap:
- Total steps created
- Steps completed
- Overall progress percentage

## Styling System

### Color Palette
- **Primary**: `#6d28d9` (Purple)
- **Primary Dark**: `#5b21b6`
- **Background**: `#0f172a`
- **Surface**: `#1e293b`
- **Success**: `#10b981` (Green)
- **Error**: `#ef4444` (Red)
- **Warning**: `#f59e0b` (Orange)

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

### CSS Features
- CSS variables for consistent theming
- Smooth transitions and animations
- Box shadows for depth
- Mobile-first responsive design
- Accessibility considerations

## Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: Latest versions

## Performance

- Optimized component rendering with React hooks
- Efficient localStorage management
- CSS animations use GPU acceleration
- Lazy loading of images (if added)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance

## Environment Variables

**NEXT_PUBLIC_APP_NAME**: Application name (currently "Roadmap Planner")

## Troubleshooting

### Data not persisting?
- Check that localStorage is enabled in your browser
- Try clearing browser cache and reload
- Check browser console for errors

### Styles not loading?
- Refresh the page (Ctrl+F5 or Cmd+Shift+R on Mac)
- Clear browser cache
- Rebuild the project: `npm run build`

### Port 3000 already in use?
Run on a different port:
```bash
npm run dev -- -p 3001
```

## Future Enhancements

- Export roadmap to PDF
- Import roadmap from file
- Share roadmap with others
- Collaboration features
- Multiple themes (light/dark toggle)
- Roadmap templates
- Time-based tracking
- Reminder notifications
- Cloud sync with backend

## License

MIT License - Feel free to use this project for personal and commercial purposes.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## Support

For issues or questions, please contact the development team or create an issue in the repository.

---

Built with ❤️ using Next.js and React

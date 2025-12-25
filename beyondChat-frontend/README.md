# BeyondChats Article Viewer - Phase 3

A ReactJS frontend application that fetches and displays articles from the Laravel API, showing both original and AI-enhanced versions.

## Features

- **Article Listing**: Browse all articles in a responsive grid layout
- **Tab Navigation**: Switch between Original Articles and AI-Enhanced versions
- **Article Detail View**: Read full articles with beautiful typography
- **Version Toggle**: Compare original and AI-enhanced versions side by side
- **Reference Sources**: View cited sources for AI-enhanced articles
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Loading States**: Smooth loading indicators for better UX

## Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **React Router DOM** - Client-side routing
- **TailwindCSS** - Styling
- **Lucide React** - Icons
- **React Query** - Data fetching (prepared for API integration)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or extract the project:
   ```bash
   cd beyondchats-articles
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## API Integration

The app uses mock data in `src/data/articles.js`. To connect to your Laravel API:

1. Update the fetch functions in `src/data/articles.js`:
   ```javascript
   export const fetchArticles = async () => {
     const response = await fetch('YOUR_LARAVEL_API_URL/api/articles');
     return response.json();
   };
   ```

2. Ensure your Laravel API returns data in this format:
   ```json
   {
     "id": 1,
     "title": "Article Title",
     "slug": "article-slug",
     "excerpt": "Short description...",
     "content": "<p>HTML content...</p>",
     "author": "Author Name",
     "publishedAt": "2024-12-15",
     "readTime": 5,
     "category": "Category Name",
     "imageUrl": "https://...",
     "hasUpdatedVersion": true
   }
   ```

## Project Structure

```
src/
├── components/
│   ├── ArticleCard.jsx      # Card component for article preview
│   ├── ArticleGrid.jsx      # Grid layout for articles
│   ├── Header.jsx           # Navigation header
│   ├── LoadingSpinner.jsx   # Loading indicator
│   ├── VersionToggle.jsx    # Toggle between versions
│   └── ui/                  # Shadcn UI components
├── data/
│   └── articles.js          # Mock data & API functions
├── pages/
│   ├── Index.jsx            # Home page with article listing
│   ├── ArticleDetail.jsx    # Single article view
│   └── NotFound.jsx         # 404 page
├── App.jsx                  # Main app with routing
├── main.jsx                 # Entry point
└── index.css                # Global styles & design tokens
```

## Design System

The app uses a custom design system with:

- **Colors**: Warm cream backgrounds with deep teal accents
- **Typography**: Playfair Display (headings) + Source Sans 3 (body)
- **Shadows**: Soft, elegant shadow system
- **Animations**: Smooth fade-in and hover effects

## Assignment Context

This is **Phase 3** of the BeyondChats Technical Product Manager assignment:

- **Phase 1**: Laravel CRUD API for articles (backend)
- **Phase 2**: NodeJS script for Google search & LLM enhancement
- **Phase 3**: ReactJS frontend for displaying articles ← *This project*

## License

MIT

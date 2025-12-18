# News & Auth Application (Task-1)

**Live Demo:** [https://kgtech-task.vercel.app/](https://kgtech-task.vercel.app/)

A modern React application featuring a responsive news feed with infinite scroll, user authentication (Login/Signup) with glassmorphism design, and a fully responsive navigation system.

## 🚀 Technologies Used

- **Frontend Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Material UI (MUI)](https://mui.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons/UI**: MUI Icons & Lucide-style SVG patterns

## 📁 Folder Structure

```text
task-1/
├── src/
│   ├── api/            # API integration & Axios instances
│   │   ├── api.ts      # Base Axios configuration
│   │   └── Newsapi.ts  # News API endpoints & logic
│   ├── assets/         # Static images and icons
│   ├── components/     # Reusable UI components
│   │   └── Navbar.tsx  # Responsive Navbar with Mobile Sidebar
│   ├── pages/          # Individual page components
│   │   ├── auth/       # Authentication pages (Login, Signup)
│   │   ├── News.tsx    # News feed with Infinite Scroll
│   │   ├── Home.tsx    # Landing/Home page
│   │   └── Errorpage.tsx # Custom 404 Page
│   ├── routes/         # Route configurations
│   │   ├── Router.tsx  # Main Router setup
│   │   └── Lazy.tsx    # Lazy loading configurations
│   ├── types/          # TypeScript interfaces/types
│   ├── App.tsx         # Main App entry component
│   └── main.tsx        # DOM Rendering & Styles import
├── public/             # Static public assets
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite build configuration
```

## ✨ Key Features

1.  **Infinite Scroll News Feed**:
    *   Dynamic data fetching from News API.
    *   Optimized `IntersectionObserver` for smooth scrolling.
    *   Artificial 200ms delay with MUI CircularProgress for enhanced UX.
    *   Responsive card grid with modern hover effects.

2.  **Authentication UI**:
    *   **Login & Signup**: Modern glassmorphism design using MUI Paper and backdrop filters.
    *   **Responsive Forms**: Fully adapted for mobile and desktop views.
    *   **Interactive UI**: Smooth buttons with hover animations and transitions.

3.  **Responsive Navbar**:
    *   Desktop navigation with hover states.
    *   Mobile hamburger menu with a slide-in sidebar.
    *   Intelligent z-index management for overlays.

4.  **Custom 404 Error Page**:
    *   Responsive design with clear "Go Home" navigation.

## 🛠️ Getting Started

### Prerequisites

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/TarakaYalakala/Kgtech-task.git
    cd task-1
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up Environment Variables:
    Create a `.env` file in the root directory:
    ```env
    VITE_BASE_URL=your_news_api_base_url
    VITE_API_KEY=your_news_api_key
    ```

4.  Run the development server:
    ```bash
    npm run dev
    ```

### Build for Production

```bash
npm run build
```
Build files will be generated in the `dist/` folder.

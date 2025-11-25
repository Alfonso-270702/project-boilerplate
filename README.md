# React + Vite + Tailwind Boilerplate

A robust, modern boilerplate for company projects.

## Features

-   **Framework**: React 18 + Vite
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS + clsx + tailwind-merge
-   **State Management**: Zustand
-   **Routing**: React Router v6
-   **API**: Axios with interceptors
-   **Icons**: Lucide React
-   **Linting & Formatting**: ESLint (Flat Config) + Prettier

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Shared UI components
│   ├── ui/         # Generic UI components (Button, Input)
│   └── layout/     # Layout components (Header, Sidebar)
├── features/       # Feature-based modules
├── hooks/          # Global hooks
├── lib/            # Third-party library configurations (axios)
├── pages/          # Route pages
├── stores/         # Global state stores
├── styles/         # Global styles
├── types/          # Global TypeScript types
├── utils/          # Helper functions
├── App.tsx
└── main.tsx
```

## Scripts

-   `npm run dev`: Start dev server
-   `npm run build`: Build for production
-   `npm run lint`: Lint code
-   `npm run format`: Format code
-   `npm run preview`: Preview production build

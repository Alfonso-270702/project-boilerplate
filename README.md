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
├── components/     # Shared UI components (Reusable)
│   ├── ui/         # Generic UI components
│   │   └── <ComponentName>/ # Folder with index.tsx & types.ts (e.g., Button, Input)
│   └── layout/     # Layout components (Header, Sidebar) - Folder structure with index.tsx & types.ts
├── features/       # Feature-based modules
│   └── <feature>/  # Feature specific code
│       ├── components/ # Feature specific components
│       ├── hooks/      # Feature specific hooks
│       └── types/      # Feature specific types
├── hooks/          # Global hooks
├── pages/          # Route pages
├── stores/         # Global state stores (Zustand)
├── styles/         # Global styles
├── types/          # Global TypeScript types
├── utils/          # Helper functions
├── App.tsx
└── main.tsx
```

## AI Rules

This project follows strict architectural rules defined in `AI_RULES.md`. All contributors (human and AI) must adhere to:

1.  **Feature-Based Architecture**: Business logic lives in `src/features`.
2.  **Global State**: All Zustand stores live in `src/stores`.
3.  **Component Structure**: Reusable components must have their own folder with `index.tsx` and `types.ts`.
4.  **Syntax**: Use ES6 arrow functions.
```

## Scripts

-   `npm run dev`: Start dev server
-   `npm run build`: Build for production
-   `npm run lint`: Lint code
-   `npm run format`: Format code
-   `npm run preview`: Preview production build

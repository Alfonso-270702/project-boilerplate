# AI Rules

This document outlines the architectural rules and best practices for this project. All AI assistants must follow these guidelines when adding new features or modifying existing code.

## 1. Feature-Based Architecture

We follow a **Feature-Based Architecture**.

### Directory Structure
New features must be created in `src/features/<feature-name>` with the following structure:

```text
src/features/<feature-name>/
├── components/      # Feature-specific UI components
├── hooks/           # Feature-specific API hooks
├── types/           # Feature-specific type definitions
└── index.ts         # Public API (exports components, hooks, etc.)
```

**Important Restrictions:**
- **No Stores in Features**: Do NOT place stores in feature folders.
- **No Utils in Features**: Do NOT place utils in feature folders.

## 2. State Management

This project uses **Zustand** for global state management.

- **Global Stores Only**: All Zustand stores must be placed in `src/stores`.
- **No Feature Stores**: Do not create stores inside `src/features/<feature-name>/stores`. Even if a store is used by only one feature, place it in `src/stores` to centralize state for easier debugging.

## 3. Types

- **Feature Types**: Define types specific to a feature in `src/features/<feature-name>/types`.
- **Global Types**: Define shared/global types in `src/types`.

## 4. Hooks

- **Global Hooks**: Place general-purpose hooks in `src/hooks`.
- **Feature Hooks**: Place new API hooks or feature-specific logic in `src/features/<feature-name>/hooks`.

## 5. Reusable Components

When creating reusable components (in `src/components`), place them inside the `ui` folder and follow this structure:

```text
src/components/ui/<ComponentName>/
├── index.tsx        # Component logic and UI
└── types.ts         # Component prop types
```

## 6. Syntax & Styling

- **ES6 Syntax**: Always use ES6 syntax for functions (arrow functions).
  ```typescript
  // Correct
  const MyComponent = () => { ... }
  
  // Incorrect
  function MyComponent() { ... }
  ```
- **Styling**: Use **Tailwind CSS** and the `cn()` utility for conditional classes.

## 7. Environment Variables

- Ensure a `.env` file exists in the root directory for environment-specific configurations.

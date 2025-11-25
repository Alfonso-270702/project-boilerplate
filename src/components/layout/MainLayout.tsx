import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b bg-card p-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">Boilerplate App</h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="/" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-primary">
                  Dashboard
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto flex-1 p-4">
        <Outlet />
      </main>
      <footer className="border-t bg-muted p-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Company Name
      </footer>
    </div>
  );
};

import { useCounterStore } from '../stores/useCounterStore';
import { Button } from '../components/ui/Button';

export const HomePage = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-3xl font-bold tracking-tight">Welcome to the Boilerplate</h2>
      <p className="mt-4 text-muted-foreground">
        This is a starter template with React, Vite, Tailwind, and Zustand.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Button onClick={decrement} variant="secondary">
          -
        </Button>
        <span className="text-xl font-bold">{count}</span>
        <Button onClick={increment}>+</Button>
        <Button onClick={reset} variant="outline" className="ml-4">
          Reset
        </Button>
      </div>
    </div>
  );
};

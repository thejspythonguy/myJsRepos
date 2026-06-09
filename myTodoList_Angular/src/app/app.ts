import { Component, signal, effect, afterNextRender, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Todo {
  id: number;
  title: string;
  status: boolean;
  date: Date;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('theJsPythonGuy TodoList Angular');
  todos = signal<Todo[]>([]);
  private hydrated = false; // Tracks whether todos have finished loading from storage.

  // Loads saved todos after the first render and keeps later changes synced to localStorage.
  constructor() {
    // Reads persisted todos only in the browser after Angular finishes the initial render.
    afterNextRender(() => {
      const storedTodos = localStorage.getItem('mytodos-list');
      if (storedTodos) {
        this.todos.set(JSON.parse(storedTodos));
      }
      this.hydrated = true; // Allows the sync effect to write after the initial load.
    });

    // Saves todo changes once hydration is complete so stored data is not overwritten early.
    effect(() => {
      const currentTodos = this.todos();
      if (!this.hydrated) return;
      localStorage.setItem('mytodos-list', JSON.stringify(currentTodos));
      console.log('Todos updated:', currentTodos);
    });
  }

  // Adds a new incomplete todo with the entered title and the current date.
  addTodo(title: string) {
    this.todos.update((mytodos) => [
      ...mytodos,
      { id: mytodos.length + 1, title, status: false, date: new Date() },
    ]);
  }

  // Flips the completed status for the todo that matches the provided id.
  toggleStatus(id: number) {
    this.todos.update((mytodos) =>
      mytodos.map((t) => (t.id === id ? { ...t, status: !t.status } : t)),
    );
  }
}

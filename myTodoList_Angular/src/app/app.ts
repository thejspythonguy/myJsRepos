import { Component, signal, effect, afterNextRender } from '@angular/core';
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
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('theJsPythonGuy TodoList Angular');
  todos = signal<Todo[]>([]);
  private hydrated = false; // 👈 guard flag

  constructor() {
    afterNextRender(() => {
      const storedTodos = localStorage.getItem('mytodos-list');
      if (storedTodos) {
        this.todos.set(JSON.parse(storedTodos));
      }
      this.hydrated = true; // 👈 unlock writes only after load
    });

    effect(() => {
      const currentTodos = this.todos();
      if (!this.hydrated) return; // 👈 skip premature writes
      localStorage.setItem('mytodos-list', JSON.stringify(currentTodos));
      console.log('Todos updated:', currentTodos);
    });
  }

  addTodo(title: string) {
    this.todos.update(mytodos => [
      ...mytodos,
      { id: mytodos.length + 1, title, status: false, date: new Date() }
    ]);
  }

  toggleStatus(id: number) {
    this.todos.update(mytodos =>
      mytodos.map(t => t.id === id ? { ...t, status: !t.status } : t)
    );
  }
}
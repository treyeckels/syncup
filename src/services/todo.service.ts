import { Todo, TodoCreateDto, TodoUpdateDto } from '../models';

class TodoService {
  async fetchAll(offset?: number, limit?: number): Promise<Todo[]> {
    return await fetch(`${this.baseUrl}/todos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  }

  async fetch(id: string): Promise<Todo> {
    return await fetch(`${this.baseUrl}/todos/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  }

  async create(todo: TodoCreateDto): Promise<Todo> {
    return await fetch(`${this.baseUrl}/todos`, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  }

  async update(id: string, todo: TodoUpdateDto): Promise<Todo> {
    return await fetch(`${this.baseUrl}/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  }

  async remove(id: string): Promise<void> {
    await fetch(`${this.baseUrl}/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  constructor(private readonly baseUrl: string) {}
}

export const todoService = new TodoService(
  'https://us-central1-todo-api-4119c.cloudfunctions.net/api'
);

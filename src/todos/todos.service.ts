import { Injectable } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './dto';

@Injectable()
export class TodosService {
  private todos = [
    {
      id: 1,
      title: "first task",
      description: "to do something"
    },

  ];

  create(createTodoDto: CreateTodoDto) {
    const newTodo = { id: Date.now(), ...createTodoDto };
    this.todos.push(newTodo);
    return newTodo;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    return this.todos.find(todo => todo.id === id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex] = { ...this.todos[todoIndex], ...updateTodoDto };
      return this.todos[todoIndex];
    }
    return null;
  }

  remove(id: number) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      const removedTodo = this.todos.splice(todoIndex, 1);
      return removedTodo[0];
    }
    return null;
  }
}

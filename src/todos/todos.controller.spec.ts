import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

describe('TodosController', () => {
  let controller: TodosController;
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService],
    }).compile();

    controller = module.get<TodosController>(TodosController);
    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a todo', () => {
    const createTodoDto = { title: 'Test Todo', description: 'Description' };
    expect(controller.create(createTodoDto)).toEqual({
      id: expect.any(Number),
      ...createTodoDto,
    });
  });

  it('should return an array of todos', () => {
    expect(controller.findAll()).toEqual(expect.any(Array));
  });

  it('should return a single todo', () => {
    const todoId = 1;
    expect(controller.findOne(todoId.toString())).toEqual(expect.any(Object));
  });

  it('should update a todo', () => {
    const todoId = 1;
    const updateTodoDto = { title: 'Updated Todo', description: 'Updated Description' };
    expect(controller.update(todoId.toString(), updateTodoDto)).toEqual(expect.any(Object));
  });

  it('should remove a todo', () => {
    const todoId = 1;
    expect(controller.remove(todoId.toString())).toEqual(expect.any(Object));
  });
});

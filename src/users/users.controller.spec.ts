import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    const createUserDto = { name: 'John', age: 30 };
    expect(controller.create(createUserDto)).toEqual({
      id: expect.any(Number),
      ...createUserDto,
    });
  });

  it('should return an array of users', () => {
    expect(controller.findAll()).toEqual(expect.any(Array));
  });

  it('should return a single user', () => {
    const userId = 1;
    expect(controller.findOne(userId.toString())).toEqual(expect.any(Object));
  });

  it('should update a user', () => {
    const userId = 1;
    const updateUserDto = { name: 'John Updated', age: 31 };
    expect(controller.update(userId.toString(), updateUserDto)).toEqual(expect.any(Object));
  });

  it('should remove a user', () => {
    const userId = 1;
    expect(controller.remove(userId.toString())).toEqual(expect.any(Object));
  });
});

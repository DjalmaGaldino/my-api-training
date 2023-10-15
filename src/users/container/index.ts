import { IUsersRepository } from "@users/repositories/IUsersRepository";
import { UsersRepositoy } from "@users/repositories/UsersRepository";
import { CreateUserController } from "@users/useCases/createUser/CreateUserController";
import { ListUsersController } from "@users/useCases/listUsers/ListUsersController";
import { container } from "tsyringe";


container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepositoy)
container.registerSingleton('CreateUserController', CreateUserController)
container.registerSingleton('ListUsersController', ListUsersController)

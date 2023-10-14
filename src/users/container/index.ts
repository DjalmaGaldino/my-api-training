import { IUsersRepository } from "@users/repositories/IUsersRepository";
import { UsersRepositoy } from "@users/repositories/UsersRepository";
import { container } from "tsyringe";


container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepositoy)

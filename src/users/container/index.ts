import { IUsersRepository } from '@users/repositories/IUsersRepository'
import { UsersRepositoy } from '@users/repositories/UsersRepository'
import { CreateLoginController } from '@users/useCases/createLogin/CreateLoginController'
import { CreateUserController } from '@users/useCases/createUser/CreateUserController'
import { ListUsersController } from '@users/useCases/listUsers/ListUsersController'
import { ShowProfileController } from '@users/useCases/showProfle/ShowProfleController'
import { UpdateAvatarController } from '@users/useCases/updateAvatar/updateAvatarController'
import { container } from 'tsyringe'

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepositoy)
container.registerSingleton('CreateUserController', CreateUserController)
container.registerSingleton('ListUsersController', ListUsersController)
container.registerSingleton('CreateLoginController', CreateLoginController)
container.registerSingleton('UpdateAvatarController', UpdateAvatarController)
container.registerSingleton('ShowProfileController', ShowProfileController)


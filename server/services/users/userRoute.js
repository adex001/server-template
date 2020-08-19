import {Router} from 'express';
import userController from './userController';

const userRoute = Router();

userRoute.get('/user', userController);

export default userRoute;

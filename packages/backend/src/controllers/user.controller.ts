import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { IUser } from '../models/user';
import * as userService from '../services/user.service';
import { StatusCode } from '../types/common';

export const getUserList = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const userList = await userService.getUserList();
  res.status(StatusCode.success).send(userList);
});

export const getUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const user: IUser = await userService.getUser(req.params.id);
  res.status(StatusCode.success).send(user);
});

export const getSelf = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const user: IUser = await userService.getUser(res.locals.user.id);
  res.status(StatusCode.success).send(user);
});

export const createUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const createdUser: IUser = await userService.createUser(req.body);
  res.status(StatusCode.success).send(createdUser);
});

export const updateUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const updatedUser: IUser = await userService.updateUser(req.params.id, req.body);
  res.status(StatusCode.success).send(updatedUser);
});

export const deleteUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const deletedUser: IUser = await userService.deleteUser(req.params.id);
  res.status(StatusCode.success).send(deletedUser);
});

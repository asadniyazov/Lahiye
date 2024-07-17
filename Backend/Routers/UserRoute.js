import { Router } from 'express';
import { UsersModel } from '../Models/User.js';
import { authMiddleware } from '../Middleware/AuthMiddleware.js';

export const usersRouter = Router();

usersRouter.get('/', authMiddleware(["admin"]), async (req, res) => {
  try {
    const users = await UsersModel.find();
    res.send(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

usersRouter.get('/:id', authMiddleware(["admin"]), async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UsersModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'ID is not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching user' });
  }
});

usersRouter.post('/',authMiddleware(["admin"]), async (req, res) => {
  try {
    const body = req.body;
    const user = await UsersModel.create(body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user' });
  }
});

usersRouter.put('/:id',authMiddleware(["admin"]), async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = await UsersModel.findByIdAndUpdate(id, body);

    if (!user) {
      return res.status(404).json({ message: 'ID is not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error updating user' });
  }
});

usersRouter.delete('/:id',authMiddleware(["admin"]), async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UsersModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Error deleting user' });
  }
});
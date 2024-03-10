import * as authService from '../services/authService.js';

export const registerUser = async (req, res) => {
  console.log('node: ', req)
  try {
    const user = await authService.register(req.body.email, req.body.password, req.body.name);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { user, token } = await authService.login(req.body.email, req.body.password);
    res.json({ user, token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

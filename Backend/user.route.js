import express from 'express';
import { login, shopping, signup } from './user.controller.js';

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/checkout',shopping)

export default router;
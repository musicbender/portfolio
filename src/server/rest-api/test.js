import express from 'express';
import { apiResponse } from '../util/util';

const router = express.Router();

router.get('/test', (req, res) => {
  apiResponse(res, 200, 3, 'success', { message: 'patjacobs.io server is running!' });
});

export default router;
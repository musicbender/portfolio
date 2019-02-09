import fs from 'fs';
import path from 'path';

export const apiResponse = (res, httpCode = 200, code = 3, message='success', data={}) => {
  let responseData = {};
  responseData.code = code;
  responseData.message = message;
  responseData.data = data;
  res.status(httpCode).json(responseData)
}

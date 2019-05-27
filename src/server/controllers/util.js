export const regexEscape = (string) => {
  if (!string) { return ''; }
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// determines if url path is a file
export const pathIsFile = (path) => {
  const regex = /^((?!\.+).)*$/g;
  const output = path.match(regex);
  return !output;
}

export const apiResponse = (res, httpCode = 200, code = 3, message='success', data={}) => {
  let responseData = {};
  responseData.code = code;
  responseData.message = message;
  responseData.data = data;
  res.status(httpCode).json(responseData)
}

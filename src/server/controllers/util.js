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

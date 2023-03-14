export const padString = (value, targetLength = 3, charToPad = '0', padPosition = 'start') => {
  const str = value.toString();
  const methodName = padPosition === 'start' ? 'padStart' : 'padEnd';
  return str[methodName](targetLength, charToPad);
};

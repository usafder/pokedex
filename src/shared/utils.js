export const getClassNameForType = (type) => {
  switch (type) {
    case 'normal':
      return 'bg-moon-gray';
    case 'fire':
      return 'bg-orange near-white';
    case 'water':
      return 'bg-light-blue';
    case 'grass':
      return 'bg-green near-white';
    case 'electric':
      return 'bg-yellow';
    case 'ice':
      return 'bg-lightest-blue';
    case 'fighting':
      return 'bg-dark-red near-white';
    case 'poison':
      return 'bg-light-purple near-white';
    case 'ground':
      return 'bg-gold';
    case 'flying':
      return 'bg-blue near-white';
    case 'psychic':
      return 'bg-hot-pink near-white';
    case 'bug':
      return 'bg-light-green';
    case 'rock':
      return 'bg-light-yellow';
    case 'ghost':
      return 'bg-purple near-white';
    case 'dark':
      return 'bg-mid-gray near-white';
    case 'dragon':
      return 'bg-dark-blue near-white';
    case 'steel':
      return 'bg-silver near-white';
    case 'fairy':
      return 'bg-light-pink';
    default:
      return '';
  }
};

export const padString = (value, targetLength = 3, charToPad = '0', padPosition = 'start') => {
  const str = value.toString();
  const methodName = padPosition === 'start' ? 'padStart' : 'padEnd';
  return str[methodName](targetLength, charToPad);
};

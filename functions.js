export const length = (array) => {
  let counter = 0;

  while (array[counter] !== undefined) {
    counter += 1;
  }

  return counter;
};

export const push = (array, element) => {
  const newLength = length(array);
  array[newLength] = element;

  return newLength + 1;
};

export const pop = (array) => {
  const newLength = length(array);

  if (newLength === 0) return;

  const newElement = array[newLength - 1];

  array.length = newLength - 1;

  return newElement;
};

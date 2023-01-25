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

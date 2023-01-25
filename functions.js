export const length = (array) => {
  let counter = 0;

  while (array[counter] !== undefined) {
    counter += 1;
  }

  return counter;
};

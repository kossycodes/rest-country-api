const joinArrayWithCommas = (array) => {
  const data = array.map((arrayItem) => arrayItem.name);

  return data.join(', ');
};

export default joinArrayWithCommas;

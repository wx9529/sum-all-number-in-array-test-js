function sumItems(array) {
  if (array.length > 0) {
    let item = array.shift();
    if (Array.isArray(item)) {
      return sumItems(item) + sumItems(array);
    }
    return item + sumItems(array);
  }
  return 0;
}

module.exports = sumItems;

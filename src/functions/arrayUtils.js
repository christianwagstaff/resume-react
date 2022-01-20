export function removeAtIndex(array, index) {
  let editArray = array.slice(0);
  editArray.splice(index, 1);
  return editArray;
}

export function replaceAtIndex(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}

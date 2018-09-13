/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  var result = []

  for(var i = 0; i < arr.length;i++){
  	if("flags" in arr[i] && Array.isArray(arr[i].flags)){
  		for(var j = 0; j < arr[i].flags.length; ++j)
  			result.push(arr[i].flags[j]);
  	}
  }
  return result;
};

export default getFlags;

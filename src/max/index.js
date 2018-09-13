/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  if(arr.length === 0)
  	return NaN;

  var maxVal = -Infinity;
  for(var i = 1; i < arr.length; ++i)
  {
  	if(isFinite(arr[i]) && arr[i] > maxVal)
  		maxVal = arr[i];
  }

  return maxVal;
};

export default max;

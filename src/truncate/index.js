/**
 * This function should truncate the passed string and add "..." to
 * the end of it. Should exist ability to change "..." to some other symbols
 *
 * @param {string} str - string which should be truncated
 * @param {number} length - the max length of string after truncation
 * @param {string} replacer - the string which will be added to the end
 * @return {string} truncated string
 */
const truncate = (str, length = 0, replacer = '...') => {
  if(str.length === 0 || str.length < length)
  	return str;

  var result = str
  if(length !== 0)
  	result = str.substring(0, length);

  if(replacer.length > result.length)
  	return replacer

  result = result.substring(0, result.length - replacer.length) + replacer;
  return result;
};

export default truncate;

import _ from 'lodash';

const getSortedKeys = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const unionKeys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(unionKeys);
  return sortedKeys;
};

const compareFiles = (filePath1, filePath2) => {
  const keys = getSortedKeys(filePath1, filePath2);
  const conditions = keys.reduce((acc, key) => {
    if (!_.has(filePath1, key)) {
      acc[`+ ${key}`] = filePath2[key];
    }
    if (!_.has(filePath1, key)) {
      acc[`- ${key}`] = filePath2[key];
    }
    if (filePath1[key] !== filePath2[key]) {
      acc[`- ${key}`] = filePath1[key];
      acc[`+ ${key}`] = filePath2[key];
    }
    if (filePath1[key] === filePath2[key]) {
      acc[`  ${key}`] = filePath1[key];
    }
    return acc;
  }, {});
  const convertObjInString = JSON.stringify(conditions, null, '  ');
  return convertObjInString.replace(/"/gi, '').replace(/,/gi, '');
};

export default compareFiles;

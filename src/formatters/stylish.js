import _ from 'lodash';

const getIdent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat((depth * spacesCount) - 2);
const getBrackeIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat((depth * spacesCount) - spacesCount);

const stringify = (data, depth = 1) => {
  if (!_.isPlainObject(data)) return `${data}`;

  const currentIndent = getIdent(depth);
  const bracketIndent = getBrackeIndent(depth);
  const currentValue = Object.entries(data);

  const lines = currentValue.map(([key, value]) => `${currentIndent}  ${key}: ${stringify(value, depth + 1)}`);

  const result = ['{', ...lines, `${bracketIndent}}`].join('\n');
  return result;
};

const getStylish = (tree) => {
  const iter = (currentValue, depth = 1) => {
    const currentIndent = getIdent(depth);
    const bracketIndent = getBrackeIndent(depth);
    const lines = currentValue.flatMap((node) => {
      switch (node.status) {
        case 'nested':
          return `${currentIndent}  ${node.key}: ${iter(node.children, depth + 1)}`;
        case 'deleted':
          return `${currentIndent}- ${node.key}: ${stringify(node.value1, depth + 1)}`;
        case 'added':
          return `${currentIndent}+ ${node.key}: ${stringify(node.value2, depth + 1)}`;
        case 'unchanged':
          return `${currentIndent}  ${node.key}: ${stringify(node.value1, depth + 1)}`;
        case 'changed':
          return [
            `${currentIndent}- ${node.key}: ${stringify(node.value1, depth + 1)}`,
            `${currentIndent}+ ${node.key}: ${stringify(node.value2, depth + 1)}`,
          ];
        default:
          throw new Error(`Unknown type ${node.status}.`);
      }
    });
    return [`{`, ...lines, `${bracketIndent}}`].join('\n');
  };
  return iter(tree);
};

export default getStylish;

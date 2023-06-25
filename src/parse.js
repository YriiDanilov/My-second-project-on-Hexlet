import YAML from 'js-yaml';

export default (filepath, ext) => {
    switch (ext) {
        case 'json': JSON.parse(filepath);
        case 'yaml': YAML.load(filepath);
        case 'yml': YAML.load(filepath);
        default:
            console.log(`Unknown format ${ext}!`);
    };
};

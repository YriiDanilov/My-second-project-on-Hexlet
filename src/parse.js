import YAML from 'yaml';

export default (filepath, ext) => {
    switch (ext) {
        case 'json': JSON.parse(filepath);
        case 'yaml': YAML.parse(filepath);
        case 'yml': YAML.parse(filepath);
        default:
            console.log(`Unknown format ${ext}!`);
    };
};

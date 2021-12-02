import fs from 'fs';
import path from 'path/posix';
import readline from 'readline';

export const toAbsPath = (dirname: string, relativePath: string) => {
    return path.join(dirname, relativePath);
}

// Line by line file processing from: https://stackoverflow.com/a/56063018/13222140
export const getInputReadStream = async(absPath: string) => {
    const fileStream = fs.createReadStream(absPath);

    const rlInterface = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    return rlInterface;    
}
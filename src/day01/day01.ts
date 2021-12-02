import { getInputReadStream, toAbsPath } from '../../Util/util';

export const sonarSweep = async(inputPath: string = 'input.txt') => {
    const rl = await getInputReadStream(toAbsPath(__dirname, inputPath));

    let lastMeasured = Infinity;
    let countIncreases = 0;
    
    for await (const line of rl) {
        if (lastMeasured < ~~line){
            countIncreases++;
        }
        lastMeasured = ~~line;
    }

    return countIncreases;
}
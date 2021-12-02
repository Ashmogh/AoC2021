import http from "http";
import AoCDay from "../Model/Day";
import { sonarSweep } from "./day01/day01";
import AOC_DAYS from "./enum/AOC_DAYS";

http.createServer(() => {
}).listen("8000");
console.log('Up and Running!'); 


const prettyPrintDay = async(day: AoCDay) => {
    console.log(`${day.name}\nOutput A: ${await day.function_A()}`);

    if (day.function_B){
        console.log(`Output B: ${await day.function_B()}`);
    }
}

/**
 * 
 * @param dayIndex uses "human" 1-based indexing
 */
async function main(dayIndex?: number) {
    // run all days if the day is not specified
    if (!dayIndex){
        for (const day of AOC_DAYS){
            await prettyPrintDay(day);
        }       
    }
    else {
        const day = AOC_DAYS[dayIndex - 1];
        if(!day){console.error('Incorrect day index!'); return};

        await prettyPrintDay(day);
    }
}

main(1)

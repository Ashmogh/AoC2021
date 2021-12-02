export default interface AoCDay {
    name: string;
    function_A: (inputPath?: string) => Promise<number>;
    function_B?: (inputPath?: string) => Promise<number>;
}
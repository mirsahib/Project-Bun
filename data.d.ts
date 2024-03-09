declare module 'data.txt' {
    type Data = {
        fname: string;
        lname: string;
        age: number;
    };
    const data: Data;
    export default data
}
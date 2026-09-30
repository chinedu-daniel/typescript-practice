// "unknown", Typescript is telling us it doesn't 
// know the type you are calling yet

let data: unknown = "Hello";

console.log(data);

if (typeof data === "string") {
    console.log(data.toUpperCase());
}
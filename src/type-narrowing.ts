function printId(id: number | string): void {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

printId("abc123");
printId(123);
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId("abc123");
printId(123);
export {};
//# sourceMappingURL=type-narrowing.js.map
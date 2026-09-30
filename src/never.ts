function throwError(message: string): never {
    throw new Error(message);
}

throwError("This is an error message");


function keepRunning(): never {
    while (true) {
        console.log("Running...");
    }
}

keepRunning();
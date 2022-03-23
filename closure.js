function external() {
    const exterVar = "I'm an external variable!";
    function internal() {
        const interVar = "I'm an internal variable!";
        console.log(interVar);
        console.log(exterVar);
    }
    return internal;
}
const internalFn = external();
console.log(internalFn);
internalFn();

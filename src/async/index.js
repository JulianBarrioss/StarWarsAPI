const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error')) 
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () => {
    try {
        const somenthing = await doSomethingAsync();
        console.log(somenthing)
    } catch (error) {
        console.error(error);
    }
}

console.log('Before2');
anotherFunction();
console.log('After2');

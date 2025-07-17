//-------------- Nr.1 --------------//

function taskOne(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task One Completed"), 1000);
    });
}

function taskTwo(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task Two Completed"), 1500);
    });
}

function taskThree(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task Three Completed"), 500);
    });
}

async function runSequentialTasks(): Promise<void> {
    const result1 = await taskOne();
    console.log(result1);

    const result2 = await taskTwo();
    console.log(result2);

    const result3 = await taskThree();
    console.log(result3);
}

runSequentialTasks();


//-------------- Nr.2 --------------//

function asyncToUpperCase(str: string): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(str.toUpperCase());
        }, Math.random() * 1000);
    });
}

async function processStrings(strings: string[]): Promise<void> {
    const promises: Promise<string>[] = strings.map(s => asyncToUpperCase(s));
    const results: string[] = await Promise.all(promises);
    console.log("Processed Strings:", results);
}

processStrings(["hello", "typescript", "async", "parallel"]);


//-------------- Nr.3 --------------//

function promiseA(): Promise<string> {
    return Promise.resolve("A resolved");
}

function promiseB(): Promise<string> {
    return Promise.reject("B failed");
}

function promiseC(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("C resolved"), 1000);
    });
}

async function runWithErrorHandling(): Promise<void> {
    try {
        const results = await Promise.all([promiseA(), promiseB(), promiseC()]);
        console.log("All results:", results);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

runWithErrorHandling();


//-------------- Nr.4 --------------//

function delayedValue(ms: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Resolved after ${ms}ms`), ms);
    });
}

async function processDelays(values: number[]): Promise<void> {
    const promises: Promise<string>[] = values.map(value => delayedValue(value));
    const results: string[] = await Promise.all(promises);
    console.log("All delays completed:", results);
}

processDelays([300, 1200, 700, 1000]);

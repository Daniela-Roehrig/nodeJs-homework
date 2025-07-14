export function generateFibonacci(limit: number): number[] {
    const result: number[] = [];

    function helper(a: number, b: number): void {
        if (a > limit) return;
        result.push(a);
        helper(b, a + b);
    }

    helper(0, 1);
    return result;
}


export function generatePrimeNumbers(limit: number): number[] {
    const primes: number[] = [];

    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let divisor = 2; divisor * divisor <= num; divisor++) {
            if (num % divisor === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }

    return primes;
}


import { PrimeService } from './prime.service';
export declare class PrimeController {
    private readonly primeService;
    constructor(primeService: PrimeService);
    checkPrime(number: string): {
        message: string;
        number?: undefined;
        isPrime?: undefined;
    } | {
        number: number;
        isPrime: boolean;
        message?: undefined;
    };
}

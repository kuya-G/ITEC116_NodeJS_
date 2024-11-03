import { Controller, Get, Query } from '@nestjs/common';
import { PrimeService } from './prime.service';

@Controller('prime')
export class PrimeController {
  constructor(private readonly primeService: PrimeService) {}

  @Get('check')
  checkPrime(@Query('number') number: string) {
    const num = parseInt(number, 10);

    if (isNaN(num)) {
      return { message: 'Please provide a valid number' };
    }

    const isPrime = this.primeService.isPrime(num);
    return { number: num, isPrime };
  }
}
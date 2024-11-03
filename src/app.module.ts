import { Module } from '@nestjs/common';
import { PrimeModule } from './prime/prime.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimeService } from './prime/prime.service';
import { PrimeController } from './prime/prime.controller';

@Module({
  imports: [PrimeModule],
  controllers: [AppController, PrimeController],
  providers: [AppService, PrimeService],
})
export class AppModule {}

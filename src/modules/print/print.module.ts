import { Module } from '@nestjs/common';
import { PrintService } from './print.service';
import { PrintController } from './print.controller';
import { HttpModule } from '@nestjs/axios';
import { PrintingListener } from './printing.listener';

@Module({
  imports: [
    HttpModule.register({
      timeout: 3000,
      maxRedirects: 0,
    })
  ],
  controllers: [PrintController],
  providers: [PrintService, PrintingListener],
})

export class PrintModule {}

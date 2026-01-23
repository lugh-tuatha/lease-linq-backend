import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrintService } from './print.service';
import { PrintExitReceiptDTO } from './dto/print.dto';

@Controller('print')
export class PrintController {
  constructor(private readonly printService: PrintService) { }

  @Get('hello')
  async printHelloWorld() {
    return this.printService.printHelloWorld();
  }

  @Post('entry-ticket')
  async printEntryTicket(
    @Body() printEntryTicketDTO: any
  ) {
    return this.printService.printEntryTicket(printEntryTicketDTO);
  }

  @Post('exit-receipt')
  async printExitReceipt(
    @Body() printExitReceiptDTO: PrintExitReceiptDTO
  ) {
    return this.printService.printExitReceipt(printExitReceiptDTO);
  }

  @Get('health')
  async printHealth() {
    return { status: 'health', timestamp: new Date().toISOString() };
  }
}
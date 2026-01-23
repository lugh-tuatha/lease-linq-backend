import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrintService {
  private readonly printerBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.printerBaseUrl = this.configService.get<string>('printer.baseUrl')!;
    console.log('🖨️  Printer Base URL:', this.printerBaseUrl);
  }
  
  async printHelloWorld() {
    const res = await firstValueFrom(this.httpService.get(`${this.printerBaseUrl}/hello`));

    return res.data;
  }

  async printEntryTicket(printEntryTicketDTO: any) {
    const res = await firstValueFrom(this.httpService.post(`${this.printerBaseUrl}/entry-ticket`, printEntryTicketDTO));

    return res.data;
  }

  async printExitReceipt(printExitReceiptDTO: any) {
    const res = await firstValueFrom(this.httpService.post(`${this.printerBaseUrl}/receipt`, printExitReceiptDTO));

    return res.data;
  }
}

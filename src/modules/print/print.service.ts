import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PrintService {
  constructor(private readonly httpService: HttpService) {}

  readonly PRINTER_BASE_URL = 'http://192.168.5.73:8080/print';
  
  async printHelloWorld() {
    const res = await firstValueFrom(this.httpService.get(`${this.PRINTER_BASE_URL}/hello`));

    return res.data;
  }

  async printEntryTicket(printEntryTicketDTO: any) {
    const res = await firstValueFrom(this.httpService.post(`${this.PRINTER_BASE_URL}/entry-ticket`, printEntryTicketDTO));

    return res.data;
  }

  async printExitReceipt(printExitReceiptDTO: any) {
    const res = await firstValueFrom(this.httpService.post(`${this.PRINTER_BASE_URL}/receipt`, printExitReceiptDTO));

    return res.data;
  }
}

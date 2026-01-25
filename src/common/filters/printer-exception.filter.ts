import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import { AxiosError } from 'axios';

@Catch(AxiosError)
export class PrinterExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('PrinterService');

  catch(exception: AxiosError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status =
      exception.code === 'ECONNREFUSED' ||
      exception.code === 'ETIMEDOUT'
        ? HttpStatus.SERVICE_UNAVAILABLE
        : HttpStatus.BAD_GATEWAY;

    this.logger.warn(
      `Printer unavailable (${exception.code ?? 'unknown'})`,
    );

    response.status(status).json({
      message: 'Printer service is currently unavailable',
    });
  }
}

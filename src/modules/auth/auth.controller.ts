import { Body, Controller, Get, HttpCode, HttpStatus, NotImplementedException, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDTO) {
    return this.authService.authenticate(loginDto);
  }

  @UseGuards(AuthGuard)
  @Get('guard')
  guard() {
    throw new NotImplementedException();
  }
}

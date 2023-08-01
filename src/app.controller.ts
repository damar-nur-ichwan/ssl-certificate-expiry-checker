import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger'; // Import the necessary decorators

import {
  GetSSLCertificateRequestDto,
  GetSSLCertificateResponseDto,
} from './app.dto';

@Controller('ssl-certificate')
@ApiTags('SSL Certificate') // Add a tag for the controller
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('expiry')
  @ApiBody({ type: GetSSLCertificateRequestDto }) // Define the request body DTO
  @ApiResponse({ status: 200, type: GetSSLCertificateResponseDto }) // Define the response DTO for success
  @ApiResponse({ status: 400, description: 'Bad Request' }) // Define the response for bad requests
  @ApiResponse({ status: 500, description: 'Internal Server Error' }) // Define the response for internal server errors
  async getSSLCertificate(
    @Body() body: GetSSLCertificateRequestDto,
  ): Promise<GetSSLCertificateResponseDto> {
    const { url } = body;
    try {
      const certificate = await this.appService.getSSLCertificate(url);
      if (!certificate.valid_to) {
        throw new Error('Invalid SSL certificate');
      }

      const expiryDate = this.appService.calculateExpiryDate(
        certificate.valid_to,
      );

      return {
        message: `SSL certificate retrieved successfully`,
        url,
        ...expiryDate,
      };
    } catch (err) {
      return {
        message: `Error fetching SSL certificate: ${err.message}`,
      };
    }
  }
}

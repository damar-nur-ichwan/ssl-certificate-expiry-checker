import { ApiProperty } from '@nestjs/swagger';

export class GetSSLCertificateRequestDto {
  @ApiProperty({
    description: 'The URL to get the SSL certificate for',
    example: 'example.com',
  })
  url: string;
}

export class GetSSLCertificateResponseDto {
  @ApiProperty({
    description: 'The success message',
    example: 'SSL certificate retrieved successfully',
  })
  message: string;

  @ApiProperty({
    description: 'The URL',
    example: 'example.com',
  })
  url?: string;

  @ApiProperty({
    description: 'The SSL certificate expiry date',
    example: new Date(),
  })
  expiryDate?: Date;

  @ApiProperty({
    description: 'The difference in days between expiry date and current date',
    example: 7, // Replace with the actual number of days
  })
  differenceInDays?: number;
}

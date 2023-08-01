import { Injectable } from '@nestjs/common';
import * as tls from 'tls';

@Injectable()
export class AppService {
  async getSSLCertificate(hostname: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const options = {
        rejectUnauthorized: false,
      };

      const socket = tls.connect(443, hostname, options, () => {
        const certificate = socket.getPeerCertificate();
        socket.end();
        resolve(certificate);
      });

      socket.on('error', (err) => {
        reject(err);
      });
    });
  }

  calculateExpiryDate(valid_to: Date) {
    const expiryDate = new Date(valid_to);
    const currentDate = new Date();
    const differenceInMs = expiryDate.getTime() - currentDate.getTime();
    const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
    return { expiryDate, differenceInDays };
  }
}

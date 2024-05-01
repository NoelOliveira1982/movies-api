import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { StudioModule } from './studio/studio.module';
import { GenreModule } from './genre/genre.module';
import { PrismaService } from './database/prisma.service';
import { UserModule } from './user/user.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import { TypeDocumentModule } from './type-document/type-document.module';
import { MethodPaymentModule } from './method-payment/method-payment.module';
import { PaymentModule } from './payment/payment.module';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [
    MovieModule,
    StudioModule,
    GenreModule,
    UserModule,
    EnterpriseModule,
    TypeDocumentModule,
    MethodPaymentModule,
    PaymentModule,
    CurrencyModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

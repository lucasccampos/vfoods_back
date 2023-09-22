import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { ColaboratorModule } from './colaborator/colaborator.module';
import { IndicatorModule } from './indicator/indicator.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    DatabaseModule,
    UsersModule,
    ColaboratorModule,
    IndicatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

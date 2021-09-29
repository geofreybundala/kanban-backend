import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';

@Module({
  imports: [
            ConfigModule.forRoot(),
            MongooseModule.forRoot(process.env.MONGO_URL),
            ListModule
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CafeModule } from './cafe/cafe.module';
import { MenuModule } from './menu/men.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cafe',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    CafeModule,
    MenuModule,
  ],
})
export class AppModule {}

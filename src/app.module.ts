import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://adm123:adm123@clusterapiprodutosfarma.jxecl.mongodb.net/test'),
  ProdutosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

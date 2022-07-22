import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProdutoDocument = Produto & Document;

@Schema()
export class Produto {
  @Prop()
  ean: string;

  @Prop()
  nome: string;

  @Prop()
  tipoMedicamento: string;

}

export const ProdutoSchema = SchemaFactory.createForClass(Produto);

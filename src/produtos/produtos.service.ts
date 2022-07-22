import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto, ProdutoDocument } from './entities/produto.entity';

@Injectable()
export class ProdutosService {

  constructor(@InjectModel(Produto.name) private ProdutoModel: Model<ProdutoDocument>) {}

  create(createProdutoDto: CreateProdutoDto) {
    const produto = new this.ProdutoModel(createProdutoDto);
    return produto.save();
  }

  findAll() {
    return this.ProdutoModel.find();
  }

  findOne(id: string) {
    return this.ProdutoModel.findById(id);
  }

  update(id: string, updateProdutoDto: UpdateProdutoDto) {
    return this.ProdutoModel.findByIdAndUpdate({
      _id:id,
    },
    {
      updateProdutoDto,
    },
    {
      new:true,
    },
    );
  }

  remove(id: string) {
    return this.ProdutoModel.deleteOne({
      _id:id,
    })
    .exec();
  }
}

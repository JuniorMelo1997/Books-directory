import { bookModel } from "../models/bookModel";
import {Request, Response} from "express";

export class BookController{
    async create(req: Request, res: Response){
        const {name, author, description, year} = req.body;
        const bookAlreadyExists = await bookModel.findOne({where:{name: name}});


        if(!bookAlreadyExists){
            const book = await bookModel.create({name, author, description, year});
            return res.status(200).json(book);
        }

        return res.status(422).json({message: "The book already exists in the database"});
    }

    async getOne(){

    }

    async getAll(){

    }

    async update(){

    }

    async destroy(){

    }
}
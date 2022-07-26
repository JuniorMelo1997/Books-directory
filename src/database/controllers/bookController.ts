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

    async getOne(req: Request, res: Response){
        const id = req.headers.id

        const book = await bookModel.findOne({where: {id: id}});

        if(!book){
            return res.status(404).json({message: "book not found"});
        }

        return res.status(200).json(book);
    }

    async getAll(req: Request, res: Response){
        const books = await bookModel.findAll();

        if(books.length == 0){
            return res.status(404).json({message: "There's no book in the database"});
        }
        return res.status(200).json(books);
    }

    async update(){

    }

    async destroy(){

    }
}
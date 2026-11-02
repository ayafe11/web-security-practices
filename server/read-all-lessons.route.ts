
import {Request, Response} from "express";
import {db} from "./database";

export function readAllComments(req: Request, res: Response) {
    return res.status(200).json(db.readAllComments());
}

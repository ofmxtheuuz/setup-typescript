import express, { Request, Response } from "express"

export function index(req: Request, res: Response) {
    res.send("index route")
}
import express from "express";
import cors from "cors";
import BOOKS from "./books.js";


const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/books", (req, res) => 
{
    res.json(BOOKS)
})

app.get("/api/books/:id", (req, res) => {
    const {id} = req.params;

    const neededBook = BOOKS.find(book => book.ID === id)
    if(neededBook){
        res.json(neededBook)
    }else{
        res.status(404).send("Sorry I don't have that book, please choose a different one.")
    }
})


app.listen(PORT, () => console.log("server running on PORT 5000")) 
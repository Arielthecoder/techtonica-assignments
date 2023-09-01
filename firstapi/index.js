import express from "express";
import cors from "cors";
import BOOKS from "./books.js";
import path from "path"


const app = express();
const PORT = 5000;

app.use(cors());

const _dirname = path.resolve();

app.get('/', (req, res) => {
    console.log('home page');
    res.send("Hi I'm Ari.");
})
app.get("/books", (req, res) => 
{   console.log(BOOKS)
    res.json(BOOKS)
})

app.get("/books/:id", (req, res) => {
    const {id} = req.params;

    const neededBook = BOOKS.find(book => book.ID === id)
    if(neededBook){
        res.json(neededBook)
    }else{
        res.status(404).send("Sorry I don't have that book, please choose a different one.")
    }
})

app.post("/books/posts", (req, res) => {
    const newBook = {
        ID: "8",
        title: "Diary of a Wimpy Kid",
        author: "Jeff Kinney",
        format: "Hardcover"
    };
    BOOKS.push(newBook);
    res.status(200).json({ message: "You've added a new book!", book: newBook});
})
app.delete("/books/:id", (req, res) => {
    const {id} = req.params;

    const bookIndex = BOOKS.findIndex(book => book.ID === id)
    if(bookIndex !== -1){
        BOOKS.splice(bookIndex,1)
        res.status(200).json({ message: "You've deleted the book!"});
    }else{
        res.status(404).send(`The book does not exist.`)
    }
})
app.listen(PORT, () => console.log("server running on PORT 5000")) 
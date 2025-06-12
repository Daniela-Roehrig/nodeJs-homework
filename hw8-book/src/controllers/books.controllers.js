import * as booksService from "../services/books.service.js"

export const getBooksController = async (req, res)=>{
    const result = await booksService.getBooks();
    res.json(result);
};

export const addBookController = async (req, res) =>{
    const result = await booksService.addBook(req.body);
    res.status(201).json(result);
};

export const updateBookController = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await booksService.updateBook(id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


export const destroyBookController = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await booksService.destroyBook(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

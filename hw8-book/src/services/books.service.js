import Book from "../db/Book.js";

export const getBooks = () => Book.findAll();

export const addBook = payload => Book.create(payload); 

export const updateBook = async (id, payload) => {
    const [updatedRows] = await Book.update(payload, { where: { id } });
    if (updatedRows === 0) {
        throw new Error("book not found or not update");
    }
    return { message: "book update" };
};

export const destroyBook = async (id) => {
    const deletedRows = await Book.destroy({ where: { id } });
    if (deletedRows === 0) {
        throw new Error("book not found");
    }
    return { message: "book successfully delete" };
};

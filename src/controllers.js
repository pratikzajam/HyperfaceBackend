import library from "./db.js";


export let getAllBooks = (req, res) => {
    try {
        if (library.books.length == 0) {
            return res.status(404).json({
                status: false,
                message: "No Books Found",
                data: null
            })
        }


        return res.status(200).json({
            status: false,
            message: "Books fetched sucessfully",
            data: library.books
        })

    } catch (error) {
        return res.status(200).json({
            status: false,
            message: error.message,
            data: null
        })
    }


}



export let addBooks = (req, res) => {
    try {
        const { Title, Author, Genre, Status = "To Read" } = req.body

        if (!Title || !Author || !Genre) {
            return res.status(404).json({
                status: false,
                message: "All Fields Are Required",
                data: null
            })
        }

        let newBook = { id: library.books.length + 1, Title: Title, Author: Author, Genre: Genre, Status: Status }

        library.books = [...library.books, newBook]


        return res.status(200).json({
            status: false,
            message: "Book added sucessfully",
            data: library.books
        })


    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            data: null
        })
    }
}


export let removeBook = (req, res) => {
    try {

        const { bookId } = req.params;

        if (!bookId) {
            return res.status(404).json({
                status: false,
                message: "Book Id Is Required",
                data: null
            })
        }

        let updatedBooks = library.books.filter((book) => book.id != bookId)

        library.books = updatedBooks


        return res.status(200).json({
            status: false,
            message: "Book deleted Sucessfully",
            data: library.books
        })


    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            data: null
        })
    }


}


export let updateBookStatus = (req, res) => {
    try {

        const { bookId } = req.params;
        const { status } = req.body;

        if (!bookId) {
            return res.status(404).json({
                status: false,
                message: "Book Id Is Required",
                data: null
            })
        }

        let updatedBooks = library.books.map((book) => (book.id == bookId) ? { ...book, status: status } : { ...book });


        library.books = updatedBooks


        return res.status(200).json({
            status: false,
            message: "Book staus updated  Sucessfully",
            data: library.books
        })


    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message,
            data: null
        })
    }


}



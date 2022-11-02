import { BookRequest } from "@BE/BOOKS/requests";
import { BOOKS_ISBN_ITEM, BOOKS_ISBN_LIST_ITEM, WRONG_BOOKS_ISBN_ITEM, WRONG_BOOKS_ISBN_LIST_ITEM } from "@BE/BOOKS/requests/books-data";

const apiAddBook = `${Cypress.config("baseUrl")}/BookStore/v1/Books`;
const apiDeleteBook = `${Cypress.config("baseUrl")}/BookStore/v1/Book`;

export function bookApiTests() {
    let header: string = "";
    before(() => {
        let userName = `${Cypress.env('userName')}`;
        let password = `${Cypress.env('password')}`;
        let token = Buffer.from(`${userName}:${password}`).toString("base64")
        header = `Basic ${token}`;
        Cypress.env('basicAuth', header);
    });

    it("adds a new book", function () {

        new BookRequest().addBook(BOOKS_ISBN_LIST_ITEM).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.books[0].isbn).to.contain('9781449337711');
        });
    });

    it("adds a new book with error", function () {
        new BookRequest().addBookWithError(WRONG_BOOKS_ISBN_LIST_ITEM).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.contain("ISBN supplied is not available in Books Collection!");
        });
    });

    it('delete a book', () => {

        new BookRequest().deleteBook(BOOKS_ISBN_ITEM).then((response) => {
        expect(response.status).to.eq(204)
    });
    })

    it('delete a book with error', () => {

        new BookRequest().deleteBookWithError(WRONG_BOOKS_ISBN_ITEM).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.contain("ISBN supplied is not available in User's Collection!");
    });
    })
}
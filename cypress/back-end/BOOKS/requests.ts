import { RequestBuilder } from "@support/helpers/request-builder";
import { ISBNListRequest, ISBNRequest } from "@BE/BOOKS/models/book-list";

export class BookRequest {
    private readonly url = `${Cypress.config("baseUrl")}/BookStore/v1/`;

    public addBook(books: ISBNListRequest) {
        return new RequestBuilder()
        .to(`${this.url}Books`)
        .withHeaders({authorization: Cypress.env('basicAuth')})
        .withBody(books)
        .post();
    }

    public addBookWithError(books: ISBNListRequest) {
        return new RequestBuilder()
        .to(`${this.url}Books`)
        .withError()
        .withHeaders({authorization: Cypress.env('basicAuth')})
        .withBody(books)
        .post();
    }

    public deleteBook(book: ISBNRequest) {
        return new RequestBuilder()
        .to(`${this.url}Book`)
        .withHeaders({authorization: Cypress.env('basicAuth')})
        .withBody(book)
        .delete();
    }

    public deleteBookWithError(book: ISBNRequest) {
        return new RequestBuilder()
        .to(`${this.url}Book`)
        .withError()
        .withHeaders({authorization: Cypress.env('basicAuth')})
        .withBody(book)
        .delete();
    }
}
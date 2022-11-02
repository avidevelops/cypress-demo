import { ISBNListRequest, ISBNRequest } from "@BE/BOOKS/models/book-list";

export const BOOKS_ISBN_LIST_ITEM: ISBNListRequest = {
    userId: `${Cypress.env('userID')}`,
    collectionOfIsbns: [
        {
        isbn: "9781449337711"
        }
    ]
}

export const WRONG_BOOKS_ISBN_LIST_ITEM: ISBNListRequest = {
    userId: `${Cypress.env('userID')}`,
    collectionOfIsbns: [
        {
        isbn: "1"
        }
    ]
}

export const BOOKS_ISBN_ITEM: ISBNRequest = {
    userId: `${Cypress.env('userID')}`,
    isbn: "9781449337711"
}

export const WRONG_BOOKS_ISBN_ITEM: ISBNRequest = {
    userId: `${Cypress.env('userID')}`,
    isbn: "9781449337711234"
}
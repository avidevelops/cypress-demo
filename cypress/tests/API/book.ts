import { faker } from "@faker-js/faker";

const apiAddBook = `${Cypress.config("baseUrl")}/BookStore/v1/Books`;
const apiDeleteBook = `${Cypress.config("baseUrl")}/BookStore/v1/Book`;

export function bookApiTests() {
    let header: string = "";
    before(() => {
        let userName = `${Cypress.env('userName')}`;
        let password = `${Cypress.env('password')}`;
        let token = Buffer.from(`${userName}:${password}`).toString("base64")
        header = `Basic ${token}`; 
    });

    it("adds a new book", function () {

        cy.request({method: "POST", 
        url: `${apiAddBook}`, 
        headers: {
            authorization: `${header}`
        },
        body: {
        userId: `${Cypress.env('userID')}`,
        collectionOfIsbns: [
            {
            isbn: "9781449337711"
            }
        ]
        },
    }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.books[0].isbn).to.contain('9781449337711');
        });
    });

    it("adds a new book with error", function () {
        const isbn = faker.random.alphaNumeric;

        cy.request({method: "POST", 
        url: `${apiAddBook}`, 
        failOnStatusCode: false,
        headers: {
            authorization: `${header}`
        },
        body: {
        userId: `${Cypress.env('userID')}`,
        collectionOfIsbns: [
            {
            isbn: "1"
            }
        ]
        },
    }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.contain("ISBN supplied is not available in Books Collection!");
        });
    });

    it('delete a book', () => {

        cy.request({method: "DELETE", 
        url: `${apiDeleteBook}`, 
        headers: {
            authorization: `${header}`
        },
        body: {
            userId: `${Cypress.env('userID')}`,
            isbn: "9781449337711"
        }
    }).then((response) => {
        expect(response.status).to.eq(204)
    });
    })

    it('delete a book with error', () => {

        cy.request({method: "DELETE", 
        url: `${apiDeleteBook}`, 
        failOnStatusCode: false,
        headers: {
            authorization: `${header}`
        },
        body: {
            userId: `${Cypress.env('userID')}`,
            isbn: "9781449337711234"
        }
    }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.contain("ISBN supplied is not available in User's Collection!");
    });
    })
}
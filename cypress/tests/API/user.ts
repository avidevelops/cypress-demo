import { faker } from "@faker-js/faker";

const apiUsers = `${Cypress.config("baseUrl")}/Account/v1/User`;
export function userApiTests() {

    it("creates a new user", function () {
        const userName = faker.name.firstName();

        cy.request("POST", `${apiUsers}`, {
        userName: `${userName}`,
        password: `${Cypress.env('password')}`,
        }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.username).to.contain(`${userName}`);
        });
    });

    it("error when invalid field sent", function () {
        cy.request({
        method: "POST",
        url: `${apiUsers}`,
        failOnStatusCode: false,
        body: {
            userName: "",
            password: `${Cypress.env('password')}`,
        },
        }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body.message).to.eq("UserName and Password required.");
        });
    });
}
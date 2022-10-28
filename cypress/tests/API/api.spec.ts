import { bookApiTests } from "./book";
import { userApiTests } from "./user";


context('API tests', () => {
    context('User API', userApiTests);
    context('book API', bookApiTests);
});
import "./commands/assertion";
import "./commands/element-selectors";

import { WebTables } from "./pages/elements/web-tables/web-tables";

Cypress.Commands.add('findRowContainingFirstName', (firstName) => {
    return new WebTables().rows.filter(`:contains(${firstName})`)
})

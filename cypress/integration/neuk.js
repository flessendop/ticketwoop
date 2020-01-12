require('cypress-plugin-retries');

let eventName = Cypress.env('fuckID');

let cookiestring = Cypress.env('myCookieString')


describe('TicketSwoopDieWoop', function() {
  it('Neuk page', function() {
    cy.visit("https://www.ticketswap.nl/" + eventName);
    let cookieByProp = cookiestring.split(';');

    cookieByProp.forEach(i => {
      let name = i.split('=')[0];
      let value = i.split('=')[1];
      console.log(name, value);

      cy.setCookie(name.trim(), value.trim());
    });
    cy.get("#tickets .css-jub5o6 a").first().click();
    cy.wait(1000);
    cookieByProp = cookiestring.split(';');

    cookieByProp.forEach(i => {
      let name = i.split('=')[0];
      let value = i.split('=')[1];
      console.log(name, value);

      cy.setCookie(name.trim(), value.trim());
    });
    console.log();

    if (cy.get('button').contains('Koop een ticket')) {
      cy.get('button').contains('Koop een ticket').click();
    } else {

    }
  });
});

/// <reference types="cypress" />

describe("Login with Random UnRegistered User", () => {
  it("visit Landing page", () => {
    window.cy.visit("http://localhost:3000/");
    window.cy.wait(2000);
  });

  it("Invalid Credentials test", () => {
    window.cy.get(".navbar");
    window.cy.wait(3000);

    window.cy.get('[href="/login"] > .LandingPage_landbtn__wUL-a').click();

    window.cy
      .get('[type="text"]')

      .type("ksd@gmail.com");
    window.cy.wait(2000);
    window.cy
      .get('[type="password"]')

      .type("123456");

    window.cy.wait(2000);

    window.cy
      .get(
        '[style="margin-top: 10px; margin-bottom: 10px; border-radius: 45px;"] > h4'
      )
      .click();

    window.cy.wait(3000);
  });
});

describe("Login with Registered User", () => {
  it("visit landing page", () => {
    window.cy.visit("http://localhost:3000/");
  });

  it("Login Success", () => {
    window.cy.get(".navbar");
    window.cy.wait(4000);

    window.cy
      .get('[href="/login"] > .LandingPage_landbtn__wUL-a')

      .click();

    window.cy.wait(2200);

    window.cy.get('[type="text"]').type("l@gmail.com");

    window.cy.wait(2000);

    window.cy.get('[type="password"]').type("0987654321");
    window.cy.wait(2000);

    window.cy
      .get(
        '[style="margin-top: 10px; margin-bottom: 10px; border-radius: 45px;"] > h4'
      )
      .click();

    window.cy.wait(4000);

    window.cy.get("#bg-nested-dropdown").click();

    window.cy.wait(4000);

    window.cy.get("h6").click();
  });
});

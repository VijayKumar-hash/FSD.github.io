/// <reference types="cypress" />

describe("FavoriteServices", () => {
  it("Login User", () => {
    window.cy.visit("http://localhost:3000/");
    window.cy.wait(2000);
    window.cy.get('[href="/login"] > .LandingPage_landbtn__wUL-a').click();
    window.cy.wait(3000);
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
  });



  it('Add to Favorite',()=>{

    window.cy.get(':nth-child(2) > tr > .table-warning > .ripple').click();
    window.cy.wait(5000);

    window.cy.get(':nth-child(5) > tr > .table-warning > .ripple').click();
    window.cy.wait(5000);

    window.cy.get(':nth-child(4) > tr > .table-warning > .ripple').click();
    window.cy.wait(5000);

    window.cy.get(':nth-child(7) > tr > .table-warning > .ripple').click();
    window.cy.wait(5000);
  });

  it('View Favorite',()=>{
    window.cy.get('[href="/favorite"] > h4').click();
    window.cy.wait(3000);
  });

  it('Delete favorite',()=>{
    window.cy.get(':nth-child(2) > tr > .table-warning > .ripple').click();
    window.cy.wait(4000);
    window.cy.get(':nth-child(2) > tr > .table-warning > .ripple').click();
    window.cy.wait(4000);
    window.cy.get(':nth-child(2) > tr > .table-warning > .ripple').click();
    window.cy.wait(4000);
    window.cy.get(':nth-child(2) > tr > .table-warning > .ripple').click();
    window.cy.wait(4000);
  });

  it('Back to Homepage',()=>{
    window.cy.get('[href="/dashboard"] > h4').click();
    window.cy.wait(2000);
  });

  it('LogOut the User',()=>{
    
    window.cy.get("#bg-nested-dropdown").click();

    window.cy.wait(4000);
    window.cy.get("h6").click();
  })



});

/// <reference types="cypress" />
describe('Registration Success',()=>{
    it('Visit Landing page',()=>{
        window.cy.visit("http://localhost:3000/");
        window.cy.wait(2000);
    });
    it('Registration success test',()=>{
        window.cy.get('[href="/register"] > h4').click();
        window.cy.wait(2000);
        window.cy.get('[name="userid"]').type('vdasf');
        window.cy.wait(4000);
        window.cy.get('[name="username"]').type('vijay Das');
        window.cy.wait(4000);
        window.cy.get('[type="email"]').type('vdkh@gmail.com');
        window.cy.wait(4300);
        window.cy.get('[type="password"]').type('4934984934');
        window.cy.wait(3000);
        window.cy.get('.Form_btn1__dXRkC').click();
        window.cy.wait(1200);

        
    })
});

describe('Registration  Failed',()=>{
    it('Visit Landing page',()=>{
        window.cy.visit("http://localhost:3000/");
        window.cy.wait(2000);
    });
    it('Registration success test',()=>{
        window.cy.get('[href="/register"] > h4').click();
        window.cy.wait(2000);
        window.cy.get('[name="userid"]').type('vdasf');
        window.cy.wait(4000);
        window.cy.get('[name="username"]').type('vijay Das')
        window.cy.wait(4000);
        window.cy.get('[type="email"]').type('vdkh@gmail.com');
        window.cy.wait(4300);
        window.cy.get('[type="password"]').type('4934984934');
        window.cy.wait(3000);
        window.cy.get('.Form_btn1__dXRkC').click();
        window.cy.wait(1200);

        
    })
});
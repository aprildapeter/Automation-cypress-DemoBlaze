describe("Demoblaze Landingpage", () => {

    it("Visit Demoblaze Landingpage", () => {
        cy.visit("https://www.demoblaze.com/index.html");
        cy.title().should("eq","STORE");
    });

    it("Sidebar Phone", () => {
        const buttonPhone = cy.get('#contcont > :nth-child(1) > .col-lg-3');
        buttonPhone.click(50,80);
    });

    it("Sidebar Laptop", () => {
        const buttonLaptop = cy.get('#contcont > :nth-child(1) > .col-lg-3');
        buttonLaptop.click(50,160);
    });

    it("Sidebar Monitor", () => {
        const buttonMonitor = cy.get('#contcont > :nth-child(1) > .col-lg-3');
        buttonMonitor.click(50,200);
    });

    it("Header Home", () => {
        const buttonHome = cy.get('.active > .nav-link');
        buttonHome.click();
        cy.url().should("eq", "https://www.demoblaze.com/index.html");
    });

    it("Header Contact", () => {
        const buttonContact = cy.get(':nth-child(2) > .nav-link');
        const buttonCloseContact = cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-header > .close > span');
        buttonContact.click();
        buttonCloseContact.click();
    });

    it("Header About", () => {
        const buttonAbout = cy.get(':nth-child(3) > .nav-link');
        const buttonCloseAbout = cy.get('#videoModal > .modal-dialog > .modal-content > .modal-header > .close > span');
        buttonAbout.click();
        buttonCloseAbout.click();
    });

    it("Header Login", () => {
        const buttonLogin = cy.get('#login2');
        const buttonCloseLogin = cy.get('#logInModal > .modal-dialog > .modal-content > .modal-header > .close > span');
        buttonLogin.click();
        buttonCloseLogin.click();
    });

    it("Header Signin", () => {
        const buttonSignin = cy.get('#signin2');
        const buttonCloseSignin = cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span');
        buttonSignin.click();
        buttonCloseSignin.click();
    });

    it("Header Cart", () => {
        const buttonCart = cy.get('#cartur');
        buttonCart.click();
        cy.url().should("eq", "https://www.demoblaze.com/cart.html");
    });
});
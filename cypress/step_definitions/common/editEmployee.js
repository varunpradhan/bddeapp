

class editEmployee {
    benefitEmp(index) {
        cy.intercept({
            method: "GET",
            url: `**/Benefit/Details/${index}`,
        }).as('empBenefit');

        cy.get(`[href="/Benefit/Details/${index}"]`).click()

        cy.wait('@empBenefit').then(({ response }) => {
            expect(response.statusCode).to.equal(200);
        })
    }

}

export default editEmployee
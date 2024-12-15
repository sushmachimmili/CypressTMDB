describe('End to End TMDB Test', function(){

    it('Login', function(){

       const movieName = 'Venom: The Last Dance'
       cy.visit('https://www.themoviedb.org/')
       cy.get('#onetrust-accept-btn-handler').click()
       cy.contains('Login').click()
       cy.get('#username').type('Sushmacha')
       cy.get('#password').type('qCCyg$8g7pshb@G')
       cy.get('#login_button').click()
       cy.get('.logo > img').click()
       cy.get('.anchor.selected').should('be.visible')
       cy.get('.card.style_1').should('have.length',43)
       cy.get('.card.style_1').filter(`:contains("${movieName}")`)
       .then($element=>{
          cy.wrap($element).should('have.length',1)
          cy.wrap($element).contains('Venom: The Last Dance').click()
       })
       cy.wait(5000)
       cy.get('.logo > img').click()
       cy.get('#trending_scroller').scrollIntoView()
       cy.wait(5000)
       const trailerName = 'Shangri-La Frontier'
       cy.get('.background').should('be.visible')
       cy.get('#trailer_scroller > .content_wrapper > .column > .column_content').should('have.length',1)
       cy.get('a[href="/tv/205050"]').filter(`:contains("${trailerName}")`)
       .then($element=>{
        cy.wrap($element).should('have.length',1)
        cy.wrap($element).contains('Shangri-La Frontier').click()
        cy.get('.video > .no_click').click()
        cy.wait(5000)
        cy.get('.k-icon.k-svg-icon.k-svg-i-x.k-button-icon').eq(2).click()


       })
    })
})
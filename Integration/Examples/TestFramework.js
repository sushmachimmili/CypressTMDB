

describe('End to End TMDB Test', function () {
    
    before(function(){

        cy.fixture('example').then(function(data)
        {
            this.data = data
        })


    })


    it('Login', function () {
       
        const movieName = this.data.movieName
        cy.visit('https://www.themoviedb.org/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.contains('Login').click()
        cy.get('#username').type(this.data.username)
        cy.get('#password').type(this.data.password)
        cy.get('#login_button').click()
        cy.get('.logo > img').click()

//         const movie_text = this.data.movie_text

//         cy.get('#inner_search_v4').type(movie_text)
//         cy.get('input[value="Search"]').click()
//         cy.get('.results.flex').eq(0).find('.card.v4.tight').children().should('have.length', 15)
//         cy.get('.logo > img').click()
//         cy.get('.anchor.selected').should('be.visible')
//         cy.get('.card.style_1').filter(`:contains("${movieName}")`)
//             .then($element => {
//                 cy.wrap($element).should('have.length', 1)
//                 cy.wrap($element).contains(movieName).click()
//             })
//         cy.wait(2000)
//         cy.get('.logo > img').click()
//         cy.get('#trending_scroller').scrollIntoView()
//         cy.wait(3000)
//         const trailerName = this.data.trailerName
//         cy.get('.background').should('be.visible')
//         cy.get('#trailer_scroller > .content_wrapper > .column > .column_content').should('have.length', 1)
//         cy.get('a[href="/tv/205050"]').filter(`:contains("${trailerName}")`)
//             .then($element => {
//                 cy.wrap($element).should('have.length', 1)
//                 cy.wrap($element).contains('Shangri-La Frontier').click()
//                 cy.get('.video > .no_click').click()
//             })
//         cy.wait(5000)
//         cy.get('.k-icon.k-svg-icon.k-svg-i-x.k-button-icon').eq(2).click()
//         cy.wait(2000)
//         const popularName = this.data.popularName
//         cy.scrollTo('top')
//         cy.get('.logo > img').click()
//         cy.get('#trending_scroller').scrollIntoView()
//         cy.wait(2000)


//         cy.contains("What's Popular").scrollIntoView()
//         cy.get("#popular_scroller").find('.card.style_1').eq(0).should('be.visible')
//         cy.get("#popular_scroller").filter(`:contains("${popularName}")`)
//             .then($element => {
//                 cy.wrap($element).should('have.length', 1)
//                 cy.wrap($element).contains('Inside Out 2').click()
//                 // cy.wait(2000)
//             })

//         const freeName = this.data.freeName
//         cy.get('.logo > img').click()
//         cy.contains("Free To Watch").scrollIntoView()
//         cy.get("#free_scroller").find('.card.style_1').eq(0).should('be.visible')
//         cy.get("#free_scroller").filter(`:contains("${freeName}")`)
//             .then($element => {
//                 cy.wrap($element).should('have.length', 1)
//                 cy.wrap($element).contains('The Shawshank Redemption').click()
//                 //cy.wait(3000)
                
//             })
//         cy.get('.logo > img').click()
//         cy.contains("Leaderboard").scrollIntoView()
//         // cy.wait(2000)
//         cy.get("ol[class='leaderboard'").find('li').should('have.length', 10)


    })


})
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('The user clicks on Login Button', function () {

    
        cy.visit('https://www.themoviedb.org/')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.contains('Login').click()
    

});

When('The user enters valid credentials "Sushmacha" and "pqCCyg$8g7pshb@G"', function(){

    cy.get('#username').type(this.data.username)
        cy.get('#password').type(this.data.password)
        cy.get('#login_button').click()
});

Then('The user should be redirected to the dashboard', function(){

    cy.get('#login_button').click()
        cy.get('.logo > img').click()

});

Given('The user clicks on search', function(){

    const movie_text = this.data.movie_text
    cy.get('#inner_search_v4').type(movie_text)
    
});

When('The user enters the name of the movie',function(){

    cy.get('input[value="Search"]').click()
 

});

Then('The user should see a list of movies with the search name',function(){

    cy.get('.results.flex').eq(0).find('.card.v4.tight').children().should('have.length', 15)
    cy.get('.logo > img').click()
});

Given('The user navigate to the trending movies section',function(){
    const movieName = this.data.movieName
    
        


});

When('The user clicks on a movie in the trending movies section',function(){

    cy.get('.anchor.selected').should('be.visible')
});

Then('The user should see the selected movie details',function(){
    cy.get('.card.style_1').filter(`:contains("${movieName}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1)
                cy.wrap($element).contains(movieName).click()
            })
        cy.wait(2000)
});

Given('The user navigate to the latest trailers section',function(){

    cy.wait(2000)
        cy.get('.logo > img').click()
        cy.get('#trending_scroller').scrollIntoView()
       
        

});

When('The user clicks on a trailer',function(){
    cy.wait(3000)
    const trailerName = this.data.trailerName
    cy.get('.background').should('be.visible')
    cy.get('#trailer_scroller > .content_wrapper > .column > .column_content').should('have.length', 1)

});

Then('The user should be able to watch the trailer',function(){
    cy.get('a[href="/tv/205050"]').filter(`:contains("${trailerName}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1)
                cy.wrap($element).contains('Shangri-La Frontier').click()
                cy.get('.video > .no_click').click()
            })
        cy.wait(5000)
        cy.get('.k-icon.k-svg-icon.k-svg-i-x.k-button-icon').eq(2).click()
   
});

Given('The user navigate to the Whats Popular section',function(){

    cy.wait(2000)
        const popularName = this.data.popularName
        cy.scrollTo('top')
        cy.get('.logo > img').click()
        cy.get('#trending_scroller').scrollIntoView()
        cy.wait(2000)

});
When('The user clicks on a movie in the Whats Popular section',function(){

    cy.contains("What's Popular").scrollIntoView()
        cy.get("#popular_scroller").find('.card.style_1').eq(0).should('be.visible')


});

Then('The user should see the selected movie details',function(){

    cy.get("#popular_scroller").filter(`:contains("${popularName}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1)
                cy.wrap($element).contains('Inside Out 2').click()
                // cy.wait(2000)
            })

});

Given('The user navigate to the Free to watch section',function(){
 
    const freeName = this.data.freeName
        cy.get('.logo > img').click()

});

When('The user clicks on a movie in the Free to watch section',function(){

    cy.contains("Free To Watch").scrollIntoView()
        cy.get("#free_scroller").find('.card.style_1').eq(0).should('be.visible')


});

Then('The user should see the selected movie details',function(){

    cy.get("#free_scroller").filter(`:contains("${freeName}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1)
                cy.wrap($element).contains('The Shawshank Redemption').click()
                //cy.wait(3000)
                
            })

});

Given('The user navigate to the LeaderBoard section',function(){


    cy.get('.logo > img').click()
});

When('The user tries to count the number of leaders displayed',function(){

    cy.contains("Leaderboard").scrollIntoView()
    // cy.wait(2000)

});

Then('The details of top 10 leaders should be dispalyed',function(){

    cy.get("ol[class='leaderboard'").find('li').should('have.length', 10)

});


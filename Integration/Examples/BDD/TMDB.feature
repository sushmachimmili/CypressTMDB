Feature: TMDB Website Automation

  Scenario: Login to TMDB
    Given The user clicks on Login Button
    When The user enters valid credentials "Sushmacha" and "pqCCyg$8g7pshb@G"
    Then The user  should be redirected to the dashboard

  Scenario: Search Movies
    Given The user clicks on search
    When The user enters the name of the movie
    Then The user should see a list of movies with the search name


  Scenario: View trending movies
    Given The user navigate to the trending movies section
    When The user clicks on a movie in the trending movies section
    Then The user should see the selected movie details

  Scenario: View the latest trailers
    Given The user navigate to the latest trailers section
    When The user clicks on a trailer
    Then The user should be able to watch the trailer

  Scenario: Whats Popular movies
    Given The user navigate to the Whats Popular section
    When The user clicks on a movie in the Whats Popular section
    Then The user should see the selected movie details

  Scenario: Free to watch movies
    Given The user navigate to the Free to watch section
    When The user clicks on a movie in the Free to watch section
    Then The user should see the selected movie details

  Scenario: LeaderBoard
    Given The user navigate to the LeaderBoard section
    When The user tries to count the number of leaders displayed
    Then The details of top 10 leaders should be dispalyed


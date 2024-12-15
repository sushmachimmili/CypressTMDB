Feature: TMDB Website Automation

Scenario: Login to TMDB
    When The user navigate to the login page
    And The user enters valid credentials "Sushmacha" and "pqCCyg$8g7pshb@G"
    Then The user  should be redirected to the dashboard
    And  should see the profile page

  Scenario: View trending movies
    When The user navigate to the trending movies page
    Then The user  should see a list of trending movies
    And each movie should display its title and poster

  Scenario: View the latest trailers
    When The user  navigate to the latest trailers page
    Then The user should see a list of trailers
    And each trailer should have a play button
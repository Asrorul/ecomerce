Feature: E2E User Flow from Login to Checkout

    @positive
    Scenario: Successful login, add eligible product, apply valid promo, and proceed to checkout
        When I open the login page
        And I select login using email
        And I enter my valid email
        And I enter the correct password
        And I click login button
        Then I should be logged in successfully

        When I search for "Collagen drink"
        And I select the product and add it to the cart
        Then the cart should show the product with correct details

        # When I apply the promo code "QRP-TEST-123"
        # Then the promo should be applied successfully

        When I proceed to checkout
        And I choose the delivery option
        
        Then I clear cart
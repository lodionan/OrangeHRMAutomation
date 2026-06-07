Feature: accounting flow verifications

    Scenario: Verify attachments are saved correctly on custom fields section of the profilePage
        Given I navigate to the dashboard page
        When I navigate to "My Info" page
        And I attach a pdf file
        Then The file must be correctly attached
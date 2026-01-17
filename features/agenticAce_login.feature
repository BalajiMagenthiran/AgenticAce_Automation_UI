Feature: AgenticAce Login Page

    Scenario: User Login with valid Login Credentials for AgenticAce
        When user login with "<username>" and "<password>" for AgenticAce
        Then user should be logged into application by clicking login button
        Examples:
            | username                 | password |
            | pt_user_01@pharmaace.com | Abcd@123 |

    Scenario: User Login with invalid Login Credentials for AgenticAce
        When user login with "<username>" and "<password>" for AgenticAce
        Then user should click loginbutton
        Examples:
            | username                | password |
            | pt_user_01@pharmaac.com | Abcd@123 |
Feature: calcfunction
  This is Calculator Function Test

  Scenario Outline: Subtraction
    Given Open calculator page
    Given first number "<number1>"
    Given push function button "<function>"
    Given second number "<number2>"
    When I push equal button
    Then I should have the result "<finalResult>"
    Then I push c button

    Examples:
    | number1 | number2 | function | finalResult |
    | 5 | 2 | - | 3 |
    | 10 | 2 | / | 5 |
def calculate_fanc_value(portfolio_value, percentage_of_portfolio=25):
    """
    Calculate the value of Fanc based on the artist's portfolio.

    :param portfolio_value: The total value of the artist's portfolio.
    :param percentage_of_portfolio: The percentage of the portfolio represented by Fanc.
    :return: The value of 1 Fanc.
    """
    return (portfolio_value * percentage_of_portfolio) / 100

# import trading system 

# Example usage
portfolio_value = 1000000  # Example portfolio value in USD
fanc_value = calculate_fanc_value(portfolio_value)
print(f"The value of 1 Fanc is: ${fanc_value:.2f}")

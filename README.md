Summary
In this assignment, you will again use JavaScript and get input from users. However, in this assignment, you will also:

Create tables dynamically with JavaScript code.
Modify the DOM while an application runs.
Index.html
Create a page named index.html that will link to the other two pages in your assignment.

All of your pages should be well-formatted using a global CSS file. I suggest using one from a previous assignment to simplify your work. You must use Bootstrap to format your tables. Also, use Bootstrap to format the input widgets.

Amortize.html
For this page, you will create a loan amortization schedule. To complete the loan amortization schedule, you will need to first calculate the payment on a loan. Use the same payment formula that you used in the preceding assignment.

Program Inputs:
Loan Amount
Annual Interest Rate. The input value should be 10 for 10%, rather than 0.10.
Loan Term (Years).
The input values are measured in years. However, the loan amortization schedule should be calculated using monthly values. Thus, to calculate the monthly interest rate, divide the annual interest rate by 12. To get the monthly loan term, multiply the annual loan term by 12. Thus, a 30 year loan will be 360 months. A 12 percent annual interest rate would convert to a 1% monthly interest rate.

Create the necessary input controls as you have already done to get the input from the user. You should validate the input to check that it's numeric. You need not write any code to do this. Just use the correct type for the <input> widget. You can write validation code if you want to.

The following table shows some sample input:

Loan Amount: 200000
Annual Interest Rate 5.00
Loan Term (Years) 30
Given the preceding inputs, the payment amount should be $1,073.64325. Depending on how you perform the calculations, you might experience some rounding error. This is OK. So if your last payment and ending balance are off by a few dollars, that's acceptable. Lenders typically adjust the amount of the last payment to correctly payoff the loan.

The following table shows some sample output corresponding to the above input. I have rounded the output values to two decimal places. Again, your output might be off by a penny or two each period depending how you do the calculations.

Beg. Balance Payment Interest Principal Balance Period
200,000.00 1,073.64 833.33 240.31 199,759.69 1
199,759.69 1,073.64 832.33 241.31 199,518.38 2
199,518.38 1,073.64 831.33 242.31 199,276.07 3
... ... ... ... ... ...
1069.19 1073.64 4.45 1069.19 0 360
How you create the table is completely up to you. You can create the <table> tag statically and append the rows and columns to it. You can also create a <div> tag and add the table there. You could also create the first row statically and add the additional rows programmatically. Also, as long as the table contains the correct data, I don't care how you solve the problem. One of my JavaScript demos shows the basics of creating a table dynamically using DOM HTMLElement and HTMLTableElement objects. Or just could just write the raw HTML. I think it's easier to use the DOM objects.

Finally, you should format the table. You can add the necessary table attributes (Bootstrap classes) programmatically using JavaScript. Just set the class attribute as needed.

Pseudocode
Here is some pseudocode to help you create the JavaScript.

Get the loan amount and store the value in a variable.
Get the annual interest rate and store the value in a variable.
Divide the annual interest rate by 12 to get the monthly interest rate storing the result in a variable.
Multiply the annual loan term by 12 to get the monthly loan term, again storing the value in a variable.
Using the above values, calculate the payment.
The following should be performed in a for loop Create a loop that will enumerate once for each period (360 periods for 30 years). The following should be performed in the loop:
Create a new table row.
Create a new table cell (column 1). Store the beginning balance in the table cell.
Create a new table cell (column 2). Store the payment in the table cell. This value will be the same for all rows.
Create a new table cell (column 3). Calculate the current interest by multiplying the beginning balance by the monthly interest rate. Store the value in the table cell.
Create a new table cell (column 4). Calculate the current principal by subtracting the current interest from the payment amount. Store the value in the cell.
Create a new table cell (column 5). Calculate the new balance by subtracting the current principal amount from the beginning balance. Store the value in the cell. This new balance becomes the beginning balance for the next period.
Create a new table cell (column 6). Display the period. This number should be the same as the loop's counter.
Add all of the cells to the table row.
Add the table row to the table.

FutureValue.html
For this page, you will again create a table to calculate the future value of a sum with a periodic investment. Basically, you are answering the question "How much money will I have 10 years from now if I start with $10,000.00, deposit $100.00 per month, and earn an 8% interest rate per period.

Program Inputs:
Initial investment.
Monthly deposit amount.
Annual Interest Rate. The input value should be 10 for 10%, rather than 0.10. Again, you need to convert the annual interest rate to a monthly interest rate.
Investment Term (Years). You need to convert to months.
Create the necessary input widgets to get the input from the user.

Once again, you can create the table using any technique that you want.

Format the table using Bootstrap just as you did with the previous table.

Pseudocode
Create table headers (period, present value, deposit, interest, new balance
The following should be performed in a for loop:
Create a loop that will enumerate once for each period (360 periods for 30 years). The following should be performed in the loop:
Create a new table row.
Create a new table cell (column 0). Store the period in the table cell.
Create a new table cell (column 1). Store the beginning balance in the table cell.
Create a new table cell (column 2). Store the recurring deposit amount.
Create a new table cell (column 3). Calculate the current interest by multiplying the beginning balance by the monthly interest rate. Store the value in the table cell.
Create a new table cell (column 4). Calculate the new balance by adding the interest to the current balance. This new balance becomes the beginning balance for the next period.
# is360-assignment4

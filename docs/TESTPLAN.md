# Test Plan for COBOL Student Account Management System

This test plan covers the business logic of the legacy COBOL application for student account management. It includes test cases for viewing balance, crediting accounts, and debiting accounts, including edge cases and business rule validations. The plan is designed to validate functionality before and during transformation to a Node.js application.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status | Comments |
|--------------|-----------------------|----------------|------------|----------------|---------------|--------|----------|
| TC001 | View initial balance | Application is compiled and running; no prior operations performed | 1. Start the application<br>2. Select option 1 (View Balance) | Display shows "Current balance: 1000.00" |  |  | Initial balance is $1000.00 |
| TC002 | Credit account with positive amount | Application is running; balance is at initial state | 1. Select option 2 (Credit Account)<br>2. Enter amount: 500.00<br>3. Select option 1 to view balance | Balance displays 1500.00 |  |  | Credits increase balance |
| TC003 | Debit account with sufficient funds | Balance is greater than or equal to debit amount (e.g., after TC002, balance 1500.00) | 1. Select option 3 (Debit Account)<br>2. Enter amount: 200.00<br>3. Select option 1 to view balance | Balance displays 1300.00 |  |  | Debits decrease balance when funds are sufficient |
| TC004 | Debit account with insufficient funds | Balance is less than debit amount (e.g., initial balance 1000.00) | 1. Select option 3 (Debit Account)<br>2. Enter amount: 1500.00 | Display shows "Insufficient funds for this debit." and balance remains unchanged |  |  | Enforces no overdraft rule |
| TC005 | Multiple credit operations | Application is running | 1. Perform TC002 twice (credit 500.00 each time)<br>2. View balance | Balance displays 2000.00 |  |  | Multiple credits accumulate |
| TC006 | Multiple debit operations with sufficient funds | Balance is sufficient (e.g., after credits) | 1. Debit 300.00<br>2. Debit 200.00<br>3. View balance | Balance reflects cumulative debits |  |  | Multiple debits work if funds allow |
| TC007 | Credit zero amount | Application is running | 1. Select option 2<br>2. Enter amount: 0.00<br>3. View balance | Balance unchanged |  |  | Zero credit has no effect |
| TC008 | Debit zero amount | Balance > 0 | 1. Select option 3<br>2. Enter amount: 0.00<br>3. View balance | Balance unchanged |  |  | Zero debit has no effect |
| TC009 | Credit large amount | Application is running | 1. Select option 2<br>2. Enter amount: 999999.99<br>3. View balance | Balance increases by 999999.99 |  |  | Handles large positive amounts |
| TC010 | Debit entire balance | Balance > 0 | 1. Select option 3<br>2. Enter amount equal to current balance<br>3. View balance | Balance becomes 0.00 |  |  | Allows debiting entire balance |
| TC011 | Invalid menu choice | Application is running | 1. Enter invalid choice (e.g., 5)<br>2. Observe response | Display shows "Invalid choice, please select 1-4." and menu redisplays |  |  | Handles invalid inputs gracefully |
| TC012 | Exit application | Application is running | 1. Select option 4 (Exit) | Application terminates with "Exiting the program. Goodbye!" |  |  | Proper exit functionality |
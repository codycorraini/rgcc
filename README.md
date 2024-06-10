This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, you will need the .env file (which should be beside this README file) with the following values: 

API_URL="https://api.currencybeacon.com/v1/"
API_KEY="" (Redacted) 

Then, install dependencies:
```bash
npm i
```

And finally, run the development server: 

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Original Readme:

# js-interview-assessment

## Project Overview:
Your task is to create a simple currency conversion tool similar to that found on Google, using the front-end framework of your choice (e.g. React, Angular, Vue.js, etc.).

- The application should allow users to select the desired currency to convert from and to, input an amount, and then dynamically display the converted amount. The application should update the converted amount as the user inputs or changes the amount to convert.
- We recommend you spend a maximum of 2 hours completing this challenge.
- We won’t be scoring you on the design; please focus on component composition and adhering to best practices in coding.

## Requirements:

### Currency Selection:
1. Provide two select boxes for users to choose the currency to convert from and to.
1. Fetch a list of currencies from the https://api.currencybeacon.com/v1/currencies API.
1. Populate the select boxes with the available options returned from API.

### Currency Conversion:
1. Allow users to input an amount for the “from” currency.
1. Fetch converted value from https://api.currencybeacon.com/v1/convert API.
1. Populate the “to” value based on the value returned from API.

## API Overview:
- For this assessment, please make use of the following free API resource: https://currencybeacon.com
- Full documentation can be found here: https://currencybeacon.com/api-documentation
- You should make use of our demo key in your requests `API_KEY=(REDACTED)`
- Your application should make use of the following two API calls:
  - https://api.currencybeacon.com/v1/currencies
  - https://api.currencybeacon.com/v1/convert
- *Please ensure that you have carefully studied the API responses and selected the most appropriate nodes for the mapping of data.*

## Submission Guidelines:
- Provide a link to your public repo for us to clone or email us a ZIP of the project.
- Include clear instructions on how to run your application locally.
- Document any assumptions or decisions you make during the development process.
- Submit your completed project within the specified timeframe.

## Evaluation Criteria:
### Functionality: 
Does the application meet the specified requirements? Does it accurately perform currency conversion?

### Code Quality:
Is the code well-structured, readable, and maintainable? Are best practices followed?

### Component Composition:
Are components appropriately structured and reused? Is there unnecessary duplication?

### User Experience:
Is the user interface intuitive and easy to use? Does it provide clear feedback to users?

### Additional Features:
Are any optional features implemented effectively?

## Notes:
- You are encouraged to use any additional libraries or tools you find necessary to complete the project efficiently.
- Please ensure that your project is self-contained and can be easily set up and run by the evaluation team.
- If you have any questions or need clarification on the requirements, feel free to reach out for assistance. Good luck!

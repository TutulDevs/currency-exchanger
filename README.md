# Currency Exchanger

Currency Exchanger application where you'll be able to convert from currency A to currency B and get the best rates possible.

## Home page:

- Convert currencies from any selected currency to another currency
- Swap currencies


## Currency Page

- Convert from the fixed currency to any other currency
- Get historic rates of the last 30 days which is updated in every 10 seconds

## Local Data

- On page load, check if there's any target currency in the local storage,
  - if no target currency is found, set the target currency to the app default target currency and update the `localstorage` & `redux-store`
  - if target currency is found, update the `redux-store`
- On page load, check if there's any currency list in the local storage
  - if not found, call api, store the list in the `localstorage` & `redux-store`


## to-dos

- add live chart
- error handling
- loom for intro video
- invite `/entrptaher`

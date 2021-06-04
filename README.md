# Orderbook

This a simple POC of a BTC orderbook for React Native iOS.

This project was made using redux, redux-saga and reselect to consume a websocket API. The main purposal is to handle better the websocket channel, and allow Redux to store the minimal possible state.

## Installing

This project has been made using a bare instalation of React-Native, version 0.61.5.

You can run the iOS version by doing:

`npm i` or `yarn install`

move to ios folder and run `pod install`

run ´react-native run-ios´

## Features to be implemented

* Toggle feed button
* Grouping select box 

## To be improved

In general, a better understanding of how orderbooks works and a more straightforward way to handle the multidimensional arrays could lead to faster development.
   . 
* The ´formatOrders´ formatter could also handle the calcs to display the depth percentage.
* By handling better the data, my redux store could have an easy going design. 
* Implement unit-tests 


## The layout should look like this
![alt text](https://github.com/FFFra/orderbook/blob/master/assets/Screenshot%202021-06-04%20at%2015.55.02.png)



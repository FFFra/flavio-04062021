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

– Toggle feed button
– Grouping select box 

## To be improved
– redux state could have a better design
– move logic to formatter
– a more straight forward way to handle the orderbook snapshots
– implement unit-tests


## The layout should look like this
![alt text](https://github.com/FFFra/orderbook/blob/master/assets/Screenshot%202021-06-04%20at%2015.55.02.png)



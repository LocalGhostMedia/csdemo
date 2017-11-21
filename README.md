# Campsot Demo

This demo digests the JSON supplied by Campspot to display to the user available camp sites.

### Prerequisites

You should have Node.js installed on your computer. If you do not go install from here:
[Node.JS](https://nodejs.org/en/download/)

### Installing

First pull down the project and go to that folder with your CLI.

Install needed packages with
```
npm install
```

After that is finished, you can run the program with
```
npm start
```

Your default browser should open displaying localhost:3000 as Campspot Demo

## Running the tests

Run tests with
```
npm test
```
If no tests are ran (due to no code changed since last commit), press 'a' to run all tests

## Built With

* [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/README.md) - The react framework used
* [moment](https://momentjs.com/) - Time management

## Conclusion

The expected output of the sample file was:
```
   "Daniel Boone Bungalow"
   "Teddy Roosevelt Tent Site"
   "Bear Grylls Cozy Cave"
   "Wyatt Earp Corral"
```

This was calculated by 3 steps of logic.
1. Go through all campsites and match them with their reservations
2. Determine if the search reservation overlaps
    a. If the startGap/endGap is a designated gapSize
    b. If the startGap/endGap is negative and absolute value is not more than the duration of the search.
3. Display campsites that have no overlap

## Authors

* **Ty Smith** - *Initial work*

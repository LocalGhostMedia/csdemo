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
This is incorrect.

Example why:
```
"Wyatt Earp Corral"
Start date for next reservation: June 12th
End date for Search Query:  June 10th
This creates a 2 day gap. That is invalid based on gapSize parameters.
```

Correct output:
```
   "Jonny Appleseed Log Cabin"
   "Teddy Roosevelt Tent Site"
   "Bear Grylls Cozy Cave"
```
Output explanation:
```
"Jonny Appleseed Log Cabin"
Start date for Search Query: June 7th
End date for previous reservation:    June 6th
This creates a 1 day gap. That is valid based on gapSize parameters.

End date for Search Query:   June 10th
Start date for next reservation:  June 14th
This creates a 4 day gap. That is valid based on gapSize parameters.
```

## Authors

* **Ty Smith** - *Initial work*

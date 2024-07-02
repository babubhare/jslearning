//No Difference between using function expression and regular named function. Recursive is easier
//Function has a core function and its prototype as function. can be found from baseFunction.__proto__.constructor


function baseFunction()
{
    return 100;
}

baseFunction();
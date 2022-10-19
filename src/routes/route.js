const express = require('express');
const router = express.Router();

//QN1
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]
//: 4 is missing

router.get("/sol-1", function(req, res ) {
    const arr = [1,2,3,5,6,7]
    let n = arr.length + 1
    let sum_of_all_natural_num = n * (n + 1)/2
    
    sumOfarr = 0
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sumOfarr+=element
    }

    let missingNumber = sum_of_all_natural_num - sumOfarr
    res.send({ "The missing number is" : missingNumber})
})

//QN2
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33,
//34, 35, 37, 38]: 36 is missing
router.get("/sol-2", function(req, res){
    let arr = [33,34,35,37,38]
    let first = arr[0]
    let last = arr[arr.length - 1]
    let n = arr.length + 1
    let sum_of_n_cong_num = n*(first+last)/2

    sumOfarr = 0
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sumOfarr = sumOfarr + element
    }

    let missingNumber = sum_of_n_cong_num - sumOfarr
    res.send({"The missing no. is" : missingNumber})
})

module.exports = router;

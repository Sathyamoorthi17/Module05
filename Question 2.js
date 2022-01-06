// programs in arrow functions

// 1. Print odd numbers in an array

var sum = () => {
    for(let i=0; i<10; i++)
        if(i%2 == 1)
        console.log(i);
        
        return i
}

console.log(sum());

//Output : 1 3 5 7 9


// 2.Convert all the strings to title caps in a string array

var tittlecaps = (str) => {
    
    str = str.toLowerCase();
    
    str = str.split(' ');
    
    for (var i=0; i<str.length; i++)
        
        str[i] = str[i].toUpperCase()
    
    return str.join(' ');
}

console.log(tittlecaps("I'm a Webdeveloper"));

//Output : I'M A WEBDEVELOPER

//3.Sum of all numbers in an array

const sum = [17,27,3,58,94];

let totalSum = sum.reduce ((previousVal,currentVal) => {
    return previousVal+currentVal ;
    
});
    
console.log(totalSum);

//Output : 199

//4. Return all the prime numbers in an array

var isPrime = (num) => {
    
    for(var i=2; i<num; i++)
        if( num % i == 0)
            return false;
            
    return true;
            
};

var display = (n) => {
    
    var arr = [2];
    for(var i=3; i<n; i+=2)
        if( isPrime(i) )
             arr.push(i);

    return arr;
};

console.log(display(20));

//Output : [ 2, 3, 5, 7, 11, 13, 17, 19 ]


//5.Return all the palindromes in an array

var arr = ["civic","books","read", "radar", "level"];

var b = arr.filter ((c,d,f) => {
    
    var Cur = c.split('').reverse().join('');

        if(c == Cur)
        console.log( arr[d] );


});

//Output : civic radar level

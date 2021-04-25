/* write a small web app that does the following:
    - displays only the even numbers from 1 to 20.
    - the result should look like this: 2, 4, 6, ...
    - hint: use string concatenation to accomplish the output format.*/
    const numbers = [0,1, 2, 3, 4,5,6,7,8,9,10.11,12,13,14,15,16,17,18,19,20];
    const evens = numbers.filter(item => item % 2 === 0);
   
   document.getElementById("test").innerHTML = "  These are Esven Numbers:  " + (evens)  ;
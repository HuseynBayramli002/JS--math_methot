//! Task 4.1
// const a = 5; 
// const b = 6; 
// const c = 7; 
// //? S=(1/4)*(a+b+c)*(b+c-a)*(b+a-c)*(a+c-b)
// let sahe=(a+b+c)*(b+c-a)*(b+a-c)*(a+c-b)/4
// console.log(sahe)


//! Task 4.2
// function decimals(number, decimalPlaces) {
//     return number.toFixed(decimalPlaces);
// }
// console.log(decimals(2.100212, 2)); 
// console.log(decimals(2.100212, 3));  
// console.log(decimals(2100, 2));


//! Task 4.3
// function max(arr) {
//     return Math.max(...arr);
// }
// console.log(max([12, 34, 56, 1]));    
// console.log(max([-12, -34, 0, -56, -1])); 


//! Task 4.4
// function is_Numeric(elem){
//     if(typeof elem == "number"){
//         return "true"
//     }else{
//         return "false"
//     }
// }
// console.log(is_Numeric(12)); 
// console.log(is_Numeric('abcd'));
// console.log(is_Numeric('12'));
// console.log(is_Numeric(' '));
// console.log(is_Numeric(1.20));
// console.log(is_Numeric(-200));


//! Task 4.5
// let a=prompt("a terefin uzunluqu");
// let b=prompt("b terefin uzunluqu");    
// let hipetonuz=Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
// console.log(hipetonuz)


//! Task 4.6
// function is_Power_Of_Ten(num){
//     if(Math.log10(num) %1==0){
//         return 'true'
//     }else{
//         return 'false'
//     }
// }
// console.log(is_Power_Of_Ten(1));
// console.log(is_Power_Of_Ten(10));
// console.log(is_Power_Of_Ten(30));
// console.log(is_Power_Of_Ten(100));
// console.log(is_Power_Of_Ten(90));
// console.log(is_Power_Of_Ten(1000));


//! Task 4.7        
// function everySecondCharacter(elem) {
//     let num = elem.length / 2;
//     let num2;
//     if (num % 1 == 0) {
//          num2 = num - 1
//          return elem[num2]+elem[num]
//     }else{
//         num= Math.trunc(elem.length/2)
//         return elem[num]
//     }    
// }
// console.log(everySecondCharacter("abcd"));
// console.log(everySecondCharacter("abc"));
// console.log(everySecondCharacter("JavaScript"));


//! Task 4.8
// let nums = [1, 2, 3,5, 6, 7]
// for (i = 0; i< nums.length-1; i++) {
//     if (nums[i] * nums[i+1] % 2 != 0) {
//         console.log(`unutdugumuz reqem ${nums[i]+1}`)
//     }
// }
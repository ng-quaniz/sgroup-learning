
//1
function getDateTime() {
    let d = new Date();
	let day = d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
	let time = (d.getHours()+7)+':'+d.getMinutes();
	return `Now is: ${time} ${day}`
}

const now = getDateTime()
console.log(now)

//2
function allFormatsOfDate({day, month, year}) {
	let fm4 = `${day}-${month}-${year}`;
    let fm3 = `${day}/${month}/${year}`;
    let fm1 = `${month}-${day}-${year}`;
    let fm2 = `${month}/${day}/${year}`;
    return `${fm1} \n${fm2}\n${fm3}\n${fm4}`
}

const date = { 
	day: 28,
	month: 12,
	year: 2022
}

const result = allFormatsOfDate(date)
console.log(result)

//3
function isIncreaseChainNumber(number) {
    let str = '' + number;
    let array = str.split('');
    var bl = true;
    loop:
    for(let i = 0; i < array.length; i++){ 
        for(let j = i+1; j < (array.length-i-1); j++)
            if((+array[i])>(+array[j])){
                bl =  false;
                break loop;
            }
    }
     return bl
    }
    
    const number1 = 123456789n
    const number2 = 123432112321n
    const number3 = 988811111n
    
    console.log(isIncreaseChainNumber(number1))  // true
    console.log(isIncreaseChainNumber(number2)) // true
    console.log(isIncreaseChainNumber(number3)) // false

//4
let ceaserCipher = (str, key) => {
    let decipher = '';
    for(let i = 0; i < str.length; i++){
      if(str[i]>='A' && str[i]<='Z')
        decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
      else 
          if(str[i]>='a' && str[i]<='z')
            decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
          else 
              decipher += str[i];
    }
    return decipher;
  }
  
  const name = "Hoang Nhan"
  const cypherText =ceaserCipher(name, 3)
  
  console.log(cypherText) // Krdqj Qkdq

//5
function highestFreqNumber(numbers) {
	let max =[0,0];
    let count =1;
    for (let i = numbers.length-1; i > 0; --i) {
        if (numbers[i] == numbers[i-1]) ++count; 
        else{
             if (max[1] < count){ 
                  max[0] = numbers[i];
                  max[1] = count;   
             }
             count = 1;
        }
    }
    return max[0]
}

const numbers = [1,2,3,5,6,7,4,7,3,2,1,6,7,8,7,7,1,7,3,7,9999,7,123,7]

console.log(highestFreqNumber(numbers)) // 7


//6
function isIncludeJS(str) {
	const substring = /javascript/i; //k phân biệt hoa
    let a = new RegExp(substring).test(str);
    return a;
}

const str1 = "asdsajkzzjAVAscriptttaskldjkl123aszxc"
const str2 = "jjjjjjjavaaaaScriptttttttttt"
const str3 = "888javaScript888"

console.log(isIncludeJS(str1)); //true
console.log(isIncludeJS(str2)); //false
console.log(isIncludeJS(str3)); //true

//7
function  getMonthName(monthNumber) {
    let monthName = 
    (monthNumber == 1) ? 'January' :  
    (monthNumber == 2) ? 'February' :  
    (monthNumber == 3) ? 'March' :  
    (monthNumber == 4) ? 'April' :  
    (monthNumber == 5) ? 'May' :  
    (monthNumber == 6) ? 'June' :  
    (monthNumber == 7) ? 'July' :  
    (monthNumber == 8) ? 'August' :  
    (monthNumber == 9) ? 'September' :  
    (monthNumber == 10) ? 'October' :  
    (monthNumber == 11) ? 'November' :  
    (monthNumber == 12) ? 'December' : 
    'NO month';
    return monthName;
}

console.log(getMonthName(3)) 
console.log(getMonthName(4))

//8
function longestWord(str) {
    let array = str.match(/\w[a-z]{0,}/gi);
    let result = array[0];
  
    for(let i = 1 ; i < array.length ; i++)
      if(result.length < array[i].length)
          result = array[i];
    return result;
  }
  
  const str = "Little darlin', it's been a loooooong, cold, lonely winter";
  console.log(longestWord(str))

  //9
  function sum(number) {
    let str = '' + number;
    let array = str.split('')
    let array1 = array.filter((x) => x != 5);
    return array1.reduce(getSum,0);
    function getSum(total, num) {
      return total + Math.round(num);
  }
  }
  
  console.log(sum(1231312321378127391237219312n)) // 90
  console.log(sum(99999999999999999999999999999n))// 261
  console.log(sum(12345678908765432123456555566n)) // 98
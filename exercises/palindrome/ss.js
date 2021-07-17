function calculateWeight(num, sum = 0) {
    return([...num].map(Number).reduce((accumulator, val) => accumulator + val, 0));
  }
  
  function sortWeight( num1, num2) {
    return calculateWeight(num1) - calculateWeight(num2) || num1 - num2;
  }
  
  function orderWeight(strng) {
    const given_array = strng.split(' ');
    const final_arr = given_array.sort(sortWeight);
    return final_arr.join(' ');
  }

  console.log(orderWeight("123 2000 111"));
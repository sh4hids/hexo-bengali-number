'use strict';

function toBengaliNum (num) {
  var numbers = {'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯','.':'.'};
  if(!isNaN(parseFloat(num)) && !isNaN(num - 0)){
    var input = num.toString().split('');
    var number = '';
    input.forEach((x) => {
      return number += numbers[x];
    });
    return number;
  } else {
    return 'Invalid type';
  }
}

hexo.extend.helper.register('toBengaliNum', function(num) {
  console.log(toBengaliNum(num));
  return toBengaliNum(num);
});

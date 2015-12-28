function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

function notValid(set1, set2) {
  var count = 0;
  var out = {'good' : false};

  for (var i=0; i<set1.length; i++) {
    for (var j=0; j<set2.length; j++) {
      if (set2[j] == set1[i]) {
        count = count + 1;
        out['match'] = set2[j];
        if (count > 1) {
          return out;
        }
      }
    }
  }
  if (count == 1) {
    out['good'] = true;
  }
  return out;
}


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

Array.prototype.shuffle = function () {
  var m = this.length, t, i;

  // While there are elements to shuffle
  while (m) {
    // Pick a remaining element...
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element
    t = this[m];
    this[m] = this[i];
    this[i] = t;
  }

  return this;
}

Array.prototype.randomPk = function () {
  return Math.floor(Math.random() * this.length);
}

Array.prototype.randomElement = function () {
  return this[Math.floor(Math.random() * this.length)];
}

function findMatch(set1, set2) {
  for (var i=0; i<set1.length; i++) {
    for (var j=0; j<set2.length; j++) {
      if (set1[i] == set2[j]) {
        return set1[i];
      }
    }
  }
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


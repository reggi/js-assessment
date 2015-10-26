exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var val
    arr.forEach(function (arrItem, index) {
      if (arrItem === item) val = index
    })
    return (val) ? val : -1
  },

  sum : function(arr) {
    var val = 0
    arr.forEach(function (arrItem, index) {
      val = val + arrItem
    })
    return val
  },

  remove : function(arr, item) {
    var val = []
    arr.forEach(function (arrItem, index) {
      if (arrItem !== item) val.push(arrItem)
    })
    return val
  },

  removeWithoutCopy : function(arr, item) {
    arr.forEach(function (arrItem, index) {
      if (arrItem === item) arr.splice(index, 2)
    })
    return arr
  },

  append : function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate : function(arr) {
    arr.pop()
    return arr
  },

  prepend : function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail : function(arr) {
    arr.shift()
    return arr
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count : function(arr, item) {
    var val = 0
    arr.forEach(function (arrItem, index) {
      if (arrItem === item) val++
    })
    return val
  },

  duplicates : function(arr) {
    arr = arr.sort()
    var val = []
    arr.forEach(function (arrItem, index) {
      var currentItem = arrItem
      var nextItem = arr[index + 1]
      var unique = val.indexOf(arrItem) === -1
      if (currentItem === nextItem && unique) val.push(arrItem)
    })
    return val
  },

  square : function(arr) {
    return arr.map(function (arrItem) {
      return arrItem * arrItem
    })
  },

  findAllOccurrences : function(arr, target) {
    var val = []
    arr.forEach(function (arrItem, index) {
      if (arrItem === target) val.push(index)
    })
    return val
  }
};

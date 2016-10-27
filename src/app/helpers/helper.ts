import {Person} from './../models/person';

export class SortHelper {

  getSortedArrayOfPersons(private arr:Person[], keyName:string):Person[] {
    var sortedArr:Person[] = arr;

    for (var j = 0, len = sortedArr.length - 1; j < len; j++) {
      var swapped = false;
      var i = 0;
      while (i < len - j) {
        if (sortedArr[i][keyName] < sortedArr[i + 1][keyName]) {
          var c = sortedArr[i];
          sortedArr[i] = sortedArr[i + 1];
          sortedArr[i + 1] = c;
          swapped = true;
        }
        i++;
      }

      if(!swapped)
        break;
    }

    return sortedArr;
  }
}

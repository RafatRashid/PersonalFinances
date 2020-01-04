let obj = {
  "1": {
    "date": "2019-11-23T06:48:18.323Z",
    "noOfTransactions": "2",
    "totalInAmount": "500",
    "totalOutAmount": "173"
  },
  "2": {
    "date": "2019-11-18T06:48:18.323Z",
    "noOfTransactions": "1",
    "totalInAmount": "22500",
    "totalOutAmount": "0"
  },
  "3": {
    "date": "2019-11-23T06:48:18.323Z",
    "noOfTransactions": "3",
    "totalInAmount": "1200",
    "totalOutAmount": "500"
  }
}


let accumulatedArray = Object.keys(obj).map(key => ({ ...obj[key], id: key }));
console.log(accumulatedArray)
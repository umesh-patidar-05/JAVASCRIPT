const d = new Date();
console.log(d)  // 2026-11-01T05:51:31.477Z



const d1 = new Date("October 13, 2014 11:13:00");
console.log(d1)  // 2014-10-13T05:43:00.000Z



const d2 = new Date("2022-03-25");
console.log(d2)  // 2022-03-25T00:00:00.000Z



const d3 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d3)  // 2018-12-24T05:03:30.000Z



const d4 = new Date(2018, 15, 24, 10, 33, 30);
console.log(d4)  // 2019-04-24T05:03:30.000Z



const d5 = new Date(2019, 3, 24, 10, 33, 30);
console.log(d5)  // 2019-04-24T05:03:30.000Z



const d6 = new Date(2018, 11, 24, 10);
console.log(d6)  // 2018-12-24T04:30:00.000Z



const d7 = new Date(2018);
console.log(d7)  // 1970-01-01T00:00:02.018Z



const d8 = new Date(2018, 0);
console.log(d8)  // 2017-12-31T18:30:00.000Z
          
                                                                                

const d9 = new Date(2018, 11);
console.log(d9)  // 2018-11-30T18:30:00.000Z
console.log(d9.toDateString())  // Sat Dec 01 2018
console.log(d9.toISOString())  // 2018-11-30T18:30:00.000Z



const d = new Date(99, 11, 24);
console.log(d)  // 1999-12-23T18:30:00.000Z



const d = new Date(9, 11, 24);
console.log(d)  // 1909-12-23T18:30:00.000Z




const d = new Date(100000000000);
console.log(d)  // 1973-03-03T09:46:40.000Z



const d = new Date(-100000000000);
console.log(d)  // 1966-10-31T14:13:20.000Z



const d = new Date(0);
console.log(d)  // 1970-01-01T00:00:00.000Z




const d = new Date();
console.log(d.toString())  // Sun Nov 01 2026 21:52:15 GMT+0530 (India Standard Time)



const d = new Date();
console.log(d.toDateString())  // Sun Nov 01 2026



const d = new Date();
console.log(d.toUTCString())  // Sun, 01 Nov 2026 17:08:19 GMT



const d = new Date();
console.log(d.toISOString())  // 2026-11-01T17:12:24.171Z



const d = new Date("2015-03-25");
console.log(d)  // 2015-03-25T00:00:00.000Z
 


const d = new Date("2015-03");
console.log(d)  // 2015-03-01T00:00:00.000Z



const d = new Date("2015");
console.log(d)  // 2015-01-01T00:00:00.000Z



const d = new Date("2015-03-25T12:00:00Z");
console.log(d)  // 2015-03-25T12:00:00.000Z



const d = new Date("03/25/2015");
console.log(d)  // 2015-03-24T18:30:00.000Z



const d = new Date("2015-3-25");
console.log(d)  // 2015-03-24T18:30:00.000Z



const d = new Date("2015/03/25");
console.log(d)  // 2015-03-24T18:30:00.000Z



const d = new Date("25-03-2015");
console.log(d)  // Invalid Date



const d = new Date("Mar 25 2015");
console.log(d)  // 2015-03-24T18:30:00.000Z



const d = new Date("25 Mar 2015");
console.log(d)  // 2015-03-24T18:30:00.000Z



const d1 = new Date("January 25 2015");
console.log(d1)  // 2015-01-24T18:30:00.000Z
const d2 = new Date("Jan 25 2015");
console.log(d2)  // 2015-01-24T18:30:00.000Z
const d3 = new Date("JANUARY, 25, 2015");
console.log(d3)  // 2015-01-24T18:30:00.000Z



let msec = Date.parse("March 21, 2012");
console.log(msec)  // 1332268200000



let msec = Date.parse("March 21, 2012");
const d = new Date(msec);
console.log(d)  // 2012-03-20T18:30:00.000Z



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let month = months[d.getMonth()]
console.log(month)  // November



let d = new Date()
console.log(d)  // 2026-11-01T19:24:52.580Z
console.log(d.getFullYear())  // 2026
console.log(d.getMonth())  // 10
console.log(d.getDate())  // 2
console.log(d.getDay())  // 1
console.log(d.getHours())  // 0
console.log(d.getMinutes())  // 54
console.log(d.getSeconds())  // 52
console.log(d.getMilliseconds())  // 580
console.log(d.getTime())  // 1793561092580
console.log(d.getUTCHours())  // 19
console.log(d.getUTCMinutes())   // 24


const d = new Date()
let diff = d.getTimezoneOffset();
console.log(diff)  // -330



const d = new Date();
console.log(d)  // 2026-11-01T20:30:32.675Z
d.setFullYear(2027)
console.log(d)  // 2027-11-01T20:30:32.675Z
console.log(d.setMonth(11))  // 1827693032675
console.log(d.toDateString());  // Thu Dec 02 2027



const d = new Date("January 01, 2025");

d.setDate(d.getDate() + 30); // Add 30 days
d.setMinutes(d.getMinutes() + 30); // Add 30 minutes
d.setSeconds(d.getSeconds() + 10); // Add 10 seconds

d.setFullYear(2027, 11, 22); // Set year, month, and day
d.setMonth(5);               // Set month to June (0-based)
d.setDate(7);                // Set day to 7
d.setHours(10);              // Set hour to 10
d.setMinutes(30);            // Set minutes to 30
d.setSeconds(45);            // Set seconds to 45
d.setMilliseconds(500);      // Set milliseconds to 500

console.log(d.toString());  // Mon Jun 07 2027 10:30:45 GMT+0530 (India Standard Time)
console.log(d.getTime()); // 1812344445500




const date1 = new Date("2025-01-01");
const date2 = new Date("2025-01-10");
const difference = date2 - date1;
console.log(difference);  // 777600000
console.log(difference / (1000 * 60 * 60 * 24))  // 9
console.log(date2.getDate() - date1.getDate())  // 9



const date1 = new Date("2025-01-30");
const date2 = new Date("2025-02-02");
console.log(date2.getDate() - date1.getDate()); // -28
console.log((date2 - date1) / (1000 * 60 * 60 * 24)); // 3

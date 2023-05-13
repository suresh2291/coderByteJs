/**
 * Have the function countingMinutesI(str) take the str parameter being passed
 * which will be two times (each properly formatted with a colon and am or pm)
 * separated by a hyphen and return the total number of minutes between the two
 * times. The time will be in a 12 hour clock format. For example: if str is
 * 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the
 * output should be 1320.
 */

function countingMinutesI(str) {
    var [startTime, endTime] = str.split("-");
    
    var [startHours, startMinutes, startAMPM] = startTime.split(/:|(?=[ap]m)/i);
    var [endHours, endMinutes, endAMPM] = endTime.split(/:|(?=[ap]m)/i);
  
    startHours = parseInt(startHours);
    startMinutes = parseInt(startMinutes);
    endHours = parseInt(endHours);
    endMinutes = parseInt(endMinutes);
  
    if (startAMPM.toLowerCase() === "pm" && startHours !== 12) {
      startHours += 12;
    }
  
    if (endAMPM.toLowerCase() === "pm" && endHours !== 12) {
      endHours += 12;
    }
  
    var startTotalMinutes = startHours * 60 + startMinutes;
    var endTotalMinutes = endHours * 60 + endMinutes;
  
    if (endTotalMinutes < startTotalMinutes) {
      endTotalMinutes += 24 * 60;
    }
  
    var totalMinutes = endTotalMinutes - startTotalMinutes;
    return totalMinutes;
  }
  
  // Example usage:
  console.log(countingMinutesI("9:00am-10:00am")); // Output: 60
  console.log(countingMinutesI("1:00pm-11:00am")); // Output: 1320
  console.log(countingMinutesI('9:00am-09:00am'))
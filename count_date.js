function getDays(day1, day2) {
    day1 = day1.split('-').map(day1=>parseInt(day1));
    day2 = day2.split(' ').map(day2=>parseInt(day2));
    day = day2[1] - day1[1];
    return day.toString();
    
}

console.log(getDays("June-14-2019", "June 20, 2019"));
console.log(getDays("December-29-2018", "January 1, 2019"));
console.log(getDays("July-20-2019", "July 30, 2019"));
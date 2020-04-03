
calc_period();

function calc_period() {
    let counter = 0;
    
    let day = new Date(2020, 02, 20);
    let today = getTodayDate();

    do {
        if (day.getDay() != 0 && day.getDay() != 6) {
            counter++;
        }
        
        if (day.getTime() === today.getTime()) {
            break;
        }
        day.setDate(day.getDate() + 1);
    } while(true);

    printDaysCounter(counter);
    printHoursCounter(counter * 90);
}

function printDaysCounter(counter) {
    document.getElementById('days').innerHTML = counter;
}

function printHoursCounter(minutes) {
    let hours = parseInt(minutes / 60);
    minutes = minutes - (60 * hours);

    document.getElementById('hours').innerHTML = hours + ' hours ' + minutes + ' minutes ';
}

function getTodayDate() {
    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    return today;
}
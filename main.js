let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;

if (age >= 18 && early === true) {
  raceNumber += 1000;
}

if (age > 18 && early === true) {
  console.log(`Hello runner ${raceNumber}. You are scheduled for the 9:30 AM race.`)
} else if (age > 18 && early === false) {
  console.log(`Hello runner ${raceNumber}. You are scheduled for the 11:00 AM race.`)
} else if (age < 18) {
  console.log(`Hello runner ${raceNumber}. You are scheduled for the 12:30 PM race.`)
} else {
  console.log(`Hello runner ${raceNumber}. Please see the registration desk for more information.`)
}

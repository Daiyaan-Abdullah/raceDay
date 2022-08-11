let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true
const Age = 23

if ( Age > 18 && registeredEarly) {
  raceNumber =+ 1000
}
if ( Age > 18 && registeredEarly) {
  raceNumber =+ 1000
  console.log(`You will race at 9:30 am and your Race Number is ${raceNumber}.`)
} else if ( Age > 18 && !registeredEarly ) {
  raceNumber =+ 1000
  console.log(`You will race at 11:00 am and your Race Number is ${raceNumber}.`);
} else if (Age < 18) {
  console.log(`You will race at 12:30 pm and your Race Number is ${raceNumber}.`);
} else {
  console.log('Please refer to the registation desk.');
}
function haveBreakfast(food, drink, callback2) {
  console.log('Having breakfast of ' + food + ', ' + drink);
  if (callback2 && typeof(callback2) === "function") {
    callback2();
  }
}

haveBreakfast('toast', 'coffee', function() {
  console.log('Finished breakfast. Time to go to work!');
});

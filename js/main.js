// how to calculate area using foreach
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function calculateArea(image){
    areas.push(image.height * image.width);
});
console.log(areas);

// create a new array with numbers greater than 50
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
var filteredNumbers = numbers.filter(function(number){
    return number > 50;

});
console.log(filteredNumbers);

// return the users that are admin
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user){
    return user.admin === true;
});
console.log(filteredUsers);

// use find to return the admin
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user){
    return user.admin === true;
});
console.log(admin);

// use find to return an account with balance of 12
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account){
    return account.balance === 12;
});
console.log(account);

// check if every user has submitted a form
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user){
    return user.hasSubmitted === true;
});
console.log(hasSubmitted);

// check to see if there are pending requests
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request){
    return request.status === 'pending';
});
console.log(inProgress);

// adding trip distance with reduce
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];
var totalDistance = trips.reduce(function(sum, trip){
    return sum + trip.distance;
}, 0);
console.log(totalDistance);

// how many of each desk
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(total, desk) {
    if (desk.type === 'sitting') {total.sitting++} 
    else {total.standing++}
	return total;
	}, { sitting: 0, standing: 0 });
console.log(deskTypes);
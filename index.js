let userName = ''
let age = ''
let bornYear
const currentYear = 2022
let squareSide
let squarePerimeter
let circleRadius
let circleArea
let cityDistance
let tripDuration
let yourSpeed
let dollars
let euro
userName = prompt('What is your name?', 'Alice')
alert('Hi, ' + userName)
bornYear = prompt('What year were you born?')
age = currentYear - bornYear
alert('Your age is ' + age + ' years')
squareSide = prompt('Enter the lenghth of the square side in cm:', 3)
squarePerimeter = squareSide * 4
alert('Square perimeter equals ' + squarePerimeter + ' cm')
circleRadius = prompt('Enter the radius of circle in cm:', 5)
circleArea = Math.PI * circleRadius * circleRadius
alert('Circle area equals ' + circleArea + ' cm²')
cityDistance = prompt('What is the distance between two cities (in km)?', 10)
tripDuration = prompt('In how many hours you want to be in city?', 1)
yourSpeed = cityDistance / tripDuration
alert('You should move at a speed of ' + yourSpeed + ' km/h')
dollars = prompt('How many dollars you want to change?', 1000)
euro = dollars * 1.05
alert('Here is your ' + euro + ' euros')
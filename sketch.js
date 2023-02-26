var words = [
  "I got an internship.",
  "I got a cat named Omu.",
  "I was late for a morning quiz and was not allowed to take an exam.",
  "I have gain 2 kg.",
  "I got rejected from school cheerleader club.",
  "I did not pass a math exam. My friend barely passed, so I told her I was even worse don't worry. She told me she didn't want to compare herself to my level, which was lower.",
  "I was told 'you'd better continue doing law. stop doing this.' ",
  "I was mocked for wearing glasses and braces and for not being as cute as when I was younger.",
  "It rained so bad and I did not have an umbrella. My socks were wet, but I needed to sit through a solid 3-hour class.",
  "I was told by a friend that 'You're cute...if you lost some weight.",
];
var dates = [
  "6 Mar 2022",
  "14 April 2022",
  "11 May 2022",
  "21 Jun 2022",
  "30 Jul 2022",
  "31 Aug 2022",
  "25 Sep 2022",
  "1 Oct 2022",
  "17 Nov 2022",
  "10 Dec 2022",
];
var index = 0;
var chooseWords;
var chooseDates;

var x = 200;
var y = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  coffee = new Coffee();
  chooseWords = words[0];
}

function draw() {
  background(0);
  coffee.show();

  textAlign(CENTER);
  textFont("Helvetica");
  colorMode(HSB);
  fill(62, 31, 89);
  textSize(72);
  text(dates[index], width / 2, height - 25);

  textAlign(LEFT);
  rectMode(CORNER);
  colorMode(RGB);
  fill(255);
  textSize(24);
  text(chooseWords, x, y, 400, 400);
}

function mousePressed() {
  coffee.click();

  index = index + 1;

  if (index == dates.length) {
    index = 0;
  }

  chooseWords = random(words);

  if (x > 0 || x < width - 250 || x > width - 50) x = random(0, width - 400);
  y = random(0, height - 200);
}

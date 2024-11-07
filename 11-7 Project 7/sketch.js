var stage = 1;
let i = 0;
let j = 0;
var fade = 255;
var fadeAmount = 2
let choice1, choice2;

function preload() {
  bg1 = loadImage('bg1.png');
  bg2 = loadImage('bg2.png');
  bg3 = loadImage('bg3.png');
  bg4 = loadImage('bg4.png');
  bg5 = loadImage('bg5.png');
}

function setup() {
  createCanvas(850, 480);
}

function draw() {
  if (stage == 1) {
    titleScreen();
  } else if (stage == 2) {
    scene1();
    textBox();
    textScene1();
    fadeIn();
  } else if (stage == 3) {
    choice1.remove();
    choice2.remove();
    scene1();
    textBox();
    textScene1();
  } else if (stage == 4){
    choice1.remove();
    choice2.remove();
    scene1();
    textBox();
    textScene1();
  } else if (stage == 5){
    scene2();
    textBox();
    textScene2();
    fadeIn();
  } else if (stage == 6){
    scene3();
    textBox();
    textScene3();
    fadeIn();
  } else if (stage == 7){
    choice3.remove();
    choice4.remove();
    scene3();
    textBox();
    textScene3();
  } else if (stage == 8){
    choice3.remove();
    choice4.remove();
    scene3();
    textBox();
    textScene3();
  } else if (stage == 9){
    scene2();
    textBox();
    textScene4();
    fadeIn();
  } else if (stage == 10){
    choice5.remove();
    choice6.remove();
    scene2();
    textBox();
    textScene4();
  } else if (stage == 11){
    choice5.remove();
    choice6.remove();
    scene2();
    textBox();
    textScene4();
  } else if (stage == 12){
    scene4();
    textBox();
    textScene5();
    fadeIn();
  } else if (stage == 13){
    choice7.remove();
    choice8.remove();
    scene4();
    textBox();
    textScene5();
  } else if (stage == 14){
    choice7.remove();
    choice8.remove();
    scene4();
    textBox();
    textScene5();
  }
  else if (stage == "badEnding") {
     BadEndingScreen();
  } else if (stage == "trueEnding"){
    TrueEndingScreen();
  }
}
function textBox() {
  rectMode(CENTER);
  fill(120,81,169);  
  stroke(0);           
  rect(width / 2, height - height / 4.25, 425, 100, 10); 
}

function fadeIn() {
  noStroke();
  fill(0, 0, 25, fade);
  rectMode(CORNER);
  rect(0, 0, width, height);
  if (fade < 0) fadeAmount = 0;
  if (fade > 240) {
    fade = fade - 1;
  } else if (fade <= 240) {
    fade = fade - fadeAmount;
  }
}

function TriggerBadEnding(){
  stage = "badEnding";
}
function TriggerTrueEnding(){
  stage = "trueEnding";
}

function BadEndingScreen(){
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("You reached a bad ending...", width/2, height/2-40);
}
function TrueEndingScreen(){
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text("You reached the true ending! <3", width/2, height/2-40);
}

function mousePressed() {
  if (stage == 1) {
    stage = 2;
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 2 && i < 9) {
    i++;
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 2 && i == 9) {
    if (stage == 2) {
      makeChoice(0);
    }
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 3 && i < 14) {
    choice1.remove();
    choice2.remove();
    i++;
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 3 && i == 14) {
    if (stage == 3){
      TriggerBadEnding();
    }
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 4 && i < 17){
    choice1.remove();
    choice2.remove();
    i++;
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 4 && i == 17){
    if (stage == 4){
      stage = 5;
      i = 0;
    }
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 5 && i < 2){
    i++
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 5 && i == 2){
    if (stage == 5){
      stage = 6;
      i = 0;
    }
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 6 && i < 9){
    i++;
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 6 && i == 9){
    if (stage == 6){
      makeChoice1(0);
    }
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 7 && i < 18){
    choice3.remove();
    choice4.remove();
    i++;
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 7 && i == 18){
    if (stage == 7){
      TriggerBadEnding();
    }
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 8 && i < 31){
    choice3.remove();
    choice4.remove();
    i++;
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 8 && i == 31){
    if (stage == 8){
     stage = 9;
     i = 0;
   }
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 9 && i < 6){
    i++;
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 9 && i == 6){
    if(stage == 9){
      makeChoice2(0);
    }
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 10 && i < 11){
    choice5.remove();
    choice6.remove();
    i++;
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 10 && i == 11){
    if (stage == 10){
      TriggerBadEnding();
    }
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 11 && i < 39){
    choice5.remove();
    choice6.remove();
    i++;
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 11 && i == 39){
    if (stage == 11){
      stage = 12;
      i = 0;
    }
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 12 && i < 2){
    i++;
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 12 && i == 2){
    if (stage == 12){
      makeChoice3(0);
    }
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 13 && i < 8){
    choice7.remove();
    choice8.remove();
    i++
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 13 && i == 8){
    TriggerBadEnding();
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 14 && i < 11){
    choice7.remove();
    choice8.remove();
    i++
  } else if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && stage == 14 && i == 11){
    TriggerTrueEnding();
  }
}

function makeChoice(j) {
  let choices = [{
    choiceOne: "Look around the front door",
    choiceTwo: "Ooh a butterfly!"
  }]
  choice1 = createButton(choices[j].choiceOne);
  choice1.style('font-size', '18px');
  choice1.size('width', 30);
  choice1.position(width / 2 - choice1.width / 2, height / 2 - 100);
  choice1.mousePressed(choiceFirst);

  choice2 = createButton(choices[j].choiceTwo);
  choice2.style('font-size', '18px');
  choice2.size('width', 30);
  choice2.position(width / 2 - choice2.width / 2, height / 2 - 50);
  choice2.mousePressed(choiceSecond);
}
function choiceFirst() {
  choice1.remove();
  choice2.remove();
  stage = 4;
  i = 14;
}
function choiceSecond() {
  choice1.remove();
  choice2.remove();
  TriggerBadEnding();
  stage = 3;
  i = 9;
}
function makeChoice1(j){
  let choices = [{
    choiceThree: "Eat it",
    choiceFour: "Wake it up"
  }]

  choice3 = createButton(choices[j].choiceThree);
  choice3.style('font-size', '18px');
  choice3.size('width', 30);
  choice3.position(width / 2 - choice1.width / 2, height / 2 - 100);
  choice3.mousePressed(choiceThree);

  choice4 = createButton(choices[j].choiceFour);
  choice4.style('font-size', '18px');
  choice4.size('width', 30);
  choice4.position(width / 2 - choice2.width / 2, height / 2 - 50);
  choice4.mousePressed(choiceFour);
}
function choiceThree(){
  choice3.remove();
  choice4.remove();
  TriggerBadEnding();
  stage = 7;
  i = 10;
}
function choiceFour(){
  choice3.remove();
  choice4.remove();
  stage = 8;
  i = 19;
}
function makeChoice2(j){
  let choices = [{
    choiceFive: "Look for a litter box",
    choiceSix: "The floor is good enough"
  }]

  choice5 = createButton(choices[j].choiceFive);
  choice5.style('font-size', '18px');
  choice5.size('width', 30);
  choice5.position(width / 2 - choice1.width / 2, height / 2 - 100);
  choice5.mousePressed(choiceFive);

  choice6 = createButton(choices[j].choiceSix);
  choice6.style('font-size', '18px');
  choice6.size('width', 30);
  choice6.position(width / 2 - choice2.width / 2, height / 2 - 50);
  choice6.mousePressed(choiceSix);
}
function choiceFive(){
  choice5.remove();
  choice6.remove();
  stage = 11;
  i = 12;
}
function choiceSix(){
  choice5.remove();
  choice6.remove();
  TriggerBadEnding();
  stage = 10;
  i = 7;
}
function makeChoice3(j){
  let choices = [{
    choiceSeven: "Start a new life",
    choiceEight: "Stay in the past"
  }]

  choice7 = createButton(choices[j].choiceSeven);
  choice7.style('font-size', '18px');
  choice7.size('width', 30);
  choice7.position(width / 2 - choice1.width / 2, height / 2 - 100);
  choice7.mousePressed(choiceSeven);

  choice8 = createButton(choices[j].choiceEight);
  choice8.style('font-size', '18px');
  choice8.size('width', 30);
  choice8.position(width / 2 - choice2.width / 2, height / 2 - 50);
  choice8.mousePressed(choiceEight);
}
function choiceSeven(){
  choice7.remove();
  choice8.remove();
  TriggerTrueEnding();
  stage = 14;
  i = 9;
}
function choiceEight(){
  choice7.remove();
  choice8.remove();
  TriggerBadEnding();
  stage = 13;
  i = 3;
}

function titleScreen() {
  background(251, 198, 207);
  textSize(20);
  textAlign(CENTER);
  text("Click mouse to start", width/2, 250);
  textSize(40);
  text("Sofia the Last", width/2, 150);
}
function scene1() {
  background(200);
  image(bg5, 0, 0);
}
function scene2() {
  background(200);
  image(bg2, 0, 0, 850, 480);
}
function scene3(){
  background(200);
  image(bg3, 0, 0, 850, 480);
}
function scene4(){
  background(200);
  image(bg4, 0, 0, 850, 480);
}
function scene5(){
  background(200);
  image(bg1, 0, 0, 850, 480);
}

function textScene1() {
  let dialogue = [{
      name: "Player",
      line: "Mreow?"
    },
    {
      name: "Player",
      line: "Ugh, where am I?"
    },
    {
      name: "",
      line: "You wake up, barely able to stand. But slowly you gain your bearings and wake up"
    },
    {
      name: "",
      line: "Whose yard is this? What was I doing..."
    },
    {
      name: "Player",
      line: "Wait, who even am I?"
    },
    {
      name: "",
      line: "For some strange reason, you have amnesia"
    },
    {
      name: "Player",
      line: "Well this is probably my house. I'm hungry."
    },
    {
      name: "",
      line: "(Scratching noises)"
    },
    {
      name: "",
      line: "The door is locked"
    },
    {
      name: "Player",
      line: "I need to find a way in."
    },
    //9

    {
      name: "",
      line: "You chase the butterfly in excitement and adventure"
    },
    {
      name: "",
      line: "Several hours pass and you tire yourself, failing to catch the butterfly"
    },
    {
      name: "",
      line: "You then see you have no idea where you are now, still without a single memory"
    },
    {
      name: "",
      line: "In a few days, you've become the cliche lost kitten in a box, waiting for someone to adopt you"
    },
    {
      name: "",
      line: "Only this time, no one adopts you and you die alone"
    },
    //15
    {
      name: "",
      line: "You find a spare key under a flower pot"
    },
    {
      name: "Player",
      line: "Nyahaha! Too easy."
    },
    {
      name: "",
      line: "You open and enter the door"
    }
  ]

  textAlign(CENTER);
  fill(255);
  textFont('Calibri');
  textSize(24);
  text(dialogue[i].name, width / 2, height - height / 3 - 2);
  textSize(18);
  rectMode(CENTER);
  text(dialogue[i].line, width / 2, height - height / 5.3, 425, 100);

}
function textScene2(){
  let dialogue = [{
    name: "Player",
    line: "Eww, this place is a mess. Do I really live here"
  },
  {
    name: "Player",
    line: "It reeks too. Like glitter and rotten eggs."
  },
  {
    name: "Player",
    line: "No matter. I gotta take care of this hunger first."
  }
]

textAlign(CENTER);
fill(255);
textFont('Calibri');
textSize(24);
text(dialogue[i].name, width / 2, height - height / 3 - 2);
textSize(18);
rectMode(CENTER);
text(dialogue[i].line, width / 2, height - height / 5.3, 425, 100);
}
function textScene3(){
  let dialogue = [{
    name: "Player",
    line: "Hot damn this kitchen is big. My owner must've been pretty rich."
  },
  {
    name: "Player",
    line: "Oh yeah...who IS my owner anyways? Who am I??"
  },
  {
    name: "",
    line: "Audible grumbling from your hungry stomach"
  },
  {
    name: "Player",
    line: "Eh. No matter. Gotta take care of this hunger first"
  },
  {
    name: "",
    line: "You rummage through the cabinets and fridge but find nothing"
  },
  {
    name: "Player",
    line: "NO FOOD!? What kind of nut job owner do I live with???"
  },
  {
    name: "Player",
    line: "What exactly was I being fed before I-"
  },
  {
    name: "",
    line: "Stopping mid-sentence, you look towards a fishbowl"
  },
  {
    name: "Player",
    line: "A goldfish..."
  },
  {
    name: "",
    line: "The goldfish is fast asleep. It looks almost dead this way"
  },
  //10
  {
    name: "",
    line: "You eat the fish crushing its soft flesh and feeling the crunch of tiny bones"
  },
  {
    name: "Player",
    line: "That was pretty tasty!"
  },
  {
    name: "Player",
    line: "..!!"
  },
  {
    name: "",
    line: "Your mind rumbles and you begin to remember!"
  },
  {
    name: "Goldfish",
    line: "Sofia, we'll be best friends forever!"
  },
  {
    name: "Player",
    line: "Oh meow god... what have I done.."
  },
  {
    name: "",
    line: "You take a few steps away from the bowl but find yourself collapsed on the floor"
  },
  {
    name: "",
    line: "You writhe in pain feeling intense gastrointestinal contractitions and pain"
  },
  {
    name: "",
    line: "You've met an untimely fate to the hands of food poisoning"
  },
  //19
  {
    name: "Goldfish",
    line: "Mm huh? Oh hey whats up."
  },
  {
    name: "Goldfish",
    line: "Dude you look super hungry. Haven't eaten yet?"
  },
  {
    name: "Player",
    line: "Who are yo-"
  },
  {
    name: "",
    line: "You're interrupted by your stomach growling"
  },
  {
    name: "Player",
    line: "Ah forget it! Got anything to eat?"
  },
  {
    name: "Goldfish",
    line: "Dang! Alright chill Sofia."
  },
  {
    name: "Sofia",
    line: "(Sofia, so that's my name)"
  },
  {
    name: "Goldfish",
    line: "Ryan usually has canned tuna for you above the fridge"
  },
  {
    name: "Goldfish",
    line: "Just move the brick in front of it"
  },
  {
    name: "Sofia",
    line: "(Ryan is my owner's name? Wonder where he is.)"
  },
  {
    name: "Sofia",
    line: "(But that can be asked after I chow!)"
  },
  {
    name: "",
    line: "You find the canned tuna atop the fridge but don't see any bricks"
  },
  {
    name: "",
    line: "After filling your stomach with tuna, you wander back to the living room"
  }
]
textAlign(CENTER);
fill(255);
textFont('Calibri');
textSize(24);
text(dialogue[i].name, width / 2, height - height / 3 - 2);
textSize(18);
rectMode(CENTER);
text(dialogue[i].line, width / 2, height - height / 5.3, 425, 100);
}
function textScene4(){
  let dialogue = [{
    name: "Sofia",
    line: "Whew, that was good."
  },
  {
    name: "Sofia",
    line: "..hm?"
  },
  {
    name: "Sofia",
    line: "What's this?"
  },
  {
    name: "",
    line: "You see a framed picture of yourself next to a human"
  },
  {
    name: "Sofia",
    line: "That guy must be Ryan! But I haven't seen him anywhere in this house."
  },
  {
    name: "",
    line: "You feel a dangerous rumbling in your gut, realizing you need to go potty quickly"
  },
  {
    name: "Sofia",
    line: "Oh meow god...I gotta poo!"
  },
  //7
  {
    name: "",
    line: "You decide to release onto the floor"
  },
  {
    name: "",
    line: "Feeling much relieved after performing your unsavory action, you waltz elsewhere in the house"
  },
  {
    name: "",
    line: "However in your confident stride, one of your paws slips on the turd you just placed down"
  },
  {
    name: "",
    line: "Although you are a cat, you do not successfully land on all fours from this sudden fall"
  },
  {
    name: "",
    line: "You hit your head on the hardwood floors and find yourself meeting an untimely fate"
  },
  //12
  {
    name: "Sofia",
    line: "Grrr, Oh where is it!"
  },
  {
    name: "Sofia",
    line: "Aha!"
  },
  {
    name: "",
    line: "In the distance, you see the litter box"
  },
  {
    name: "",
    line: "However your bowels prove to be on an extremely tight time limit"
  },
  {
    name: "Sofia",
    line: "I'm not gonna make it even if I run!"
  },
  {
    name: "Sofia",
    line: "I'll just have to poo right next to this brick!"
  },
  {
    name: "",
    line: "At that moment, Sofia who lost all her memories also lost a bit of weight as well"
  },
  {
    name: "Sofia",
    line: "Ahh~ I'm refreshed!.."
  },
  {
    name: "Sofia",
    line: "..??"
  },
  {
    name: "",
    line: "Looking at the gargantuan dookie you just took, you stare at the brick you just pooped on"
  },
  {
    name: "Sofia",
    line: "Is that blood on the brick?"
  },
  {
    name: "",
    line: "The mysterious red liquid raises questions. But that's not the question you should be asking right now"
  },
  {
    name: "",
    line: "If you did not poop on the brick, what did you just poop on?"
  },
  {
    name: "",
    line: "It's certainly not the litterbox as it's still everso distant from you"
  },
  {
    name: "",
    line: "...you look down"
  },
  {
    name: "Sofia",
    line: "!!!"
  },
  {
    name: "",
    line: "Atop the pile of clothes you just dumped on, the mass of a human body is buried in it"
  },
  {
    name: "",
    line: "That body is nothing more than a corpse. Claw marks on his face and a blunt bruise to its head"
  },
  {
    name: "",
    line: "Blood trails from his head to the brick"
  },
  {
    name: "",
    line: "The toilet you stand on is none other than the owner of the house..."
  },
  {
    name: "",
    line: "Ryan. Bloodied to the head up and now covered in the stench of tuna feces"
  },
  {
    name: "",
    line: "FLASHBACK"
  },
  {
    name: "",
    line: "You remember as Ryan was blasting the Sofia the First opening in the kitchen"
  },
  {
    name: "",
    line: "You had climbed on top of the fridge for tuna cans but fell down"
  },
  {
    name: "",
    line: "Your owner Ryan had caught you but you scratched his face on the way down"
  },
  {
    name: "",
    line: "You scampered off to the front yard to lay in the grass afterwards"
  },
  {
    name: "",
    line: "You locked yourself out with the front door being auto locked"
  },
  {
    name: "",
    line: "You were forced to watch the commotion inside the house as the brick atop the fridge fell onto Ryan's head"
  },
  {
    name: "",
    line: "As Ryan brought the brick and himself over to the living room area, he collapsed"
  },
  {
    name: "",
    line: "After witnessing the horror inside, Sofia the cat also collapsed and fainted"
  },
  {
    name: "",
    line: "You quickly return to your senses after remembering this horrible memory"
  },
  {
    name: "Sofia",
    line: "I GOTTA GET OUT OF HERE"
  },
  //39
  {
    name: "",
    line: "You run back outside"
  }
]
textAlign(CENTER);
fill(255);
textFont('Calibri');
textSize(24);
text(dialogue[i].name, width / 2, height - height / 3 - 2);
textSize(18);
rectMode(CENTER);
text(dialogue[i].line, width / 2, height - height / 5.3, 425, 100);
}
function textScene5(){
  let dialogue = [{
    name: "Sofia",
    line: "That house is long done for"
  },
  {
    name: "Sofia",
    line: "But I still haven't remembered everything about myself..."
  },
  {
    name: "Sofia",
    line: "Hmm..."
  },
  //3
  {
    name: "",
    line: "Very quickly your life escalated as you returned to the house"
  },
  {
    name: "",
    line: "Animal control and the police accessed the crime scene that you just dookied over"
  },
  {
    name: "",
    line: "They apprehend you as well as the corpse of your former owner"
  },
  {
    name: "",
    line: "You live the rest of your life under complete detainment, forever fragmented by the memories you'll never recover"
  },

  {
    name: "",
    line: "You leave the once familiar home behind you along with any memories that had a glimmer of hope of being remembered"
  },
  {
    name: "",
    line: "Nothing can be said whether this is karma and atonement for the former cat you once were..."
  },
  //9
  {
    name: "",
    line: "Days on end you continue to walk new streets, with every step forever burning an unrealized memory"
  },
  {
    name: "",
    line: "One day, you finally burned out the former cat that was once you."
  },
  {
    name: "",
    line: "You live a new life unbeknownst to what your former self would have imagined"
  }
]
textAlign(CENTER);
fill(255);
textFont('Calibri');
textSize(24);
text(dialogue[i].name, width / 2, height - height / 3 - 2);
textSize(18);
rectMode(CENTER);
text(dialogue[i].line, width / 2, height - height / 5.3, 425, 100);
}


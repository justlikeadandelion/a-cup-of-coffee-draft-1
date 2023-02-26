class Coffee {
  constructor() {
    this.w = 300;
    this.h = 300;
    this.wSmall = 100;
    this.hSmall = 100;
    this.wSmallSmall = 80;
    this.hSmallSmall = 70;
    this.plus = 40;

    this.r = 50;
    this.g = 50;
    this.b = 255;
    this.rCoffee = 100;
    this.gCoffee = 100;
    this.bCoffee = 100;
  }
  show() {
    this.x = mouseX;
    this.y = mouseY;
    rectMode(CENTER);
    noStroke();
    fill(this.r, this.g, this.b);
    //main cup
    rect(this.x, this.y, this.w, this.h);
    
    //holder
    rect(
      this.x + this.w / 2 + this.wSmall / 2,
      this.y,
      this.wSmall,
      this.hSmall
    );

    //black hole
    fill(0);
    rect(
      this.x + this.w / 2 + this.wSmallSmall / 2,
      this.y,
      this.wSmallSmall,
      this.hSmallSmall
    );

    //inside coffee //จุดขวาล่าง จุดซ้ายบน
    fill(this.rCoffee, this.gCoffee, this.bCoffee, 220); 
    rectMode(CORNERS);
    rect(
      this.x + this.w / 2 - 20,
      this.y + this.h / 2 - 20,
      this.x - this.w / 2 + 20,
      this.y - this.h / 2 + 20 + this.plus
    );
  }
  click() {
    // background(0);
    this.x = mouseX;
    this.y = mouseY;
    this.w = random(50, 400);
    this.h = random(50, 400);
    this.r = random(50,255);
    this.g = random(50,255);
    this.b = random(50, 255);
    // rectMode(CENTER);
    // noStroke();
    // fill(this.r, this.g, this.b);
    // rect(this.x, this.y, this.w, this.h);

    this.wSmall = random(this.w * 0.3, this.w * 0.7);
    this.hSmall = random(this.h * 0.3, this.h * 0.7);
    // rect(
    //   this.x + this.w / 2 + this.wSmall / 2,
    //   this.y,
    //   this.wSmall,
    //   this.hSmall
    // );

    this.wSmallSmall = this.wSmall - 20;
    this.hSmallSmall = this.hSmall - 30;
    // rect(
    //   this.x + this.w / 2 + this.wSmallSmall / 2,
    //   this.y,
    //   this.wSmallSmall,
    //   this.hSmallSmall
    // );

    this.plus = random(0, this.h - 40);
    this.rCoffee = random(50, 150);
    this.gCoffee = random(0, 100);
    this.bCoffee = random(0, 100);
    
    // if (this.yCoffee >= this.y + this.h / 2 - 20){
    //   this.yCoffee = this.y;
    // }
    
    // fill(this.rCoffee, this.gCoffee, this.bCoffee, 220);
    // rectMode(CORNERS);
    // rect(
    //   this.x + this.w / 2 - 20,
    //   this.y + this.h / 2 - 20,
    //   this.xCoffee,
    //   this.yCoffee
    // ); 
  }
}

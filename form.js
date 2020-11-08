class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        
        this.greeting = createElement('h2');
        this.title = createElement('h2');
}
hide(){

  this.greeting.hide();
  this.button.hide();
  this.input.hide();
  this.title.hide();
  }
  display(){
    this.title.html("Intense Racing")
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.title.position(displayWidth/2 - 50, 0);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        playerName=this.input.value();
        this.greeting.html ("After 15 wins and 13 losses, Arnav is facing off against his greatest rival, " + playerName +  ", who also has 15 wins and 13 losses. Who will claim the championship title?");
        this.greeting.position(displayWidth/2 - 275,displayHeight/2 - 150);
        var button2= createButton('BEGIN GAME');
        button2.position(displayWidth/2 + 100,displayHeight/2 + 75);

        button2.mousePressed(()=>{
        this.greeting.hide();
        button2.hide();
        gameState=1;

    }
    )
        
    }
    
    )
    

}
}
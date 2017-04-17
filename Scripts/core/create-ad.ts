(function(){
let ProjectsAd:HTMLElement = document.getElementById("ProjectsAd")
let stage:createjs.Stage;
let AdText:objects.Label;
let SubText:objects.Label;
let adButton:objects.Button;
/**
 * 
 * @method Start
 * @returns void
 */
function Start(){
    stage = new createjs.Stage(ProjectsAd);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);
    stage.enableMouseOver(15);
    Main();
}
/**
 * 
 * @method Update
 * @returns void
 */
function Update(event:createjs.Event):void {
   
    stage.update();
}
/**
 * 
 * @method Main
 * @returns void
 */

function Main():void{
    console.log("This is my Portfolio!");

    AdText = new objects.Label("See my Project Work!","25px", "Times", "blue", 125, 15, true);

    stage.addChild(AdText);

    SubText = new objects.Label("Logo Designs | Web Development | PHP | Java Script | Adobe Applications", "12px", "Arial", "white", 235, 50, true);
    stage.addChild(SubText);

    adButton = new objects.Button("Assets/Images/ad_button.png", true, 75, 20, 380, 20);
    stage.addChild(adButton); 

}
window.onload = Start;
})();
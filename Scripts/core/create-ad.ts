(function(){
let ProjectsAd:HTMLElement = document.getElementById("ProjectsAd");
let stage:createjs.Stage;
let AdText:objects.adText;
let SubText:objects.adText;
let adButton:objects.Button;
/**
 * 
 * @method Start
 * @returns void
 */
function Start(){


    stage = new createjs.Stage(ProjectsAd);
    createjs.Ticker.framerate = 30;
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
  SubText.x = SubText.x - 3;
if (SubText.x < -200) { SubText.x = 650; }
    stage.update();
}
/**
 * 
 * @method Main
 * @returns void
 */

function Main():void{
    console.log("This is my Portfolio!");

    AdText = new objects.adText("See my Project Work  --->","25px", "Arial", "blue", 175, 15, true);
    stage.addChild(AdText);

    SubText = new objects.adText("Logo Designs | Web Development | PHP | Java Script | Adobe Applications", "12px", "Arial", "white", 235, 50, true);
    stage.addChild(SubText);

    adButton = new objects.Button("Assets/Images/ad_button.png", true, 75, 20, 380, 20);
    stage.addChild(adButton); 

    adButton.on("click", function(event:createjs.MouseEvent){
        window.location.replace("portfolio.html")
    })

}
window.onload = Start;
})();
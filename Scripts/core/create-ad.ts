(function(){
let ProjectsAd:HTMLElement = document.getElementById("ProjectsAd")
let stage:createjs.Stage;
let AdText:objects.Label;
let SubText:objects.Label;
/**
 * 
 * @method Start
 * @returns void
 */
function Start(){
    stage = new createjs.Stage(ProjectsAd);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update)
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

    AdText = new objects.Label("See my Project Work!","25px", "Times", "lime", 235, 15, true);

    stage.addChild(AdText);

    SubText = new objects.Label("Logo Designs | Web Development | PHP | Java Script | Adobe Applications", "12px", "Arial", "white", 225, 50, true);
    stage.addChild(SubText);

}
window.onload = Start;
})();
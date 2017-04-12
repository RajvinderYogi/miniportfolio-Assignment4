(function(){
let ProjectsAd:HTMLElement = document.getElementById("ProjectsAd")
let stage:createjs.Stage;
let AdText:createjs.Text;
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
    // AdText.rotation += 1;
    AdText.x += 0.1;
    AdText.y -= 0.1;
    stage.update();
}
/**
 * 
 * @method Main
 * @returns void
 */

function Main():void{
    console.log("This is my Portfolio!");

    AdText = new createjs.Text("See my Project Work!","50px Times", "lime");
    AdText.textBaseline = "hanging";
    AdText.regX = AdText.getMeasuredWidth()*0.5;
    AdText.regY = AdText.getMeasuredHeight()*0.5;
    AdText.y=35;
    AdText.x=230;
    stage.addChild(AdText);

}
window.onload = Start;
})();
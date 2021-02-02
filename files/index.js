window.onload = function(){
  var name = document.getElementById('name');

  if(name.offsetWidth < name.scrollWidth) {
    $("#music-info").hover(function(){
        document.getElementById('name-scroll').style.display = "inline block";
        name.style.display = "none";

      }, function(){
        name.style.display = "";
    });
  }

  determineVolumeIcon();
  new Audio('C:\Users\Zakariya Sattar\Downloads\MediaHuman\Music\Sosa Montana · Lil Uzi - Srt!').play()

function togglePlayPause(x) {
  x.style.display = "none";

  if(x.className == "fa fa-play") {
    document.getElementById('pause-button').style.display = "";
  }
  else {
    document.getElementById('play-button').style.display = "";
  }
}

function determineVolumeIcon() {

}

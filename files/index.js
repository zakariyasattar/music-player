window.onload = function(){

  document.onkeypress = function (e) {
    e = e || window.event;
    if(e.keyCode == 13 || e.keyCode == 32) {
      togglePlayPause();
    }
  };

  var name = document.getElementById('name');

  if(name.offsetWidth < name.scrollWidth) {
    $("#music-info").hover(function(){
        document.getElementById('name-scroll').style.display = "inline block";
        name.style.display = "none";

      }, function(){
        name.style.display = "";
    });
  }

  $("#volume").hover(function(){
    console.log("hello")
      document.getElementById('vol-control').style.display = "";
    }, function(){
      document.getElementById('vol-control').style.display = "none";
  });

};

var song = new Audio('/Users/zakariyasattar/Music/iTunes/iTunes Media/Music/Playboi Carti/Unknown Album/Pop Up (Remastered) [BEST VERSION].mp3');

function togglePlayPause() {
  var x;
  if(document.getElementById('pause-button').style.display != "none") {
    x = document.getElementById('pause-button');
  }
  else {
    x = document.getElementById('play-button');
  }

  if(x.className == "fa fa-play") {
    document.getElementById('pause-button').style.display = "";
    document.getElementById('play-button').style.display = "none";
    song.play();
    song.volume = document.getElementById("vol-control").value/100
  }
  else {
    document.getElementById('play-button').style.display = "";
    document.getElementById('pause-button').style.display = "none";
    song.pause();
  }
}

function setVolume(volume) {
  song.volume = volume / 100;
}

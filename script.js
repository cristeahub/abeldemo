window.onload = function() {

  var text = document.getElementById("text");
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");
  var img4 = document.getElementById("img4");

  text.innerHTML = "Welcome to old skool!";
  text.right = "50%";
  text.style.fontSize = "5em";

  var start = function() {
    setTimeout(function() {
      img4.style.display = "none";
      img1.style.display = "block";
      document.body.style.background = "#000";
      setTimeout(function() {
        img1.style.display = "none";
        img2.style.display = "block";
        setTimeout(function() {
          img2.style.display = "none";
          img3.style.display = "block";
          setTimeout(function() {
            img3.style.display = "none";
            img4.style.display = "block";
          }, 3000);
        }, 3000);
      }, 3000);
    }, 3000);
  };
  start();

  setTimeout(function() {
    text.innerHTML = "We are Web 1.0";
    text.style.fontSize = "4em";
    text.style.right = "50%";
    setTimeout(function() {
      text.innerHTML = "We are Legion";
      text.style.fontSize = "4em";
      text.style.right = "50%";
      setTimeout(function() {
        text.innerHTML = "We used at least an hour on this demo";
        text.style.fontSize = "4em";
        text.style.right = "20%";
        text.style.top = "10%";
      }, 3000);
    }, 3000);
  }, 3000);

  setTimeout(function() {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";

    document.body.style.background = "#f0f";
    text.style.right = "10%";
    text.style.top = "10%";

    text.innerHTML = "AbelLan feb 2014";
    setTimeout(function() {
      text.innerHTML = "Shoutouts to Ninjadev & AbelLan Crew!";
      setTimeout(function() {
        text.style.top = 150;
        text.style.right = 200;
        text.innerHTML = "Bitsy Juice and Overflow In Yo Ass out! The demo is over now";
      }, 5500);
    }, 5500);
  }, 32500);

  var video = document.createElement('video');
  video.setAttribute('src', 'video3.mp4');
  var teletubbies = document.createElement('video');
  teletubbies.setAttribute('src', 'teletubbies.mp4');
  setTimeout(function() {
    text.style.display = 'none';
    document.body.appendChild(video);
    video.play();
    video.onended = function(e) {
      /*Do things here!*/
      video.style.display = 'none';

      document.body.appendChild(teletubbies);
      teletubbies.play();
      teletubbies.onended = function(e) {
        /*Do things here!*/
        document.body.removeChild(teletubbies);
        text.style.display = 'block';
      }
    }
  }, 14000);

  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'music.mp3');
  audioElement.play();
};

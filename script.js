window.onload = function() {

  var text = document.getElementById("text");
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");
  var img4 = document.getElementById("img4");

  text.innerHTML = "Welcome to old skool!";

  var start = function() {
    setTimeout(function() {
      img4.style.display = "none";
      img1.style.display = "block";
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
  setInterval(start, 12001);

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
        text.style.right = "50%";
        text.style.top = "50%";
      }, 3000);
    }, 3000);
  }, 3000);


};


var reasons = [
    "Dad",
    "Me",
    "Mom",
  
  ];
  var images = [
   "https://media.gettyimages.com/photos/business-man-working-from-home-picture-id913359022?k=20&m=913359022&s=612x612&w=0&h=sO5Rhj7mtQQYi5kzCnbwACsw4WqkOIDWlOB_kYY3e8k=",
    "https://media.gettyimages.com/photos/portrait-of-smiling-boy-with-curly-brown-hair-picture-id142841694?k=20&m=142841694&s=612x612&w=0&h=jlV9g39t1Ly4-YmDWxHP6grnxF-q-DF7VK-GEJ_p1rU=",
    "https://media.gettyimages.com/photos/studio-waist-up-portrait-of-a-beautiful-businesswoman-with-crossed-picture-id1180926773?k=20&m=1180926773&s=612x612&w=0&h=GDpHprMlxwBoiBGgVAIDEQNfpMyHhy3-pu6pOw8H650="
  ];
  
  var i = 0;
  function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
                        document.getElementById("audio").play();
   
  }
  
  
  
  
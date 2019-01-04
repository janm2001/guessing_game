let randomNum = Math.floor((Math.random() *5)+1);

function game(){
  
let computer = document.getElementById("computerNumber").innerHTML = randomNum;
document.getElementById("computerNumber").innerHTML = randomNum;
  
  let numG= document.getElementById("number").value;
  
  if(randomNum == numG){
    
    alert("YOU AND COMPUTER GUESSED THE SAME NUMBER:DO THE CHALLENGE!!!");
    
  }else{
    
    alert("You did not guessed the same number!");
  }

  
}

function restart(){
  document.getElementById("computerNumber").innerHTML = "";
  randomNum = Math.floor((Math.random() *5)+1);
  let texts= ["Ask a girl you like on a date","Do 5 pull up","Eat a little bit of paper","No nut for a week","sing your favorite song in public for 30 second really loud"];
  let rNum =Math.floor(Math.random() *5);
  document.getElementById("text").innerHTML= texts[rNum];
  let imgs = ["https://media0.mensxp.com/media/content/2013/May/1369380896_36578.jpg","https://mikereinold.com/wp-content/uploads/rookie-mistakes-the-pullup-main.jpg","https://4.bp.blogspot.com/-XceoIhXpUMU/UGh11WNpe7I/AAAAAAAAB_k/iB7m86hS4bU/s1600/guy-eating-paper-in-frustration-small.jpg","https://pbs.twimg.com/profile_images/925791296727416832/UvUy7vxk_400x400.jpg","http://www.voicercise.com/wp-content/uploads/AAEAAQAAAAAAAAC4AAAAJGUzMTg0OTE1LTlmZjItNGUyMC1hYTQ1LWUxY2Q0OTAyYzUzNw.jpg"];
  document.getElementById("img").src = imgs[rNum];
}



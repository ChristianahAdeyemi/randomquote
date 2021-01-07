//random quotes generator
function ck(){
    var quotes =[
      ["Impossible is nothing"],
      ["You can do anything you put your mind to"],
      ["Be different. Be an anomaly"],
      ["Love is a beautiful thing"],
      ["Be you. Everyone else is already taken"],
      ["Let people leave you feeling better than when they came"],
      ["Forgive and let go once said an old soul"],
      ["You need to take that first step before you see the stairway. Be brave"],
      ["Live Love Laugh"],
    ]
     var general =quotes[Math.floor(Math.random() * quotes.length)];
    
    document.getElementById("yola").innerHTML = general; 
    }
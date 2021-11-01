

const callback = function(entries) {
    entries.forEach(entry => {
        
        if(entry.isIntersecting){
            switch(entry.target.id){
                case "red":
                    entry.target.childNodes[1].classList.add('title-centered');
                    entry.target.childNodes[3].classList.add('video-centered');
                    break;
            }
            
        }else{
            switch(entry.target.id){
                case "red":
                    entry.target.childNodes[1].classList.remove('title-centered');
                    entry.target.childNodes[3].classList.remove('video-centered');
                    break;
            }
            
        }
    });
  };
  
  const observer = new IntersectionObserver(callback,options = {threshold: 0.5});

  const targets = document.querySelectorAll(".target-object");

  targets.forEach(function(target) {
    observer.observe(target);
  });
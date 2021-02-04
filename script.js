let surprise = document.querySelectorAll(".surprise");
let c = 1;

for (let i = 0; i < surprise.length; i++) { 
  surprise[i].addEventListener("click", function() {
      let iframe = document.createElement("iframe");
          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute("allowfullscreen", "");
          iframe.setAttribute("src", "https://player.vimeo.com/video/"+ this.dataset.embed + "?autoplay=1&muted=" + c);    
          this.innerHTML = "";
          this.appendChild(iframe);
  } );
}
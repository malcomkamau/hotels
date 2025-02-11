var savedTheme;
var toggle_btn;
var big_wrapper;
var main;

function declare() {
    savedTheme = localStorage.getItem('theme');
    toggle_btn = document.getElementById('theme-toggle');
    big_wrapper = document.querySelector('.container');
    main = document.querySelector(".main");
}

let dark = false;

function toggleAnimation() {
    // Clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if (dark) {
      clone.classList.remove("light");
      clone.classList.add("dark");
    } else {
      clone.classList.remove("dark");
      clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);
  
    document.body.classList.add("stop-scrolling");
  
    clone.addEventListener("animationend", () => {
      document.body.classList.remove("stop-scrolling");
      big_wrapper.remove();
      clone.classList.remove("copy");
      // Reset Variables
      declare();
      events();
    });
  }
  
  function events() {
    toggle_btn.addEventListener("click", toggleAnimation);    
  }
  
  events();
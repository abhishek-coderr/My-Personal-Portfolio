
// for HELLO texts
const typed = new Typed('.wel_sub', {
  strings: ['Hello','नमस्ते', 'Halo','ਸਤ ਸ੍ਰੀ ਅਕਾਲ'],
  typeSpeed: 50,
  backSpeed: 60,
  showCursor: false
});
document.addEventListener('DOMContentLoaded', () => {
  typed;
});
// for HELLO slide up

document.addEventListener("DOMContentLoaded", function() {
  var welcome = document.querySelector(".welcome");
  var wel_sub = document.querySelector(".wel_sub");
  var height = window.innerHeight;
  welcome.style.height = height + 'px';
  wel_sub.style.opacity = 1;
  window.setTimeout(function() {
    welcome.style.transition = 'height 1s';
    welcome.style.height = '0';
    wel_sub.style.opacity = 0;
  }, 7000);
});

setTimeout(() => {
  let body=document.querySelector('body');
  body.style.overflow='scroll';
}, 7000);

function uncheck() {
  let Checkbox = document.getElementById("click");
  Checkbox.checked = false;
}

// for CONTACT FORM
let object = false;
function transit(){
    let o = document.getElementById('O')
    object = object ? false : true;
    o.setAttribute('class',object ? "O2" : '')
    
    let f = document.getElementsByClassName('init')
    f[0].setAttribute('class',object ? "init openForm" : 'init')

    let Otext = document.getElementById('helptext');
    Otext.setAttribute('class',object ? 'Otext_' : 'Otext')
}

// for NAV BAR BG
function topFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.requestAnimationFrame(topFunction);
    window.scrollTo(0, window.scrollY - window.scrollY / 8);
  }
  }

let topbtn = document.getElementById("topbtn");
let nav_bar = document.getElementById("nav_bar");
let main2 = document.getElementById("main2");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    topbtn.style.display = "block";
    topbtn.style.transition="all 0.4s ease 0s";
    nav_bar.style.backgroundColor="#1c1d20";
    nav_bar.style.height="10vh";
    nav_bar.style.boxShadow="0px 5px #334bd3";
    nav_bar.style.transition="all 0.4s ease 0s";
    

  } 
  else {
    topbtn.style.display = "none";
    nav_bar.style.height="12vh";
    nav_bar.style.boxShadow="none";
    nav_bar.style.removeProperty("background-color");
    
  }
}


// for fetching PROJECTS
var flag=0;
let main3=document.getElementById('main3');
let grid_container=document.createElement('div');
grid_container.setAttribute("class","grid_container")
//codersgyan abhishek-coder
fetch('https://api.github.com/users/abhishek-coderr/repos')
.then(response => response.json())
.then(data => {
  let id = 0;
    const repoDetails = data.map(repo => {
      if ((repo.name == "My-Personal-Portfolio")|(repo.name == "abhishek-coderr")) {
        return null;
      }
      const result = {
        id: id,
        name: repo.name,
        description: repo.description
      };
      id++;
      return result;
    }).filter(repo => repo !== null);
    
     for (i = 0; i < repoDetails.length; i++){
      
    let div=document.createElement('div');
    let img=document.createElement('img');
    let div2=document.createElement('div');
    div2.setAttribute("class", "container")
    let p=document.createElement('p');
    p.style.fontWeight='800';
    
       p.innerHTML =repoDetails[i].name;
       let link=repoDetails[i].name;
       add_model(repoDetails[i],div2);
       img.setAttribute("src", `https://raw.githubusercontent.com/abhishek-coderr/${link}/main/img.jpg`);
       img.style.width="100%";
       img.style.height="100%";
       img.style.border="2px solid black"
       img.style.borderRadius="10px";
       img.style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
       
       div.append(p)
      div2.append(img, div)
      grid_container.append(div2);
      main3.append(grid_container);
      }

      function modal(a,b){
        let modal =document.createElement('div');
       modal.setAttribute('class', "modal")
       let modal_child =document.createElement('div');
       modal_child.setAttribute('class', "modal_child")
       let cancel =document.createElement('i');
       cancel.setAttribute('id', "cancel")
       cancel.setAttribute('class', "fa-solid fa-circle-xmark")
       remove_modal(cancel,modal);
       let title =document.createElement('div');
       title.textContent = a;
       title.setAttribute('class', "title")
       let about =document.createElement('div');
       about.textContent= b;
       about.setAttribute('class', "about")
       let preview =document.createElement('button');
       preview.setAttribute('class', "preview")
       preview.textContent = "Preview";
       preview.addEventListener('click',()=>{window.open(`https://abhishek-coderr.github.io/${a}/`, '_blank')});
       let code =document.createElement('button');
       code.setAttribute('class', "code")
       code.textContent = "Source Code";
       code.addEventListener('click',()=>{window.open(`https://github.com/abhishek-coderr/${a}`, '_blank')});       
       modal_child.append(cancel,title,about,preview,code)
       modal.append(modal_child)
       main3.appendChild(modal);
      }

       function add_model(arr, ddiv){
        ddiv.addEventListener('click',()=>{
          if(flag===0){
            modal(arr.name,arr.description);

            flag=1;
          }
        })
       }

       function remove_modal(cancel,Mdiv){
        cancel.addEventListener('click',()=>{
         Mdiv.remove();
         flag=0;
        })

        
       }

  })
  .catch(error => alert("Facing Issue In retrieving Projects, Kindly Submit the Response 😊"));


// for CONTACT FORM
function Mail(){
  var name=document.getElementById('name1').value;
  var email=document.getElementById('email').value;
  var sub=document.getElementById('subject').value;
  var msg=document.getElementById('msg').value;

  Email.send({
    SecureToken : "f5d9bb66-4a42-4f1c-91ae-b7879943d473",
    To : 'abhishek1029sain@gmail.com',
    From : "1029abhishek@gmail.com",
    Subject : "Mail from PPF",
    Body : "Name Of Sender : "+name+ "<br/> Email : " +email+ "<br/> Subject : " +sub+ "<br/> Message : " +msg
}).then(
  message => alert("Response Sent")
);
}

function status(){
  var name=document.getElementById('name1')
  var email=document.getElementById('email')
  var sub=document.getElementById('subject')
  var msg=document.getElementById('msg')
  var ok=document.getElementById('res_ok')
  var failed=document.getElementById('res_failed')

  if(name.value === '' || email.value === '' || sub.value === '' || msg.value === '' ){
    failed.style.display='block';
  }
  else{
    setTimeout(()=>{
      name.value="";
      email.value="";
      sub.value="";
      msg.value="";
    }, 2000);

    ok.style.display='block'
  }

  setTimeout(()=>{
    ok.style.display='none'
    failed.style.display='none'
  }, 4000)
}

// Preventing Inspect and right click
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = (e) => {
  if (e.key == 123) {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'I') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'C') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'J') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.key == 'U') {
      e.preventDefault();
  }
};
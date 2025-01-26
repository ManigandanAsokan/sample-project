function G(i) { return document.getElementById(i) }
function Q(i) { return document.querySelector(i) }
function Qa(i) { return Array.from(document.querySelectorAll(i)) }
function q(a,i) { return a.querySelector(i) }
function qa(a, i) { return Array.from(a.querySelectorAll(i)) }
function ajax(u,f, e){
  let x = new XMLHttpRequest();
  x.open('GET',u,true);e = e ? e : function(){console.log('Error');};
  x.onreadystatechange = function(){
    (x.readyState == 4 &&  x.status == 200) ? f(x.response) : e();
  }
  x.send();
}

function country() {
  return {
    "canada": {
      "name": "Event 1", "slide": "countryimag/col1.jpg",
      "flag": "canada.svg", "thumb": "26-1.jpg",
      "p": "Canada is a beautiful country occupying the northernmost region of the North American ..."
    },
    "uae": {
      "name": "Event 2", "slide": "countryimag/col1.jpg",
      "flag": "uae.svg", "thumb": "26-2.jpg",
      "p": "The UAE education system is divided into three categories, i.e. public schools, private schools ..."
    },
    "singapore": {
      "name": "Event 3", "slide": "countryimag/col1.jpg",
      "flag": "singapore.svg", "thumb": "26-3.jpg",
      "p": "In Singapore, the system includes six years of primary school, followed by four to six ... "
    },
    "malaysia": {
      "name": "Event 4", "slide": "countryimag/col1.jpg",
      "flag": "malaysia.svg", "thumb": "26-4.jpg",
      "p": "Malaysia is both a big sender and big receiver of international students, although inward ..."
    },
    "australia": {
      "name": "Event 5", "slide": "countryimag/col1.jpg",
      "flag": "australia.svg", "thumb": "26-5.jpg",
      "p": "The education system in Australia is three-tiered with primary, secondary and ..."
    },
    "new_zealand": {
      "name": "Event 6", "slide": "countryimag/col1.jpg",
      "flag": "New_z.svg", "thumb": "26-6.jpg",
      "p": "We welcome different abilities, religious beliefs, ethnic groups, income levels and ideas ..."
    },
    "uk": {
      "name": "Event 7", "slide": "countryimag/col1.jpg",
      "flag": "uk.svg", "thumb": "26-7.jpg",
      "p": "The education system in the UK is divided into four main parts, primary education, secondary ..."
    },
    "poland": {
      "name": "Event 8", "slide": "countryimag/col1.jpg",
      "flag": "poland.svg", "thumb": "26-8.jpg",
      "p": "Poland has a long and proud tradition of keeping educational institutions available for..."
    },
    "hungary": {
      "name": "Event 9", "slide": "countryimag/col1.jpg",
      "flag": "hungary.svg", "thumb": "26-9.jpg",
      "p": "Education in Hungary is compulsory between the ages of 6 and 16. The child may have had the ..."
    },
    "sweden": {
      "name": "Event 10", "slide": "countryimag/col1.jpg",
      "flag": "sweden.svg", "thumb": "26-10.jpg",
      "p": "The Swedish state school system comprises compulsory school and various types of voluntary ..."
    },
    "germany": {
      "name": "Event 11", "slide": "countryimag/col1.jpg",
      "flag": "germany.svg", "thumb": "26-11.jpg",
      "p": "The state runs most German schools and they are free to attend. However, parents can also opt ..."
    },
    "slovakia": {
      "name": "Event 12", "slide": "countryimag/col1.jpg",
      "flag": "slovakia.svg", "thumb": "26-12.jpg",
      "p": "The education systems in the Czech Republic and Slovakia have a lot in commondue to the ..."
    },
    
  
 }
}
window.onscroll = function(){
  let y = window.scrollY, distance = window.innerHeight / 2;
  Qa('.anime').map(i => {
    let t = i.offsetParent.nodeName === 'BODY' ? i.offsetTop : i.offsetParent.offsetTop + i.offsetTop, t1;
    t1 = t - distance - 300; if (t1 < y) { i.classList.add('active'); i.classList.remove('anime');}
  });
  Q('header').classList[y > distance ? 'add' : 'remove']('a');
}
function gcc(){
  return `<li><a href="#">Arts</a></li>
      <li><a href="#">Science</a></li>
      <li><a href="#">Engineering</a></li>
      <li><a href="#">Diploma</a></li>
      <li><a href="#">Agriculture</a></li>
      <li><a href="#">Catering</a></li>`
}
function swe(){
  return `<li><a href="./country.html?poland">Poland</a></li>
      <li><a href="./country.html?malta">Malta</a></li>
      <li><a href="./country.html?hungary">Hungary</a></li>
      <li><a href="./country.html?lithuania">Lithuania</a></li>
      <li><a href="./country.html?sweden">Sweden</a></li>
      <li><a href="./country.html?portugal">Portugal</a></li>
      <li><a href="./country.html?germany">Germany</a></li>
      <li><a href="./country.html?latvia">Latvia</a></li>
      <li><a href="./country.html?slovakia">Slovakia</a></li>`
}
function ero(){
  return  ` <li><a href="#">chennai</a></li>
      <li><a href="#">Thanjavur</a></li>
      <li><a href="#">Coimbatore</a></li>
      <li><a href="#">Trichy</a></li>
      <li><a href="#">Kumbakonam</a></li>`
}

function links(){
  return `<li><a href='./home2.html'>Home</a></li>
  <li><a href='./about.html'>About</a></li>
  <li><a href="gallery.html">gallery</a></li>
<li>
    <a href="#">Department</a>
    <ul class="mega">
      
      ${gcc()}
    </ul>
  </li>
  <li>
    <a href="#"></a> 
    <ul>
     ${ero()}
    </ul>
  </li>
 
  <li><a href='./services.html'>Services</a></li>`;
  
}
Q('header').innerHTML = `<div class="container">
<div class="main-nav">
  <a href="./" class="logo">
    <img src="flying logo copy.png" style="width:120px;" alt="">
    <h3 class="ing" style="margin-top:-90px; margin-left:100px; color:black;">Welcome To Our College</h3>
  </a>
  <button id="bor" class="fa fa-bars" ></button>
  <nav>
   <ul class="nav nav-bar" id="nav1">
      ${links()}<li><a href="./contact.html">Contact</a></li>

   
   
  
      <li><button class="btn btn-action" style="background-color: #FFC059;font-weight: 800;
  ;cursor:pointer;margin-top:-10px;color:black;" id = "registerBtn">Register </button></a></li>
 
</li>
    </ul>
  </nav>
   
</div>
</div>`;

G("bor").onclick = function(){
  G("nav1").classList.toggle('active');
  G('bor').classList.toggle('fa-bars');
  G('bor').classList.toggle('fa-times');
}
document.body.insertAdjacentHTML('afterbegin',`<a href="https://api.whatsapp.com/send?phone=9790763669" target="_blank" class="whatsapp"><i class="fab fa-whatsapp"></i></a>`)
Q('footer').innerHTML = ` <div class='row justify-content-between w-100 foot-top'>
<div class='col-md-4 col-12.f-pad1'>
  <div class='single-footer-widget w1' style="padding-right: 1em;">
    <div class='our-company-info'>
      <h4 class='footer-logo title'>About Us</h4>
      <div class='text'><p>We support immigration and make it smooth for the people who need it. The world becomes richer when people freely move from one culture to another to enrich each other!
        STAY CONNECTED</p></div> 
    </div>      
  </div>
</div>
<div class='col-md-4 col-12.f-pad2'>
  <div class='single-footer-widget w2'>
      <h4 class='title'>Useful Links</h4>
      <ul class='countries-links df fw p-0 nav-bar'>
        ${links()}
      </ul>
      <div class="df aic jcsb" style="border-top:1px solid #fff5;padding-top: 5px;">
        <h5 style="margin: 0;padding-right:1rem;">Follow Us</h5>
        <div id="footer_social">
<a target="_blank" href="https://www.facebook.com/FlyingWorldMigration" class="fab fa-facebook-f"></a>
      <a target="_blank" href="https://www.instagram.com/flyingworldmigration/" class="fab fa-instagram"></a>
      <a target="_blank" href="https://twitter.com/FlyingworldMigration" class="fab fa-twitter"></a>
      <a target="_blank" href="#" class="fab fa-linkedin"></a>
</div>
      </div>
  </div>
</div>
<div class='col-md-4 col-12.f-pad3'>
  <div class='single-footer-widget w3'>
    <h4 class='title'>Contact</h4>
    <ul class='footer-contact-info'>
      <li>
        <span class='ficon fa fa-globe'></span>
        <div class='text'>No.27, Wast Mada Street,Thirumullaivoyal, Chennai, Thiruvallur,
        Tamil Nadu, 600062.</div>
      </li>
      <li>
        <span class='ficon fa fa-envelope'></span>
        <a class='text' href='mailto:info@flyingworldmigration.com'>gcwk@gmail.com</a>
      </li>
      <li class='df jscb'>
        <div style='margin-right:10px;'>
    <span class='ficon fas fa-mobile-alt'></span>
    <a class='text' href='te:+919790763669'>+91 97907 63669</a>
  </div>
      </li>
    </ul>                  	  
  </div>
</div>
</div>
<hr>
<div class='copy tac'>
Flying World Migration © 2022 All Right Reserved <a href='#'>TechJe Team </a>
</div>`;



function homeSlide(data){
  let ar =[],i=0;
  for(let id in data){
    let o =data[id];
    ar.push(
      ` <div class="carousel-item ${i===0?'active':''}">
        <img src="${o.slide}" class="d-block w-100" alt="">
        <div class="carousel-caption d-none d-md-block">
          <p>Welcome To Our College</p>
       
          <div class="button-1">
            <a href="#" class="btn btn-primary" id="myModal">Fix You Apointments</a>
          </div>
         
        </div>
      </div>`
      );
   
  }
  G('home_slide').innerHTML =ar.join('');
}



function renderSlide(data){
  let ar = [];
  for(let id in data){
    let o = data[id];
    ar.push(
      `<li class="splide__slide">
         <div class="coun-body">
          <div class="coun-card">
            <img class="coun-img" src="img/thumb/${o.thumb}" alt="">
            <img class="coun-icon" src="flag/${o.flag}" alt="">
          </div>
          <div class="coun-text">
              <h4>${o.name}</h4>
              <p>${o.p}</p>
              <a href="#">Read More</a>
          </div>
         </div>
          </li>`
    );
  }
  G('country_slide').innerHTML = `<div class="splide__track"><ul class="splide__list" >${ar.join('')}</ul></div>`;
  new Splide( '.splide1',{
      type : 'loop',perPage: 3,pagination:false,autoplay:true,
      rewind:true,rewindSpeed:4000,perMove:1,
      breakpoints:{
        900:{perPage:2},
        600:{perPage:1},

      
      }
    } ).mount();
}

function message(e) {
   e.preventDefault();
   let f = e.target, ip = qa(f, '[name]'), bt = q(f, 'button'),o = {};
   bt.disabled = true;
   o.type = f.dataset.type;
   ip.map(v => {o[v.name] = v.value;});
   ajax('mail.php', `o=${JSON.stringify(o)}`).then(function (res) {
     let r = JSON.parse(res);bt.disabled = false;
     if (r.c) {f.reset(); }
     alert(r.m);
   });
}


if (document.forms[0]) { document.forms[0].onsubmit = message }

if(document.body.id === 'country_page'){
  let e = document.querySelector(`.sidebar [href="./country.html${location.search}"]`);
  let k = e.classList.contains('se') ? e.parentElement : e.parentElement.parentElement.parentElement;console.log(k);
  k.classList.add('act');
}


document.addEventListener('DOMContentLoaded', function () {
  let loader = Q('.loader-wrap');
  loader.classList.add('anim');
  setTimeout(() => {
    loader.style.display = 'none';
    Qa('.init').map(i => { i.classList.add('active'); i.classList.remove('anime') });
  }, 500);
  let map = G('gmap');
  if (map) {
    map.onload = () => map.parentElement.classList.remove('lazy');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.406611107672!2d80.1293253141368!3d13.136732514789259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5262ef7f7f373f%3A0x60e7d318fedbc8a!2s27%2C%20W%20Mada%20St%2C%20Tirumullaivayal%2C%20Subramanya%20Bharathi%20Nagar%2C%20Thirumullaivoyal%2C%20Chennai%2C%20Tamil%20Nadu%20600062!5e0!3m2!1sen!2sin!4v1652706328458!5m2!1sen!2sin';
  }
  let data = country();
  if(G('country_slide')){renderSlide(data)}
  if(G('CLIST')){renderCList(data)}
  if(G('country_page')){c_load(data)}
  if(G('home_slide'))homeSlide(data);
});

///Register page
var modal = document.getElementById("registerModal");
var btn = document.getElementById("registerBtn");
var closeBtn = document.getElementById("closeBtn");

// When the user clicks the "Register" button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
    
}

// When the user clicks the "X" button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
var modal = document.getElementById("registerModal");
var btn = document.getElementById("registerBtn");
var closeBtn = document.getElementById("closeBtn");

// When the user clicks the "Register" button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks the "X" button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
  }

// Handle form submission (You can replace this with actual form submission logic)
document.getElementById("registerForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert("Form submitted successfully!");
    modal.style.display = "none"; // Close the modal after submission
}

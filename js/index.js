const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// IMAGE SELECTORS
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']["img-src"];

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// NAVBAR SELECTORS
let navLinks = document.querySelectorAll('nav a');

navLinks.forEach((item, index) => {
  item.textContent = siteContent['nav'][`nav-item-${index + 1}`] 
});

navLinks.forEach(item => item.style.color = 'green');

let nav = document.querySelector('nav');
let extraLinkOne = document.createElement('a');
extraLinkOne.textContent = 'Apple';
extraLinkOne.style.color = 'green';
extraLinkOne.href = '#';

let extraLinkTwo = document.createElement('a');
extraLinkTwo.textContent = 'Banana';
extraLinkTwo.style.color = 'green';
extraLinkTwo.href = '#';

nav.appendChild(extraLinkOne);
nav.appendChild(extraLinkTwo);

// HEADER SELECTORS
let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent.cta['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta['button'];

// MAIN CONTENT SELECTORS
let textHeadlines = document.querySelectorAll('h4:first-child');
textHeadlines[0].textContent = siteContent['main-content']['features-h4']; 
textHeadlines[1].textContent = siteContent['main-content']['about-h4']; 
textHeadlines[2].textContent = siteContent['main-content']['services-h4']; 
textHeadlines[3].textContent = siteContent['main-content']['product-h4']; 
textHeadlines[4].textContent = siteContent['main-content']['vision-h4']; 
textHeadlines[5].textContent = siteContent['contact']['contact-h4']; 

let textParas = document.querySelectorAll('.text-content p:last-child');
textParas[0].textContent = siteContent['main-content']['features-content'];
textParas[1].textContent = siteContent['main-content']['about-content'];
textParas[2].textContent = siteContent['main-content']['services-content'];
textParas[3].textContent = siteContent['main-content']['product-content'];
textParas[4].textContent = siteContent['main-content']['vision-content'];

let contactParas = document.querySelectorAll('.contact p');
contactParas[0].textContent = siteContent['contact']['address'];
contactParas[1].textContent = siteContent['contact']['phone'];
contactParas[2].textContent = siteContent['contact']['email'];

// FOOTER SELECTORS
let footerText = document.querySelector('footer p');
footerText.textContent = siteContent['footer']['copyright'];
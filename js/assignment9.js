const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alt = {'pic1.jpg' : 'Minions Fit', 'pic2.jpg' : 'Pic with Grandfather', 'pic3.jpg' : 'Pic with Chris', 'pic4.jpg' : 'Club Photo', 'pic5.jpg' : 'Buffs Win!'}

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `carosel_photos/${image}`);
    newImage.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
      });
    
    //newImage.addEventListener('click', src)
    //newImage.addEventListener('click', alt)
}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else if (btnClass !== 'dark') {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
    
//btn.textContent = xxx;
//overlay.style.backgroundColor = xxx;
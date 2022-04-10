const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});



const arrays = [{
  id: 1,
  img: '/dist/img/customers/dave.jpg',
  text: `Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.`,
  name: "Dave Bryson",
},
{
  id: 2,
  img: '/dist/img/customers/ben.jpg',
  text: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  name: "Ben Hadley",
},
{
  id: 3,
  img: '/dist/img/customers/steve.jpg',
  text: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  name: "Steve Miller",
},
{
  id: 4,
  img: '/dist/img/customers/hannah.jpg',
  text: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  name: "Hannah Smith",
},
];

const imgarray = [{
    id: 1,
    img: '/dist/img/gallery/gallery-1.jpg',
    
},
{
  id: 2,
  img: '/dist/img/gallery/gallery-2.jpg',
},
{
  id: 3,
  img: '/dist/img/gallery/gallery-3.jpg',
},
{
  id: 4,
  img: '/dist/img/gallery/gallery-4.jpg',
},
{
  id: 5,
  img: '/dist/img/gallery/gallery-5.jpg',
},
{
  id: 6,
  img: '/dist/img/gallery/gallery-6.jpg',
},
{
  id: 7,
  img: '/dist/img/gallery/gallery-7.jpg',
},
{
  id: 8,
  img: '/dist/img/gallery/gallery-8.jpg',
},
{
  id: 9,
  img: '/dist/img/gallery/gallery-9.jpg',
},
{
  id: 10,
  img: '/dist/img/gallery/gallery-10.jpg',
},
{
  id: 11,
  img: '/dist/img/gallery/gallery-11.jpg',
},
{
  id: 12,
  img: '/dist/img/gallery/gallery-12.jpg',
},
];

const testimonials=document.querySelector('.testimonials');
const gallery = document.querySelector('.gallery');

window.addEventListener('DOMContentLoaded',()=>{
  displayMenuItems(arrays);
  displayGalleryItems(imgarray);
});

const displayMenuItems=(menuItems)=>{
  let displayMenu=menuItems.map((item)=>{ 
  return `
  <figure class="testimonial">
              <img
                class="testimonial-img"
                alt="Photo of customer Dave Bryson"
                src=${item.img}
              />
              <blockquote class="testimonial-text">
                ${item.text}
              </blockquote>
              <p class="testimonial-name">&mdash; ${item.name}</p>
            </figure>
  `
})
  displayMenu=displayMenu.join("");
  testimonials.innerHTML=displayMenu;
}

const displayGalleryItems=(galleryItems)=>{
  let displayGallery=galleryItems.map((item)=>{ 
  return `
  <figure class="gallery-item">
            <img
              src=${item.img}
              alt="Photo of beautifully
            arranged food"
            />
            <!-- <figcaption>Caption</figcaption> -->
          </figure>
  `
})
  displayGallery=displayGallery.join("");
  gallery.innerHTML=displayGallery;
}

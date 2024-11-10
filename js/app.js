// console.log('does this work?')

// The cafe’s title is a bit too long. Select the #main-title id element and change the text to “Welcome to the Cozy Cafe”. Let’s also improve our page’s appearance by changing the text-align to center on the title as well.

const titleElement = document.querySelector('#main-title')
console.log(titleElement)
titleElement.textContent = "Welcome to the Cozy Cafe"

titleElement.style.textAlign = 'center'
titleElement.style.fontFamily = "poppins"
titleElement.style.color = '#743D2B'


// Select the body element and change the background color to a soothing pastel shade of your choice. (If you can’t think of a color, bisque, lightsteelblue, and pink are good choices.)

const bodyElement = document.querySelector ('body')

bodyElement.style.backgroundColor = '#E5D3B3'

// Select the <p> element which is meant to hold the quote of the day. Update it’s content so that it displays a quote of your choice (or use this classic: “Life happens, coffee helps.”).

const paragraphElement = document.querySelector ('.blog-post')

paragraphElement.textContent = 'Good ideas start with brainstorming. Great ideas start coffee.'

// Select all elements with the class highlight-title and change their font-style to italic. Remember, you might need to iterate through a collection of elements.


const h1Element = document.querySelector('.highlight-title')


h1Element.style.fontStyle = 'italic'
h1Element.style.fontFamily = 'poppins'
h1Element.style.color = '#743D2B'

// Let’s add a new item to the Past Menu Items list. Create a new <li> element, set the text to “Rose Cake”, and append it to the list.

const bulletElements = document.querySelector('#past-menu-items')
const newElement = document.createElement('li')
console.log(bulletElements)

newElement.textContent = 'Rose Cake'
bulletElements.appendChild(newElement)

// Select the list of Cafe Specialties and add a list item. Be sure to add content to your newly created <li></li> tags (maybe Karak Tea is on offer now?).

const SpecialtiesElements = document.querySelector('#cafe-specialties')
const newwElement = document.createElement('li')
newwElement.textContent = 'Matcha Latte'
SpecialtiesElements.appendChild(newwElement)

// Create a new blog post for a recent cafe event. You will need to create a new <div> element with the class .blog-post, a new <h3> with a relevant event title (e.g., “Karak Tea Tasting Event”), and a new <p> with some text describing the event. Make sure the new post matches the style and structure of the other blog posts. Think carefully about the order of element creation and appending.

const blogElements = document.createElement('div')
blogElements.classList.add('blog-post')

const eventT = document.createElement('h3')
eventT.textContent = 'Matcha Tasting Event'

const eventD = document.createElement('p')
eventD.textContent = "Join us for a unique and immersive experience as we explore the world of matcha!"

blogElements.appendChild(eventT)
blogElements.appendChild(eventD)

const blogMain = document.querySelector('#blogs')
blogMain.appendChild(blogElements)

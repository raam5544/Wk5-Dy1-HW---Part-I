// Copy the following data structure to the top of script.js:
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];


// Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector('main')

// Set the background color of mainElto the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg'

// Set the content of mainElto <h1>SEI Rocks!</h1>.
const head1 = document.createElement('h1')
head1.textContent = 'SEI Rocks!'
mainEl.appendChild(head1)


// Add a class of flex-ctrto mainEl.
mainEl.setAttribute('class', 'flex-ctr')

// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu')

// Set the height topMenuElelement to be 100%.
topMenuEl.style.height = '100%'

// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Add a class of flex-aroundto topMenuEl.
topMenuEl.className = 'flex-around'

// Iterate over the entire menuLinksarray and for each "link" object:

for (let i = 0; i < menuLinks.length; i++) {
    // Create an <a>element.
    const element_a = document.createElement('a')

    // On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
    element_a.setAttribute('href', menuLinks[i].href)

    // Set the new element's content to the value of the textproperty of the "link" object.
    element_a.textContent = menuLinks[i].text

    // Append the new element to the topMenuElelement.
    topMenuEl.appendChild(element_a)
}

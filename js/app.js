const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

const mainEl = document.querySelector('main');
const topMenuEl = document.querySelector('#top-menu');
const subMenuEl = document.querySelector('#sub-menu');
let showingSubMenu = false;

mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add("flex-ctr");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

menuLinks.forEach(link => {
    const anchorEl = document.createElement('a');
    anchorEl.setAttribute('href', link.href);
    anchorEl.innerText = link.text;
    topMenuEl.appendChild(anchorEl)
});

const topMenuEls = document.querySelectorAll('a');

topMenuEls.forEach(menuEl => {
    menuEl.addEventListener('click', (e) => {
        e.preventDefault();
        if (menuEl.className === '') {
            document.querySelector('.active')?.classList.remove('active');
            menuEl.classList.add('active');
            if (menuEl.href !== 'file:///about') {
                showingSubMenu = true;
            } else {
                showingSubMenu = false;
            }
        } else if (menuEl.className === 'active') {
            menuEl.classList.remove('active')
            showingSubMenu = false;
            subMenuEl.style.top = 0;
            return
        }
        if (showingSubMenu) {
            buildSubMenu(menuLinks)
            subMenuEl.style.top = '100%';
            mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
        } else {
            subMenuEl.style.top = 0;
            mainEl.innerHTML = '<h1>about</h1>';
        }
    })
        function buildSubMenu(arr) {
            subMenuEl.replaceChildren();
            arr.forEach(link => {
                if (link.text.toUpperCase() === menuEl.innerText) {
                    if (link.subLinks) {
                        let subLinksArr = link.subLinks;
                    subLinksArr.forEach(subLink => {
                        const newSubEl = document.createElement('a');
                        newSubEl.setAttribute('href', subLink.href)
                        newSubEl.innerText = (subLink.text);
                        subMenuEl.append(newSubEl);
                    })
                }
        }})
                }


    })
            


subMenuEl.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.tagName !== 'A') {
        return
    }
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    document.querySelector('.active')?.classList.remove('active');
    let h1Text = `<h1>${e.target.textContent}</h1>`
    mainEl.innerHTML = h1Text;

})


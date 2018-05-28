

let links = [{
        name: 'Home',
        href: '/index.html',
        target: '_self'
    },
    {
        name: 'Servicios',
        href: '/index.html#servicios',
        target: '_self'
    },
    {
        name: 'Portfolio',
        href: '/portfolio.html',
        target: '_self'
    },
    {
        name: 'Blog',
        href: '/blog.html',
        target: '_self'
    },
    {
        name: 'Acerca',
        href: '/index.html#about',
        target: '_self'
    },
    {
        name: 'Contact',
        href: '/index.html#contact',
        target: '_self'
    }
];

links.forEach(function(items) {
    let list = document.createElement('li');
    let link = document.createElement('a');
    uList.appendChild(list);
    list.appendChild(link);
    link.innerHTML = items.name;
    link.setAttribute('href', items.href);
    link.setAttribute('target', items.target);
});

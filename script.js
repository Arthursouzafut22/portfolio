

const burgerMobile = () => {    

const btnMobile = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('[ data-menu="list"]');

const clickMobile = () => {
    btnMobile.classList.toggle('active');
    menuList.classList.toggle('active');
};

btnMobile.addEventListener('click', clickMobile);
}

burgerMobile()







const links = document.querySelectorAll('.menu a');

 function handleClick(event) {
    event.preventDefault()
    fetchPage(event.target.href)
    window.history.pushState(null, null, event.target.href)
 }

 async function fetchPage(url) {
    const pageResponse = await fetch(url)
    const pageText = await pageResponse.text()
    replaceContent(pageText)
 }

 function replaceContent(newText) {
    const newHtml = document.createElement('main');
    newHtml.innerHTML = newText;
    const oldContent = document.querySelector('.content')
    const newContent = newHtml.querySelector('.content')
    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector('title').innerText
 }

 window.addEventListener('popstate', () => {
    fetchPage(window.location.href)
 })

links.forEach(link => {
    link.addEventListener('click', handleClick)
});
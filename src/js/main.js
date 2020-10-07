const headerTitle = document.querySelector('[data-js=headerTitle]')

const homeMain = document.querySelector('[data-js=homeMain]')
const bookmarksMain = document.querySelector('[data-js=bookmarksMain]')
const createMain = document.querySelector('[data-js=createMain]')
const profileMain = document.querySelector('[data-js=profileMain]')

const homeNavLink = document.querySelector('[data-js=homeNavLink]')
const bookmarksNavLink = document.querySelector('[data-js=bookmarksNavLink]')
const createNavLink = document.querySelector('[data-js=createNavLink]')
const profileNavLink = document.querySelector('[data-js=profileNavLink]')

const bookmarkSvgPath = document.querySelector('[data-js=bookmarkSvgPath]')

bookmarkSvgPath.addEventListener('click', () => {
  console.log('test')
  bookmarkSvgPath.classList.toggle('bookmarked')
})

homeNavLink.addEventListener('click', () => {
  hideMains()
  showMain(homeMain)
  setHeaderTitle('Quiz-App')
})

bookmarksNavLink.addEventListener('click', () => {
  hideMains()
  showMain(bookmarksMain)
  setHeaderTitle('Bookmarks')
})

createNavLink.addEventListener('click', () => {
  hideMains()
  showMain(createMain)
  setHeaderTitle('Create')
})

profileNavLink.addEventListener('click', () => {
  hideMains()
  showMain(profileMain)
  setHeaderTitle('Profile')
})

function hideMains() {
  homeMain.classList.add('d-none')
  bookmarksMain.classList.add('d-none')
  createMain.classList.add('d-none')
  profileMain.classList.add('d-none')
}

function showMain(main) {
  main.classList.remove('d-none')
}

function setHeaderTitle(string) {
  headerTitle.innerText = string
}

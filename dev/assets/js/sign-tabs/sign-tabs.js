const signTabs = document.getElementById('signTabs')

// On sign up hover
const handleRegTabHover = () => {
  signTabs.classList.add('signup-active')
}

// On sign up out
const handleRegTabOut = () => {
  signTabs.classList.remove('signup-active')
}
const signTabs = document.getElementById('signTabs')
let signUpActive = false

// console.log(signTabs.classList)

// On sign up hover
const handleRegTabHover = () => {
  if (checkActiveTab()) signUpActive = true
  else signTabs.classList.add('signup-active')
}

const handleLogTabHover = () => {
  if (checkActiveTab()) {
    signUpActive = true
    signTabs.classList.remove('signup-active')
  }
}

// On sign up out
const handleRegTabOut = () => {
  if (signUpActive) return false
  else signTabs.classList.remove('signup-active')
}

const handleLogTabOut = () => {
  if (signUpActive) signTabs.classList.add('signup-active')
  else signTabs.classList.remove('signup-active')
}

// Check active tab
const checkActiveTab = () => {
  const signClasses = signTabs.classList
  let isSignUpActive = false

  signClasses.forEach( val => {
    isSignUpActive = val == 'signup-active' ? true : false
  })

  return isSignUpActive
}
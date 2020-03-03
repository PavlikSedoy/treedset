// const showPassword = () => {
//     console.log(e.target.classList)
// }

// document.querySelector('.input-group__hide-password').addEventListener('click', () => {
//     console.log(this)
// })

const showPassword = elem => {
    if ( elem.classList.length > 1 ) {
        elem.classList.forEach(element => {
            if (element == 'hide-password') {
                elem.classList.remove('hide-password')
                elem.nextElementSibling.type = 'text'
            }
        });
    } else {
        elem.classList.add('hide-password')
        elem.nextElementSibling.type = 'password'
    }
}
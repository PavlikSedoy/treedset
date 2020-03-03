const codeListBtn = document.getElementById('phoneCode'),
    codeList = document.getElementById('codeList')

const toggleCountriesCode = () => {
    const codeListClasses = codeListBtn.classList
    
    if ( isActiveCode(codeListClasses) ) codeListClose()
    else {
        codeListBtn.classList.add('active')
        codeList.classList.add('active')
    }
}

// Check status
const isActiveCode = codeListClasses => {
    let codeListStatus = false

    codeListClasses.forEach( val => {
        codeListStatus = val == 'active' ? true : false
    })

    return codeListStatus
}

// Close list
const codeListClose = () => {
    codeListBtn.classList.remove('active')
    codeList.classList.remove('active')
}
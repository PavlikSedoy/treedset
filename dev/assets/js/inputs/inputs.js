const signinPhone = document.getElementById('signinPhone')

// Execute function adding spaces on blur
signinPhone.addEventListener( 'blur', () => {
  const signinPhoneVal = signinPhone.value
  
  signinPhone.value = phoneFormat(signinPhoneVal)
})

// Function who adding spaces in phone number
const phoneFormat = phoneNumber => {
  let res = '',
      number = phoneNumber,
      i = 0

  number = number.replace(/\s/g, '')

  while ( number > 0 ) {
    if ( i == 0 ) {
      res = res + number.substring(0,2);
      number = number.substring(2) 
    } else if ( i == 1 ) {
      res = res + " " + number.substring(0,3);
      number = number.substring(3) 
    } else if ( i == 2 ) {
      res = res + " " + number.substring(0,4);
      number = number.substring(4) 
    }

    i++
  }

  return res
}
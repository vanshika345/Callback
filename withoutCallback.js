const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getCookies() {

  // Progression 2: using setTimeout() - use 1000 units for time parameter
  setTimeout(() => {
    let output = ''
    cookies.forEach((cookie) => {
      output += `<li>${cookie.name}</li>`
    })
    document.body.innerHTML = output
  }, 1000)

}

//Progression 3: Create a function to creat cookies
  // use setTimeout() -- use 2000 units for time parameter
  function createCookie(newCookie) { 
    setTimeout(()=> {
      cookies.push(newCookie)
    }, 2000)
  }

// Progression 4: calling functions
getCookies()
createCookie(newCookie)
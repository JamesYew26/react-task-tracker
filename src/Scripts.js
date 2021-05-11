var request = new XMLHttpRequest()

request.open('GET', 'https://gorest.co.in/public-api/users/123/b8096cf52d5d42bdba1b35d72509cc1c448006229be9fe81bb0ebe1fb92eeff3', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      console.log(movie.title)
    })
  } else {
    console.log('error')
  }
}

request.send()
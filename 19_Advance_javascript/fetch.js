async function fetchData() {
    try {
      let res = await  fetch("https://api.github.com/users/Aestheticsuraj234" ,{
        method:"PATCH",
        body: JSON.stringify({
            title: 'HELLOWORLD',
            body: 'LLJALIJSIOAJDOISJDOI',
            userId: 2,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

      })
        let data = await res.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
        
    }
}

fetchData()
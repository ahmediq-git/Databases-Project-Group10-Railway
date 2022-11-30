const feedDisplay = document.querySelector('#track')


fetch()
    .then(response => response.json())
    .then(data => {
        // write html here 
    })
    .catch(err => console.log(err))
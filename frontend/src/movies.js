document.addEventListener('DOMContentLoaded', () => {
    console.log('Login page loaded');
   
  });
async function movieSearch(event){
    event.preventDefault();

    const movieName = document.getElementById('search').value;
    document.getElementById('search').value = '';
    
     
    try {
        const response = await fetch('/movies',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(movieName)
        })
        const result = await response.json();


        if(response.ok){
            alert(result.message);
            window.location.href = '/movie/:id';
            console.log(`You searched for ${movieName} `);
        }else{
            alert(result.message);
            alert('Unknown error occured');
        }

    } catch (error) {
        console.error("Error:",error);
    }
}
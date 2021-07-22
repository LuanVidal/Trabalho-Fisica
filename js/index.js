function typeWriter(element){
    const TextoArray = element.innerHTML.split('');
    element.innerHTML = '';
    TextoArray.forEach((letra, i) => {
        setTimeout( () =>{
            element.innerHTML += letra;

        }, 75 * i)
        
    });
} 
        
const Title = document.querySelector('#texto')
typeWriter(Title)

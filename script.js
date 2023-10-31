function toggleMode(){
    const html = document.documentElement
        /*if(html.classList.contains('light')) {
     html.classList.remove('light')   
    }else{
        html.classList.add('light')
    } 
    Seria o mesmo que: */
        html.classList.toggle('light')

    //pegar a tag image - mesmo seletor css
    const img = document.querySelector("#profile img")
     //se tiver light mode, adicionar a imagem light  
     if(html.classList.contains('light')) {
     //substituir a imagem
        img.setAttribute('src','./assets/avatar-light.png')
     } else{
    // se tiver sem light mode, manter  a imagem normal
        img.setAttribute('src','./assets/avatar.png')

     } 
     const transitionDuration = 1000;

     document.body.addEventListener('click', function() {
       document.body.classList.toggle('dark');
     
       // Altera a duração da transição
       document.body.style.transitionDuration = `${transitionDuration}ms`;
     });


}




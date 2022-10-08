window.addEventListener('scroll', function () {
    console.log(scrollY);
    if (scrollY >= 670) {
        
            document.getElementById('nav').classList.add("bg-black") 

    }else if(scrollY <= 670){
        document.getElementById('nav').classList.remove("bg-black") 
    }

  });
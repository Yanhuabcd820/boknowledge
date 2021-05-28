// window.onload = function() {
            // var body = document.getElementById("menu-cover");
            var menu = document.getElementById("menu-control");

            var flag = true;
            console.log(flag);
            // menu.addEventListener('click',lock);
            
            menu.addEventListener('click',lock);
            function lock(){
                if(flag == true){
                    body.style.overflow = "hidden";
                    flag = false;
                }else{
                    body.style.overflow = "auto";
                    flag = true;
                }
            }
        // }
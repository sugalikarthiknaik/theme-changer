let button=document.getElementById('but')
        let body=document.getElementsByTagName('body')[0]
        button.onclick=()=>{
           body.classList.toggle('dark')
           body.classList.contains('dark') ? button.innerText="Light Mode":button.innerText="Dark Mode"
           
        }
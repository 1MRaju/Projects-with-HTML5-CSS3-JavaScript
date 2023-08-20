// document.querySelector('.cross').style.display = 'none';
// document.querySelector('.hamburger').addEventListener("click", ()=>{
//     document.querySelector('.sidebar').classList.toggle('sidebargo');
//     if(document.querySelector('.sidebar').classList.contains('sidebargo')){
//         document.querySelector('.ham').style.display = 'inline'
//         document.querySelector('.cross').style.display = 'none'
//     }
//     else{
//         document.querySelector('.ham').style.display = 'none'
//         setTimeout(()=>{
//         document.querySelector('.cross').style.display = 'inline'
//         },340)
//     }
// })


document.querySelector('.fa-xmark').style.display = 'none'

document.querySelector('.hamburger').addEventListener("click", ()=>{
         document.querySelector('.sidebar').classList.toggle('sidebargo');
         if(document.querySelector('.sidebar').classList.contains('sidebargo')){
            document.querySelector('.fa-bars').style.display = 'inline'
            document.querySelector('.fa-xmark').style.display = 'none'
         }
         else{
            document.querySelector('.fa-bars').style.display = 'none'
            setTimeout(()=>{
                document.querySelector('.fa-xmark').style.display = 'inline'
            },340)
         }
})







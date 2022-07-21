const mainPage = document.querySelector('.main-article');
const buttons = document.querySelectorAll('.btn');
const content = document.querySelectorAll('.content');
const img = document.querySelectorAll('.page-img img')

//console.log(img);
//console.log(content)

mainPage.addEventListener('click', (e) => {
   //console.log(e.target.dataset.id);
   const id = e.target.dataset.id;
   const control = e.target.dataset.control;
   
   if(id && control) {
        buttons.forEach(button => {
            button.classList.remove('active');
            e.target.classList.add('active');
        });

        content.forEach(con => {
            con.classList.remove('active')
        })

        img.forEach(image => {
            image.classList.remove('active');
        })

        const articleDisplayed = document.getElementById(id);
        const destinationimage = document.getElementById(control);
        articleDisplayed.classList.add('active');
        destinationimage.classList.add('active');
   }
}) 

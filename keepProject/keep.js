// var modal = document.getElementsByClassName('modalBox');
// var text=document.getElementById('text');
// // var closeBtn=document.getElementById('closeBtn');
// var takeNotes=document.getElementById('takeNotes')
// let closeBtn=modal.querySelector('#closeBtn')


// text.addEventListener('click',closeText);
// function closeText(){
//     text.style.display='none';                  
// }

// text.addEventListener('click',openModal);
// function openModal(){
//     modal.style.display='block';
// }
// closeBtn.addEventListener('click',e =>{
//     e.preventDefault();
//     console.log("button clicked")
// })
// closeBtn.addEventListener('click',closeModal);
// function closeModal(){
//     modal.style.display='none';
// }

// window.addEventListener('click',outsideClick);
// function outsideClick(e){
//     if(e.target === modal){
//     modal.style.display='none';
//     }
// }
// window.addEventListener('click',textArea);
// function textArea(e){
//   if(e.target===text){
//     text.style.display='block';
//   }
// }
// window.onclick = function(e){
//     if(e.target == modal){
//         modal.style.display='none';
//     }
// }

// closeBtn.addEventListener('click',openText);
// function openText(){
//     text.style.display='block';
// }
const addBox=document.querySelector(".text"),
modalBox=document.querySelector(".modalBox"),
// addBtn=modalBox.querySelector("#addBtn"),
getTitle=modalBox.querySelector("input"),
descri=modalBox.querySelector("textarea");
const addBtn=document.getElementById("addBtn");
const closeBtn=document.getElementById("closeBtn");
// const editNotes=document.getElementById("update");
// const updateModal=document.getElementsById("updateModal");


const notes = JSON.parse(localStorage.getItem("notes") || "[]");

// function displayNotes(){
//     notes.foreach((note)=>{
//         console.log(note);
//     })
// }
// displayNotes();
window.onclick = function(e){
    if(e.target == modalBox){
        modalBox.classList.remove("show")
    }
}
addBox.addEventListener("click", ()=>{
    // getTitle.focus();
    modalBox.classList.add("show");
});
 addBtn.addEventListener("click",()=>{
     modalBox.classList.remove("show");
 });
// addBtn.addEventListener("click",e =>{
//     e.stopPropagation();
//     closeform();
// })
 closeBtn.addEventListener("click",()=>{
     
     getTitle.value="";
     descri.value="";
     modalBox.classList.remove("show");
 });
// updateModal.addEventListener('click',popupModal);
// function popupModal(){
//       updateModal.style.display="block" ;
// };






function showNotes(){
    document.querySelectorAll(".note").forEach(note=>note.remove());
         notes.forEach((note,index)=>{
            let displayContent=`<div class="flexContainer">
                           <div class="displayNotes">
                            <li class="note">
                                <div class="details">
                                    <h3>${note.title}</h3>
                                    <span>${note.description}</span>
                                </div>
                                <div class="bottomContent">
                                    <div class="settings">
                                        <i onclick="showMenu(this)" class="fa-solid fa-ellipsis-vertical"></i>
                                           <ul class="menu">
                                           <i onclick="updateNotes(${index},'${note.title}','${note.description}')" class="fa-solid fa-pen" id=update></i>
                                            <i onclick="deleteNotes(${index})" class="fa-solid fa-trash"></i>
                                     </div>
                                </div>     
                             </li>
                             </div>
                             </div>
                         
                         `;
            addBox.insertAdjacentHTML("afterend",displayContent) ;           
         });
     }
 showNotes();
// const notes = JSON.parse(localStorage.getItem("notes") || "[]");
// function showNotes(){
//     notes.forEach((note)=>{
//         console.log(note);   
//     });
// }
// showNotes()
function showMenu(element){
    element.parentElement.classList.add("show");
    document.addEventListener("click", e =>{
        if(e.target.tagName !="I" || e.target != element){
            element.parentElement.classList.remove("show");
        }
    })


}
 

function deleteNotes(noteId) {
    notes.splice(noteId,1);
    localStorage.setItem("notes",JSON.stringify(notes));
    showNotes();
}

// function updateNotes(noteId,title,desc){
//     updateModal.click();
//     addBox.click();
//     getTitle.value=title;
//     descri.value=desc;
//     console.log(noteId,title,desc);
// }

addBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    let noteTitle=getTitle.value;
     let noteDesc=descri.value;
    if(noteTitle || noteDesc){
        let noteInfo={
            title:noteTitle,
            description:noteDesc
        }
        notes.push(noteInfo);
        localStorage.setItem("notes",JSON.stringify(notes));
        showNotes();
        closeBtn();
    }

} )  ;


// addBtn.addEventListener('click',(e) =>{
//     e.preventDefault();
//     addNotes()
// })
// function addNotes(){
//     let card=document.createElement("div");
//     card.classList.add("card"),
//     card.innerHTML=`            <h3>Title</h3>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fuga temporibus exercitationem officia ipsa iste qui libero consectetur sunt. Totam labore omnis est saepe vero ab non, laudantium accusantium natus!</p>`
// }
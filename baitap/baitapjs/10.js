function person(){
    let person1 = prompt("Mời bạn nhập tên của mình");
    if (person1 == null || person1 == "") 
        return person();
    else{
        localStorage.setItem ('name', person1);
        Window.setTimeout(window.location.reload(),3000);
        }
    }
let text
if (localStorage.getItem('name') ==null)
        person();
else
    text = "Xin chào " + localStorage.getItem('name') + "!";
document.write(text);
//localStorage.removeItem('name');
/*funktion för sidebar */
const openSidebar = () => {
    document.getElementById("mySidebar").style.width = "30vh";
    document.getElementById("main").style.marginLeft = "30vh";
};

const closeSidebar = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
};


/*funktion för sökning*/
function searchFunction() {
    
                var li = document.getElementsByTagName('li');

            for (i = 0; i < li.length; i++) {

                 li[i].style.display = "none";

             }
    var input, filter, ul, li, a, i, txtValue, test;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        if(filter==""){
            li[i].style.display = "none";
        }
        else{
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
    }
}
}




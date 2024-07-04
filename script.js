function openMenu(evt, name)
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i =0; i< tabcontent.length;i++)
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}



document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var people = document.getElementById('people').value;
    var date = document.getElementById('date').value;
    var message = document.getElementById('message').value;


    const formData ={
        name: name,
        people: people,
        date: date,
        message:message
    };
    console.log('formData', formData);
    window.alert("form data receved!")
});
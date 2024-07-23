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

    const Data = [name, people, date, message]

    Data.forEach(item => console.log(item));
    window.alert("your data: "+ Data.join(" "))

    const formData ={
        name: name,
        people: people,
        date: date,
        message:message
    };
    
    localStorage.setItem('formData', JSON.stringify(formData));
    
});
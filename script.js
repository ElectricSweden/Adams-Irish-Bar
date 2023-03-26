//gör det till en klass med object istället.
//gör id till namn

//Kolla på hashtable och map
//Gör en map istället




const prices = {
    "small" : 2,
    "medium" : 3,
    "large" : 4,
    "irish" : 6,
    "fish" : 8,
    "pie" : 7,
    "lamb" : 9,
    "rashers" : 4,
    "irishhotwhiskey": 9,
    "bulmers": 8,
    "jameson" : 6,
    "irishcider" : 4,
    "applecake" : 3,
    "shamrockshake" : 7,
    "portercake" : 5,
    "irishcake" : 5,
}





document.getElementById("form").addEventListener("submit" , (form) =>
{
    calculateTotalCost();
    form.preventDefault();
    console.log("form has been submitted!");
});


function calculateTotalCost()
{
    const dataArray = Object.entries(prices);

    let total = 0;

    for (i = 0; i < dataArray.length; i++)
    {        
        let item = document.getElementsByName(dataArray[i][0]);
        total += dataArray[i][1] * item[0].value; //Total cost
    }
    addToTable(total);
}


function addToTable(total)
{

    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");

    var table = `<tr>
                    <td>${name.value}</td>
                    <td>${lastname.value}</td>
                    <td>${email.value}</td>
                    <td>${total}</td>
                </tr>`;

    document.getElementsByClassName("myDbTable")[0].innerHTML += table;
}

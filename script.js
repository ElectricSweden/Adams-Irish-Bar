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



document.getElementById("FormId").addEventListener("submit" , () =>
{
    let total = 0;
    
    for (const [key, value] of Object.entries(prices)) {
        total += value * document.getElementsByName(key).value;
      }
    
    console.log(total);
});



function submit()
{
    let total = 0;
    
    for (const [key, value] of Object.entries(prices)) {
        total += value * document.getElementsByName(key).value;
      }
    
    console.log(total);
}

/*
function submit()
{
    let total = 0;

    prices.forEach(item => {
        total += document.getElementsByName(prices[item.key]).value * prices[item.value];
    });
    
    console.log(total);
    console.log("hej");
}
*/




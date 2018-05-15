var text = `Valentine Oragbakosi <v.oragbakosi@genesystechhub.com> +234-7032434429
Chinonso Williams Junior <c.williams@genesystechhub.com> +234-9034464230
Ndife Uchenna <n.uchenna@genesystechhub.com> +234-8052464529
Ehiogu Chika Josephine <c.josephine@genesystechhub.com> +234-7022454620
Chidera Jennifer <c.jennifer@genesystechhub.com> +234-8032434425
Nwosu Ifeoma Lucia <l.ifeoma@genesystechhub.com> +234-9032434424
Ibe Agwu <i.ogele@genesystechhub.com> +234-7032434427`

function displayNumbers(text){
    var numbers = text.match(/\+.*\d/g);
    console.log(numbers);
}
displayNumbers(text);

function displayNames(text){
    var name = text.match(/\w.*</g);
    var names = [];
    name.forEach(element => {
        elem = element.replace(/</g, "").trim()
        names.push(elem);
    });
    console.log(names);
}
displayNames(text);

function displayMails(text){
var mail = text.match(/<.*>/g);
var mails = [];
mail.forEach(element =>{
    elem = element.replace(/[<|>]/g, "")
    mails.push(elem);
});
console.log(mails);
}
displayMails(text);


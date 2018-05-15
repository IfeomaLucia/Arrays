var text = `Valentine Oragbakosi <v.oragbakosi@genesystechhub.com> +234-7032434429
Chinonso Williams Junior <c.williams@genesystechhub.com> +234-9034464230
Ndife Uchenna <n.uchenna@genesystechhub.com> +234-8052464529
Ehiogu Chika Josephine <c.josephine@genesystechhub.com> +234-7022454620
Chidera Jennifer <c.jennifer@genesystechhub.com> +234-8032434425
Nwosu Ifeoma Lucia <l.ifeoma@genesystechhub.com> +234-9032434424
Ibe Agwu <i.ogele@genesystechhub.com> +234-7032434427`


var names = [];
for(var txt of text.split("\n")){
    var start = 0;
    var end = txt.indexOf("<");
    names.push(txt.substring(start, end));
}
console.log(names);

var emails = [];
for(var mail of text.split("\n")){
    var start = mail.indexOf("<");
    var end = mail.indexOf(">");
    emails.push(mail.substring(start, end));
}
console.log(emails);

var numbers = [];
for(var number of text.split("\n")){
    var start = number.indexOf("+");
    var end = number.length;
    numbers.push(number.substring(start, end));
}
console.log(numbers);
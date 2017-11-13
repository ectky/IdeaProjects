function getCapitalCaseWords(arr) {
    let input = arr.join(',');
    let words = input.split(/\W+/).filter(a => a !== '');
    let finalWords = [];
    for (let word of words) {
        if (word === word.toUpperCase()){
            finalWords.push(word)
        }
    }

    console.log(finalWords.join(', '));
}

getCapitalCaseWords(['We start by HTML, CSS, JavaScript, JSON and REST.\n' +
    'Later we touch some PHP, MySQL and SQL.\n' +
    'Later we play with C#, EF, SQL Server and ASP.NET MVC.\n' +
    'Finally, we touch some Java, Hibernate and Spring.MVC.\n']);
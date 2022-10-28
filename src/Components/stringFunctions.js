function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function concatenate(string1, string2){
    return string1 + string2
}

function secondWord(string){
    return string.split(' ')[1]
}

export { capitalize, concatenate, secondWord}
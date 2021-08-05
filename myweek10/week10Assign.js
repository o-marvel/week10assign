function spinalCase(str) {
    let replacedWhiteSpaceStr=str.replace(/_([A-Z])/g, " ")
    .trim().toLowerCase()
    .split(" ").join("-")
    return replacedWhiteSpaceStr;
}
spinalCase(" am working in power");
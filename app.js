// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
    return Promise.delay(ms);
}

// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
    setTimeout(function () {
        el.style.right = "100px";
    }, 1000);
}

// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
    const newArr = [];
    xs.forEach((c) => {
        if (!newArr.includes(c)) {
            newArr.push(c);
        }
    });

    return newArr;
}
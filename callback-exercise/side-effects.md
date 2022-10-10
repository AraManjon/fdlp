## What is a side effect?

### First case to answer
```
let num = 0

function sumOne (n) {
    n++
    console.log(`A: Perquè n val -> ${n}?`)
}

sumOne(num)

console.log(`B: Perquè num val -> ${num}?`)

```

### Second case to answer

```
let num = [0]

function sumOne (n) {
    n[0]++
    console.log(`C: Perquè n val -> ${n}?`)
}

sumOne(num)

console.log(`D: Perquè num val -> ${num}?`)
```

📚🤓 To read later [side-effects](https://javascript.plainenglish.io/how-to-avoid-side-effects-using-pure-functions-in-javascript-366acaafb60c#:~:text=What%20is%20a%20side%20effect,have%20unpredictable%20behavior%20and%20mutability.) in Javascript.


/* let i1 = 0
while (i1 < 9) {
  console.log(i1)
  i1++
} */

/* let i1 = 10
do {
  console.log(i1)
  i1++
} while (i1 < 9) */

/* for (let i2 = 5; i2 < 10; i2++) {
  if (i2 !== 7) {
    console.log(i2)
  }
} */

/* for (let i2 = 5; i2 < 10; i2++) {
  console.log(`Step # ${i2}:`)
  if (i2 === 7) {
    continue
  }
  console.log(i2)
} */

/* for (let i2 = 5; i2 < 100; i2++) {
  console.log(`Step # ${i2}:`)
  if (i2 / 2 === 25) {
    break
  }
  console.log(i2)
} */

/* for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 11; j++) {
    if (i === 0) {
      process.stdout.write(`${j}  `)
    } else if (j === 0) {
      process.stdout.write(`${i}  `)
    } else {
      process.stdout.write(`${i * j}  `)
    }
    if (i === 5 && j === 5) {
      break
    }
  }
  process.stdout.write("\n")
} */

/* MAIN_LOOP : for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 11; j++) {
    if (i === 0) {
      process.stdout.write(`${j}  `)
    } else if (j === 0) {
      process.stdout.write(`${i}  `)
    } else {
      process.stdout.write(`${i * j}  `)
    }
    if (i === 5 && j === 5) {
      break MAIN_LOOP
    }
  }
  process.stdout.write("\n")
} */

// console.log('Input an integer')
// console.log(readline())

// for (let i = 1; i < 1000; i *= 10) {
/* for (let i = 1; i < 1000; ) {
  // 1 - 1
  // 2 - 10
  // 3 - 100
  for (let j = 0; j < 3; j++) {
    let output = (i + j).toString()
    while (output.length < 5) {
      output = ' ' + output
    }
    process.stdout.write(output)
  }
  // console.log(i.toString())
  process.stdout.write('\n')
  i++
  i *= 10
} */

for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 11; j++) {
    let output
    if (i === 0) {
      output = j
      // process.stdout.write(`${j}  `)
    } else if (j === 0) {
      output = i
      // process.stdout.write(`${i}  `)
    } else {
      output = i * j
      // process.stdout.write(`${i * j}  `)
    }
    output = output.toString()
    while (output.length < 5) {
      output = ' ' + output
    }
    process.stdout.write(output)
  }
  process.stdout.write("\n")
}

const readline = require("readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question("Enter initial balance: ", (initialBalance) => {
  rl.question("Enter balance loss limit: ", (lossLimit) => {
    rl.question("Enter risk percentage per trade: ", (riskPercentage) => {
      const initBalance = parseFloat(initialBalance)
      const balanceLossLimit = parseFloat(lossLimit)
      const risk = parseFloat(riskPercentage)

      function balance(n, c = 0) {
        let output = n
        let count = c
        if (output > balanceLossLimit) {
          count += 1
          output = (n * (100 - risk)) / 100
          return balance(output, count)
        } else {
          return count
        }
      }

      const losses = balance(initBalance)
      console.log("Losses Until Account Blown: ", losses)

      rl.close()
    })
  })
})

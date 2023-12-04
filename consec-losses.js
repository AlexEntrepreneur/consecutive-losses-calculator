const readline = require("readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question("Enter initial balance: ", (initialBalance) => {
  rl.question("Enter balance loss limit: ", (lossLimit) => {
    rl.question("Enter risk percentage per trade: ", (riskPercentage) => {
      const initBalance = parseFloat(initialBalance)
      const balanceLossLimit = parseFloat(lossLimit)
      const risk = parseFloat(riskPercentage)

      function balance(output, count = 0) {
        if (output > balanceLossLimit) {
          return balance((output * (100 - risk)) / 100, ++count)
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

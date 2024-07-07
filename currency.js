#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue("*** CURRENCY_CONVERTOR*** "));
const currency = {
    USD: 1,
    PKR: 278.72,
    IND: 83.12,
    EUR: 0.92,
    AED: 3.67,
    SAR: 3.75,
    BHD: 0.38,
    QAR: 3.64,
    KWD: 0.31,
    OMR: 0.38,
    AFN: 70.87,
};
let userSelection = await inquirer.prompt([
    {
        name: "From",
        message: "SELECT THE CURRENCY WHICH YOU WANT TO CONVERT",
        type: "list",
        choices: [
            "USD",
            "PKR",
            "IND",
            "EUR",
            "AED",
            "SAR",
            "BHD",
            "QAR",
            "KWD",
            "OMR",
            "AFN",
        ],
    },
    {
        name: "To",
        message: "SELECT THE CURRENCY YOU WANT TO CONVERT",
        type: "list",
        choices: [
            "USD",
            "PKR",
            "IND",
            "EUR",
            "AED",
            "SAR",
            "BHD",
            "QAR",
            "KWD",
            "OMR",
            "AFN",
        ],
    },
    {
        name: "Amount",
        message: "HOW MUCH AMOUNT YOU WANT TO CONVERT",
        type: "number",
    },
]);
let Fromlist = currency[userSelection.From]; // PKR 278.72
let Tolist = currency[userSelection.To]; // 1
let amount = userSelection.Amount; // 5000
let Baseamount = amount / Fromlist; // 5000 / 278.72
let ConvertedAmount = Baseamount * Tolist;
let result = Math.round(ConvertedAmount);
console.log(chalk.bgMagenta(result));

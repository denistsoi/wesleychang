#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// Text + chalk definitions
let data = {
  'name': chalk.white('Wesley Chang /'),
  'handle': chalk.cyan('WeiChiaChang'),
  'work': chalk.white('Just another journeyman on the planet Earth'),
  'twitter': chalk.cyan('https://twitter.com/ioh04019'),
  'github': chalk.cyan('https://github.com/WeiChiaChang'),
  'linkedin': chalk.cyan('https://linkedin.com/in/weichiachang'),
  'web': chalk.cyan('https://weichiachang.github.io'),
  'medium': chalk.cyan('https://medium.com/weekly-github-digest'),
  'npx': chalk.white('npx wesleychang'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelMedium': chalk.white.bold('    Medium:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var webing = `${data.labelWeb}  ${data.web}`
var mediuming = `${data.labelMedium}  ${data.medium}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = 
    heading +
    newline +
    newline +
    working +
    newline +
    twittering +
    newline +
    githubing +
    newline +
    linkedining +
    newline +
    webing +
    newline +
    mediuming +
    newline +
    newline +
    carding

console.log(chalk.green(boxen(output, options)))

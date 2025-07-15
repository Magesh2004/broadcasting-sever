#!/usr/bin/env node
const {Command} = require('commander')
const {spawn} = require('child_process')
const path = require('path')

const program = new Command()

program.name("broadcast-server")
program.command("start").action(()=>{
    spawn("node",[path.join(__dirname,"server.js")],{stdio:"inherit"})
})
program.command("connect").action(()=>{
    spawn("node",[path.join(__dirname,"client.js")],{stdio:"inherit"})
})
program.parse(process.argv)
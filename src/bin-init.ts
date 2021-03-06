#!/usr/bin/env node

import Promise = require('any-promise')
import { init } from 'typings-core'

export function help () {
  console.log(`
typings init

Options: [--upgrade]
`)
}

export interface Options {
  verbose: boolean
  cwd: string
  upgrade: boolean
}

export function exec (args: string[], options: Options): Promise<void> {
  return init(options)
}

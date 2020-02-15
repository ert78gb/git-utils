const debug = require('debug')('git-utils:git')
const execa = require('execa')

async function git(args, options) {
  debug('command: git', ...args)
  debug('options: %o', options)

  const { stdout } = await execa('git', args, options)

  debug('output:', stdout)

  return stdout
}

module.exports = git

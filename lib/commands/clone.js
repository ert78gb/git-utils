const debug = require('debug')('git-utils:clone')
const git = require('./git')

async function clone({ url, cwd }) {
  debug('clone: %s %s', url, cwd)

  const output = await git(['clone', url, '.'], { cwd })

  debug('cloned: %s', url)

  return output
}

module.exports = clone

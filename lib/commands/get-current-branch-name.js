const debug = require('debug')('git-utils:get-current-branch')
const git = require('./git')

async function getCurrentBranch({ cwd }) {
  debug('read')

  const output = await git(['rev-parse', '--abbrev-ref', 'HEAD'], { cwd })

  debug('current branch is: %s', output)

  return output
}

module.exports = getCurrentBranch

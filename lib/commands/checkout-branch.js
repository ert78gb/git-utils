const debug = require('debug')('git-utils:checkout-branch')
const git = require('./git')

async function checkoutBranch({ branch, cwd }) {
  debug('start checkout: %s', branch)

  const output = await git(['checkout', branch], { cwd })

  debug('current branch is: %s', branch)

  return output
}

module.exports = checkoutBranch

const debug = require('debug')('git-utils:get-parent-shas')
const git = require('./git')

async function getParentShas({ sha, cwd }) {
  debug('sha: %s', sha)

  const args = ['log', '--pretty=%P', '-1']

  if (sha) args.push(sha)

  const shas = (await git(args, { cwd })).split(' ')

  debug('shas: %O', shas)

  return shas
}

module.exports = getParentShas

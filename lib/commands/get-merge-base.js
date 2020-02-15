const debug = require('debug')('git-utils:get-fork-point')
const git = require('./git')

async function getMergeBase({ sha1, sha2, cwd }) {
  debug('read merge base of sha1: %s and sha2: %s', sha1, sha2)

  const args = ['merge-base', sha1]

  if (sha2) args.push(sha2)

  const output = await git(args, { cwd })

  debug('sha: %s', output)

  return output
}

module.exports = getMergeBase

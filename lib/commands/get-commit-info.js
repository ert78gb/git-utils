const debug = require('debug')('git-utils:get-commit-info')
const git = require('./git')
const { parseCommit } = require('../utils')

async function getCommitInfo({ sha, cwd }) {
  debug('sha: %s', sha)

  const args = ['log', '--no-decorate', '--date=iso8601-strict', '-1']

  if (sha) args.push(sha)

  const commit = parseCommit(await git(args, { cwd }))

  debug('commit: %o', commit)

  return commit
}

module.exports = getCommitInfo

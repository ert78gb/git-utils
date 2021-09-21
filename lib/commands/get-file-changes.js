const debug = require('debug')('git-utils:get-file-changes')
const git = require('./git')
const { parseCommits } = require('../utils')

async function getFileChanges({ cwd, path }) {
  debug('path: $s', path)

  const output = await git(
    ['log', '--follow', '--no-decorate', '--date=iso8601-strict', '--', path],
    { cwd }
  )

  const result = parseCommits(output)
  debug('commit infos: %O', result)

  return result
}

module.exports = getFileChanges

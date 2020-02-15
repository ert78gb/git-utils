const debug = require('debug')('git-utils:get-changed-files')
const git = require('./git')

const ACTIONS = new Map([
  ['D', 'deleted'],
  ['A', 'added'],
  ['M', 'modified'],
])
async function getChangedFiles({ sha1, sha2, cwd }) {
  debug('get changed files of sha1: %s and sha2: %s', sha1, sha2)

  const args = ['diff', '--name-status', sha1]

  if (sha2) args.push(sha2)

  const files = (await git(args, { cwd }))
    .split('\n')
    .map(line => {
      const [action, path] = line.split('\t')

      return {
        action: ACTIONS.get(action),
        path,
      }
    })
    .filter(x => x.path)

  debug('files: %o', files)

  return files
}

module.exports = getChangedFiles

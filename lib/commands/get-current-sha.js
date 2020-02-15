const debug = require('debug')('git-utils:get-current-sha')
const git = require('./git')

async function getCurrentSha({ cwd }) {
  debug('read')

  const output = await git(['rev-parse', 'HEAD'], { cwd })

  debug('sha: %s', output)

  return output
}

module.exports = getCurrentSha

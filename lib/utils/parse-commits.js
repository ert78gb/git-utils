const parseCommit = require('./parse-commit')

function parseCommits(data) {
  const result = []
  const lines = data.split('\n')
  let commitInfo = []

  function processCommitInfo() {
    if (commitInfo.length > 0) {
      result.push(parseCommit(commitInfo.join('\n')))
      commitInfo = []
    }
  }

  for (const line of lines) {
    if (line.startsWith('commit')) {
      processCommitInfo()
    }

    commitInfo.push(line)
  }

  processCommitInfo()

  return result
}

module.exports = parseCommits

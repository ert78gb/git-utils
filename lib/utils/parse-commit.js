function parseCommit(data) {
  const lines = data.split('\n')

  return {
    sha: lines[0]
      .split('commit')
      .pop()
      .trim(),
    author: lines[1]
      .split('Author:')
      .pop()
      .trim(),
    date: new Date(
      lines[2]
        .split('Date:')
        .pop()
        .trim()
    ),
    message: lines
      .slice(4)
      .map(x => x.trim())
      .join('\n'),
  }
}

module.exports = parseCommit

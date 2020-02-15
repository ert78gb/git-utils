const debug = require('debug')('git-utils:get-remote-tags')
const git = require('./git')

async function getRemoteTags({ remote, prefix, cwd } = { remote: 'origin' }) {
  debug('remote: %s, prefix %s', remote, prefix)

  const args = ['ls-remote', '--tags', remote || 'origin']

  if (prefix) args.push(prefix)

  const output = await git(args, { cwd })
  const lines = output.split('\n')

  const tags = lines.reduce((map, line) => {
    const [hash, tagReference] = line.split('\t')

    if (!tagReference) return map

    const tagName = tagReference
      .replace(/^refs\/tags\//, '')
      .replace(/\^\{\}$/, '')

    return map.set(tagName, hash)
  }, new Map())

  debug('tags: %O', tags)

  return tags
}

module.exports = getRemoteTags

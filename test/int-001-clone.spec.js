const { ensureDir, pathExists, remove } = require('fs-extra')
const { join } = require('path')

const { clone } = require('../lib')

describe('int-001 clone repository', () => {
  it('should works', async () => {
    const cwd = process.env.TEST_REPO_PATH
    await remove(cwd)
    await ensureDir(cwd)

    await clone({
      cwd,
      url: process.env.TEST_REPO_URL,
    })

    const gitDir = join(cwd, '.git')
    const exists = await pathExists(gitDir)

    expect(exists).toBe(true)
  })
})

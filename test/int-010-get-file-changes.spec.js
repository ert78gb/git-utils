const { getFileChanges } = require('../lib')

describe('getFileChanges', () => {
  it('should return with the commit infos of the "a.txt" from the "master" branch', async () => {
    const cwd = process.env.TEST_REPO_PATH

    const commit = await getFileChanges({ cwd, path: 'a.txt' })

    expect(commit).toEqual([
      {
        sha: 'fda8143e8f4749eaad9f41070c651a3b70c04d4e',
        author: 'Róbert Kiss <ert78gb@gmail.com>',
        date: new Date('2020-02-08T16:41:00.000Z'),
        message: 'fix: a.txt\n',
      },
      {
        sha: '46ec7b5ef3fd5f67b038812dd3582355ca273bd8',
        author: 'Róbert Kiss <ert78gb@gmail.com>',
        date: new Date('2020-02-08T16:17:42.000Z'),
        message: 'feat: add a.txt',
      },
    ])
  })
})

const { getCommitInfo } = require('../lib')

describe('getCurrentSha', () => {
  it('should return with the commit info of the last commit of "feat-b-txt" branch', async () => {
    const cwd = process.env.TEST_REPO_PATH

    const commit = await getCommitInfo({ cwd })

    expect(commit).toEqual({
      author: 'Róbert Kiss <ert78gb@gmail.com>',
      message: 'feat: add b.txt\n\nBody of the comment',
      date: new Date('2020-02-08T17:19:42+01:00'),
      sha: '7f15cc49347592fbd60ea839f7e06be553965234',
    })
  })
})

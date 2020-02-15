const { getCurrentSha } = require('../lib')

describe('getCurrentSha', () => {
  it('should return with the sha of the last commit of "feat-b-txt" branch', async () => {
    const cwd = process.env.TEST_REPO_PATH

    const sha = await getCurrentSha({ cwd })

    expect(sha).toBe('7f15cc49347592fbd60ea839f7e06be553965234')
  })
})

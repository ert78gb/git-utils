const { getCurrentBranchName } = require('../lib')

describe('getCurrentBranchName', () => {
  it('should return with the current branch name', async () => {
    const cwd = process.env.TEST_REPO_PATH

    const branch = await getCurrentBranchName({ cwd })

    expect(branch).toBe('master')
  })
})

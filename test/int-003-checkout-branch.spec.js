const { checkoutBranch, getCurrentBranchName } = require('../lib')

describe('checkoutBranch', () => {
  it('should checkout "feat-b-txt"', async () => {
    const cwd = process.env.TEST_REPO_PATH

    await checkoutBranch({ branch: 'feat-b-txt', cwd })
    const branch = await getCurrentBranchName({ cwd })

    expect(branch).toBe('feat-b-txt')
  })
})

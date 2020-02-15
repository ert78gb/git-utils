const { checkoutBranch, getMergeBase } = require('../lib')

describe('getMergeBase', () => {
  it('should find the merge base of the master and feat-b-txt branch', async () => {
    const cwd = process.env.TEST_REPO_PATH

    await checkoutBranch({ branch: 'feat-b-txt', cwd })
    const sha = await getMergeBase({ sha1: 'master', sha2: 'feat-b-txt', cwd })

    expect(sha).toEqual('46ec7b5ef3fd5f67b038812dd3582355ca273bd8')
  })

  it('should find the merge base of the master and feat-c-txt branch', async () => {
    const cwd = process.env.TEST_REPO_PATH

    await checkoutBranch({ branch: 'feat-c-txt', cwd })
    const sha = await getMergeBase({ sha1: 'master', sha2: 'feat-c-txt', cwd })

    expect(sha).toEqual('46ec7b5ef3fd5f67b038812dd3582355ca273bd8')
  })

  it('should find the merge base of the master and feat-d-txt branch', async () => {
    const cwd = process.env.TEST_REPO_PATH

    await checkoutBranch({ branch: 'feat-d-txt', cwd })
    const sha = await getMergeBase({ sha1: 'master', sha2: 'feat-d-txt', cwd })

    expect(sha).toEqual('333e8e21de77f9ecee2327db92b45e4232a3e64d')
  })

  it('should find the merge base of the master and feat-e-txt branch', async () => {
    const cwd = process.env.TEST_REPO_PATH

    await checkoutBranch({ branch: 'feat-e-txt', cwd })
    const sha = await getMergeBase({ sha1: 'master', sha2: 'feat-e-txt', cwd })

    expect(sha).toEqual('14630f2c65026f9bda22d6def4abd80ada6fcc6e')
  })
})

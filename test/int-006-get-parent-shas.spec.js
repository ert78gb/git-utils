const { checkoutBranch, getParentShas } = require('../lib')

describe('getParentShas', () => {
  it('should return with all sha if the current is merge commit', async () => {
    const cwd = process.env.TEST_REPO_PATH

    await checkoutBranch({ branch: 'feat-e-txt', cwd })

    const shas = await getParentShas({ cwd })

    expect(shas).toEqual([
      'd3e89505291cb1d5881c6033d2ffd0abfc68fe10',
      '14630f2c65026f9bda22d6def4abd80ada6fcc6e',
    ])
  })

  it('should return with the parent of the provided sha', async () => {
    const cwd = process.env.TEST_REPO_PATH

    const shas = await getParentShas({
      cwd,
      sha: '46ec7b5ef3fd5f67b038812dd3582355ca273bd8',
    })

    expect(shas).toEqual(['cde7266d8004b1391ce033fd86f0ffe4a1ce1793'])
  })
})

const { checkoutBranch, getChangedFiles } = require('../lib')

describe('getChangedFiles', () => {
  it('should return with the changed files of the master and feat-b-txt', async () => {
    const cwd = process.env.TEST_REPO_PATH
    await checkoutBranch({ branch: 'master', cwd })
    const result = await getChangedFiles({
      sha1: 'master',
      sha2: 'feat-b-txt',
      cwd,
    })

    expect(result).toEqual([
      { path: '.gitattributes', action: 'deleted' },
      { path: 'a.txt', action: 'modified' },
      { path: 'b.txt', action: 'added' },
      { path: 'd.txt', action: 'deleted' },
      { path: 'readme.md', action: 'modified' },
    ])
  })

  it('should return with the changed files of master and the fork point of the feat-b-txt', async () => {
    const cwd = process.env.TEST_REPO_PATH
    await checkoutBranch({ branch: 'master', cwd })
    const result = await getChangedFiles({
      sha1: '46ec7b5ef3fd5f67b038812dd3582355ca273bd8',
      sha2: 'feat-b-txt',
      cwd,
    })

    expect(result).toEqual([{ path: 'b.txt', action: 'added' }])
  })

  it('should return with the changed files of master and the fork point of the feat-c-txt', async () => {
    const cwd = process.env.TEST_REPO_PATH
    await checkoutBranch({ branch: 'master', cwd })
    const result = await getChangedFiles({
      sha1: '46ec7b5ef3fd5f67b038812dd3582355ca273bd8',
      sha2: 'feat-c-txt',
      cwd,
    })

    expect(result).toEqual([
      { path: 'b.txt', action: 'added' },
      { path: 'c.txt', action: 'added' },
    ])
  })

  it('should return with the changed files of master and the feat-e-txt', async () => {
    const cwd = process.env.TEST_REPO_PATH
    await checkoutBranch({ branch: 'master', cwd })
    const result = await getChangedFiles({
      sha1: 'master',
      sha2: 'feat-e-txt',
      cwd,
    })

    expect(result).toEqual([{ path: 'e.txt', action: 'added' }])
  })

  it('should return with an empty array if no changed file', async () => {
    const cwd = process.env.TEST_REPO_PATH
    await checkoutBranch({ branch: 'master', cwd })
    const result = await getChangedFiles({
      sha1: 'master',
      cwd,
    })

    expect(result).toEqual([])
  })
})

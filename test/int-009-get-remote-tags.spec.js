const { checkoutBranch, getRemoteTags } = require('../lib')

describe('getRemoteTags', () => {
  it('should return with all tags from the origin', async () => {
    const cwd = process.env.TEST_REPO_PATH

    await checkoutBranch({ branch: 'master', cwd })

    const result = await getRemoteTags({ cwd })

    expect(result).toEqual(
      new Map([
        ['org/feature/v1.0.0', 'cde7266d8004b1391ce033fd86f0ffe4a1ce1793'],
        ['org/feature/v1.1.0', '14630f2c65026f9bda22d6def4abd80ada6fcc6e'],
        ['org/feature2/v1.0.0', '333e8e21de77f9ecee2327db92b45e4232a3e64d'],
      ])
    )
  })

  it('should return with all tags when use https url', async () => {
    const result = await getRemoteTags({
      remote: 'https://github.com/ert78gb/git-utils-test.git',
    })

    expect(result).toEqual(
      new Map([
        ['org/feature/v1.0.0', 'cde7266d8004b1391ce033fd86f0ffe4a1ce1793'],
        ['org/feature/v1.1.0', '14630f2c65026f9bda22d6def4abd80ada6fcc6e'],
        ['org/feature2/v1.0.0', '333e8e21de77f9ecee2327db92b45e4232a3e64d'],
      ])
    )
  })

  it('should return with the prefix filtered tags', async () => {
    const result = await getRemoteTags({
      remote: 'https://github.com/ert78gb/git-utils-test.git',
      prefix: 'org/feature/*',
    })

    expect(result).toEqual(
      new Map([
        ['org/feature/v1.0.0', 'cde7266d8004b1391ce033fd86f0ffe4a1ce1793'],
        ['org/feature/v1.1.0', '14630f2c65026f9bda22d6def4abd80ada6fcc6e'],
      ])
    )
  })

  it('should return empty Map if no matching tags', async () => {
    const result = await getRemoteTags({
      remote: 'https://github.com/ert78gb/git-utils-test.git',
      prefix: 'org/feature/',
    })

    expect(result).toEqual(new Map())
  })
})

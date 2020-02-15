# git-utils

A few useful command to get git infos.
Required node 10 or higher.

## Prerequisites

The library is a wrapper around the `git` binary you have to install [git](https://git-scm.com/) before use this library.

## Commands

### Clone

Clone a remote repository

```javascript
const { clone } = require('@ert78gb/git-utils')

// Equivalent git command
// git clone https://github.com/ert78gb/git-utils-test.git /Users/User/git/git-utils-test
await clone({
  url: 'https://github.com/ert78gb/git-utils-test.git',
  cwd: '/Users/User/git/git-utils-test', // where to clone
})
```

#### Options

| parameter (type) | default value | description                                                              |
| ---------------- | ------------- | ------------------------------------------------------------------------ |
| url (string)     | empty         | HTTPS url of the remote repository                                       |
| cwd (string)     | inherited     | Where to clone the remote repository. Inherited from the Node.js context |

### Checkout Branch

Checkout existing branch.

```javascript
const { checkoutBranch } = require('@ert78gb/git-utils')

// Equivalent git command
// git checkout <branch-name>
await checkoutBranch({
  branchName: 'my-branch',
  cwd: 'path of the git repo',
})
```

#### Options

| parameter (type)    | default value | description                                                    |
| ------------------- | ------------- | -------------------------------------------------------------- |
| branchName (string) | empty         | Name of the branch that would like to checkout                 |
| cwd (string)        | inherited     | Path of the git repository. Inherited from the Node.js context |

## Get Current Branch

Current branch name.

```javascript
const { getCurrentBranchName } = require('@ert78gb/git-utils')

// Equivalent git command
// git rev-parse --abbrev-ref HEAD
const branch = await checkoutBranch({
  cwd: 'path of the git repo',
})

console.log(branch) // my-branch
```

#### Options

| parameter (type) | default value | description                                                    |
| ---------------- | ------------- | -------------------------------------------------------------- |
| cwd (string)     | inherited     | Path of the git repository. Inherited from the Node.js context |

## Get Current Sha

The current SHA1 hash.

```javascript
const { getCurrentSha } = require('@ert78gb/git-utils')

// Equivalent git command
// git rev-parse HEAD
const sha = await getCurrentSha({
  cwd: 'path of the git repo',
})

console.log(sha) // dd064f731ce78a1dd64c41781c8bb01cfda9a6d8
```

#### Options

| parameter (type) | default value | description                                                    |
| ---------------- | ------------- | -------------------------------------------------------------- |
| cwd (string)     | inherited     | Path of the git repository. Inherited from the Node.js context |

## Get Commit Info

The latest commit info.

```javascript
const { getCommitInfo } = require('@ert78gb/git-utils')

// Equivalent git command
// git rev-parse HEAD
const info = await getCommitInfo({
  cwd: 'path of the git repo',
})

console.log(info)
// {
//  sha: '7f15cc49347592fbd60ea839f7e06be553965234',
//  author: 'Committer',
//  date: 2020-02-08T16:19:42.000Z, // Commit date as Date
//  message: 'feat: add b.txt\n\nBody of the comment'
// }
```

#### Options

| parameter (type) | default value | description                                                    |
| ---------------- | ------------- | -------------------------------------------------------------- |
| cwd (string)     | inherited     | Path of the git repository. Inherited from the Node.js context |

#### Output

```typescript
Array<{
  sha:string,
  author: string,
  date: Date,
  message: string
  }>
```

## Get Parent SHA

Query the parent shas of the latest commit or the provided SHA.
If a commit is a merge commit it has multiple parent

```javascript
const { getParentShas } = require('@ert78gb/git-utils')

// Equivalent git command
// git log --pretty=%P -1 7f15cc49347592fbd60ea839f7e06be553965234
const shas = await getCommitInfo({
  sha: '7f15cc49347592fbd60ea839f7e06be553965234'
  cwd: 'path of the git repo',
})

console.log(shas) // ['cde7266d8004b1391ce033fd86f0ffe4a1ce1793']
```

#### Options

| parameter (type) | default value | description                                                                         |
| ---------------- | ------------- | ----------------------------------------------------------------------------------- |
| sha (string)     | empty         | SHA of the commit which parents you would like to get. You can use branch name too. |
| cwd (string)     | inherited     | Path of the git repository. Inherited from the Node.js context                      |

## Get Merge base

Get the merge base of 2 sha or 2 branch

```javascript
const { getMergeBase } = require('@ert78gb/git-utils')

// Equivalent git command
// git merge-base 7f15cc49347592fbd60ea839f7e06be553965234 cde7266d8004b1391ce033fd86f0ffe4a1ce1793
// git merge-base master feature-branch-name
const sha = await getMergeBase({
  sha1: '7f15cc49347592fbd60ea839f7e06be553965234'
  sha2: 'cde7266d8004b1391ce033fd86f0ffe4a1ce1793'
  cwd: 'path of the git repo',
})

console.log(sha) // d3e89505291cb1d5881c6033d2ffd0abfc68fe10
```

#### Options

| parameter (type) | default value            | description                                                                                              |
| ---------------- | ------------------------ | -------------------------------------------------------------------------------------------------------- |
| sha1 (string)    | empty                    | SHA or branch name which part of the merge                                                               |
| sha2 (string)    | sha of the latest commit | SHA or branch name which part of the merge. The default value is the latest commit in the current branch |
| cwd (string)     | inherited                | Path of the git repository. Inherited from the Node.js context                                           |

## Get Changed Files

Get the changed files of 2 sha or 2 commit

```javascript
const { getChangedFiles } = require('@ert78gb/git-utils')

// Equivalent git command
// git diff --name-status 7f15cc49347592fbd60ea839f7e06be553965234 cde7266d8004b1391ce033fd86f0ffe4a1ce1793
// git dif --name-status master feature-branch-name
const changedFiles = await getChangedFiles({
  sha1: '7f15cc49347592fbd60ea839f7e06be553965234'
  sha2: 'cde7266d8004b1391ce033fd86f0ffe4a1ce1793'
  cwd: 'path of the git repo',
})

console.log(changedFiles) // [ { action: 'added', path: 'b.txt' } ]
```

#### Options

| parameter (type) | default value            | description                                                                                 |
| ---------------- | ------------------------ | ------------------------------------------------------------------------------------------- |
| sha1 (string)    | empty                    | SHA or branch name which part of the diff                                                   |
| sha2 (string)    | sha of the latest commit | SHA or branch name which diff. The default value is the latest commit in the current branch |
| cwd (string)     | inherited                | Path of the git repository. Inherited from the Node.js context                              |

#### Output

```Typescript
Array<{
  action: string,
  path: string
}>
```

Values of the actions

- added
- modified
- deleted

## Get Remote Tags

```javascript
const { getRemoteTags } = require('@ert78gb/git-utils')

// Equivalent git command
// git ls-remote --tags https://github.com/ert78gb/git-utils-test.git org/feature/*
const tags = await getRemoteTags({
  remote: 'https://github.com/ert78gb/git-utils-test.git',
  prefix: 'org/feature/*',
})

console.log(tags) // Map { 'org/feature/v1.0.0' => 'cde7266d8004b1391ce033fd86f0ffe4a1ce1793', 'org/feature/v1.1.0' => '14630f2c65026f9bda22d6def4abd80ada6fcc6e' }
```

#### Options

| parameter (type) | default value | description                                                                                                                |
| ---------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| remote (string)  | 'origin'      | URL of the remote git repo or alias remote of the local repo                                                               |
| prefix (string)  | empty         | return only tags that match this pattern. If the \* missing from the end of the string it will exact match not just prefix |
| cwd (string)     | inherited     | Path of the git repository. Inherited from the Node.js context                                                             |

#### Output

```typescript
Map<string, string> // the key and the value also string.
// The key is the tag name the value is the commit sha
```

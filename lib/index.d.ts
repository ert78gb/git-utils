import { Options as ExecaOptions } from 'execa';

export interface GitOptions {
  cwd?: string;
}

export interface CheckoutBranchOptions extends GitOptions {
  branch: string;
}

export declare function checkoutBranch(
  options: CheckoutBranchOptions
): Promise<void>

export interface CloneOptions extends GitOptions {
  url: string
}

export declare function clone(options: CloneOptions): Promise<void>;

export interface GetChangedFilesOptions extends GitOptions {
  sha1: string;
  sha2?: string;
}

export interface ChangedFile {
  action: string;
  path: string;
}

export declare function getChangedFiles(options: GetChangedFilesOptions): Promise<ChangedFile[]>;

export interface GetCommitInfoOptions extends GitOptions {
  sha: string;
}

export interface CommitInfo {
  sha: string;
  author?: string;
  date: Date;
  message: string;
}

export declare function getCommitInfo(options: GetCommitInfoOptions): Promise<CommitInfo>;

export interface GetCurrentBranchOptions extends GitOptions {
}

export declare function getCurrentBranch(options: GetCurrentBranchOptions): Promise<string>;

export interface GetCurrentShaOptions extends GitOptions {
}

export declare function getCurrentSha(options: GetCurrentShaOptions): Promise<string>;

export interface GetFileChangesOptions extends GitOptions {
  path: string;
}
export declare function getFileChanges(options: GetFileChangesOptions): Promise<CommitInfo[]>;

export interface GetChangedFilesOptions extends GitOptions {
  sha1: string;
  sha2?: string;
}

export declare function getMergeBase(options: GetChangedFilesOptions): Promise<string>;

export interface GetParentShasOptions extends GitOptions {
  sha: string;
}

export declare function getParentShas(options: GetParentShasOptions): Promise<string[]>;

export interface GetRemoteTagsOptions extends GitOptions {
  remote: string;
  prefix?: string;
}

export declare function getRemoteTags(options: GetRemoteTagsOptions): Promise<Map<string, string>>;

export declare function git(args: string[], options: ExecaOptions): Promise<string>;

export declare function parseCommit(data: string): CommitInfo;
export declare function parseCommits(data: string): CommitInfo[];

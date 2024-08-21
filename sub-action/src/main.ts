import * as core from '@actions/core'
import * as github from '@actions/github'
import type { IssueCommentCreatedEvent } from '@octokit/webhooks-definitions/schema'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    console.log('자바스크립트 액션')
    console.log(process.env.GITHUB_TOKEN)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

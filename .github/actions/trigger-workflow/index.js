const core = require('@actions/core');
const { Octokit } = require('@octokit/rest');

const token = core.getInput('token');
const owner = core.getInput('owner');
const repo = core.getInput('repo');
const workflow_id = core.getInput('workflow_id');
const ref = core.getInput('ref');

const octokit = new Octokit({ auth: token });

async function run() {
  try {
    const response = await octokit.rest.actions.createWorkflowDispatch({
      owner,
      repo,
      workflow_id,
      ref,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

run();

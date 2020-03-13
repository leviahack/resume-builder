// Third-party dependencies
const { danger, warn, fail, markdown } = require('danger');
const fs = require('fs');

const fromRoot = path => path.replace(`${process.cwd()}/`, '');

function linkToCircleAsset(pathFromProjectRoot) {
  const buildNum = process.env.CIRCLE_BUILD_NUM;
  const repo = process.env.CIRCLE_PROJECT_REPONAME;
  const idx = process.env.CIRCLE_NODE_INDEX;

  return [
    `https://${buildNum}-171161965-gh.circle-artifacts.com/`,
    `${idx}/~/${repo}/${pathFromProjectRoot}`
  ].join('');
}

// Warn no updated lockfile
const packageChanged = danger.git.fileMatch('package.json');
const lockfileChanged = danger.git.fileMatch('yarn.lock');
if (packageChanged && !lockfileChanged) {
  const message = 'Changes were made to package.json, but not to yarn.lock';
  const idea = 'Perhaps you need to run `yarn install`?';
  warn(`${message} - <i>${idea}</i>`);
}

// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
  fail('Please include a description of your PR changes.');
}

// Create log file with Failed linter output
const testFile = 'eslint-report.md';
const linterOutput = fs.readFileSync(testFile).toString();

// Coverage report
let coverageReport = '';
try {
  const coverageLink = linkToCircleAsset('coverage/lcov-report/index.html');
  coverageReport = `# Tests\n All tests passed!\n [View Coverage Report](${coverageLink})`;
} catch (err) {
  const summary = JSON.parse(err.stdout);
  const failedTests = summary.testResults.filter(t => t.status !== 'passed');
  const failSummary = failedTests
    .map(
      t =>
        `<details>
          <summary>${fromRoot(t.name)}</summary>
          <pre>${t.message}</pre>
        </details>`
    )
    .join('\n');

  fail(`
    The following unit tests did _not_ pass 😔.\n
    All tests must pass before this PR can be merged\n\n\n
    ${failSummary}
  `);
}

// Write to PR the result
markdown(`${linterOutput}\n${coverageReport}`);

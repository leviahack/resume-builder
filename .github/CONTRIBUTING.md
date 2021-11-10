# Contributing guidelines

## Linters

Make sure all your code passes linter tests. Project is configured to run the linters anytime you attempt to commit a change.
But if you want to run this task by yourself and see the lint errors on terminal, run `yarn lint:js`.

Linter configuration of this project extends [airbnb](https://github.com/airbnb/javascript).
See `.eslintrc.json` to learn more about the rules and exceptions.

Fix any errors reported by the linters. Leave warnings in at your own
discretion, but _do_ document them.

Document each and every instance where you disable a linter. _Disable linters only for the relevant lines_.

## Styles

This project follow [rscss](https://rscss.io/) rules and uses [emotion](https://emotion.sh/docs/introduction) for writing css styles with JavaScript.

## Branching

The branches must be all created from `develop` and must have the following format:

~~~
<prefix>/<JIRA-US>-brief-description

e.g.

feat/LH-1-login-page
~~~

Where the prefix should be `feat` for new features or `fix` for bug fixing and hotfixes.

## Commit messages

Your commit message should follow [Karma convention](http://karma-runner.github.io/3.0/dev/git-commit-msg.html), that is, it should be prefixed with a tag, depending on the type of contribution.

~~~
<tag>: <subject>

e.g.

feat: create login module and template
~~~

Use **only** the following tags in your commit messages:

* **ci:** for changes to settings of continuos integration tools
* **feat:** for new features for the user, new components or files
* **fix:** for bug fix for the user
* **docs:** for changes to the documentation
* **style:** for scss changes.
* **refactor:** refactoring code
* **test:** adding missing unit tests or refactoring
* **revert:** reverting a commit or change
* **redux:** for changes to the store settings, adding or modify actions/reducers/selectors
* **hooks:** creating or modifying react hooks

If a commit would cover two of the above cases (for example, a new component that
also uses a new hook), split them into separate, focused commits instead.

**Do not** create commits just to fix conflicts from another branch. Instead,
**rebase** and fix conflicts during the rebase process.

## Pull Requests

Send your pull requests to the `develop` branch.

Make sure that your branch is free of conflicts.

If your branch is out of date, **prefer to use rebasing** instead of merging from
master. This keeps history clean and linear.

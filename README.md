# GitHub Action: Conditional Failure
Fails based on certain conditions

### Conditions
#### File Exists
Checks for existing file matching any of the provided glob patterns.
* Arg: `--file-exists`
* Example: `--file-exists -- **/*.error.log`


### Modifiers
#### Not
Negates the next condition
* Arg: `--not`
* Example: `--not --file-exists -- **/*.error.log`

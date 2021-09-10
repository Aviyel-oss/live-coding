#### GIT basics

## Checking the git configuration

```
git config -l

```

## Setting up your git username

```
git config --global user.name "pramit"

```

## Setting up email

```
git config --global user.email "pramit@...com"

```

## Caching credential

```
git config --global credential.helper cache

```

## Initialize repository

```
git init

```

## Adding filename to staging area

```
git add file_name

```

## Adding all the files to the staging area

```
git add .

```

## Add only certain files to the staging area

example add all files starting with "comp"

```
git add comp*

```

## Checking repo Status

```
git status

```

## Commit changes

```
git commit

```

## Commit changes with a message in it

```
git commit -m "YOOOO!!! This is a message"

```

## Add to staging area and commit changes with a message in it

```
git commit -a -m "YOOOO!!! This is another message"

```

## To see the commit history

```
git log

```

## Commit history and the following file changes

```
git log -p

```

## Show specific commit in git

```
git show commit_id

```

## Statistics about changes

```
git log --stat

```

## Changes made before committing them using diff

```
git diff
git diff some_file.js
git diff --staged

```

## Removing tracked files

```
git rm filename

```

## Rename files in git

```
git mv oldfilename newfilename

```

## Revert unstaged changes

```
git checkout file_name

```

## Revert staged changes

```
git reset HEAD filename
git reset HEAD -p

```

## Modify and add changes to the most recent commit

```
git commit --amend

```

## Rollback the last commit

```
git revert HEAD

```

## Revert a previous commit

```
git revert comit_id_here

```

## Create a new branch

```
git branch branch_name

```

## List branch in git

```
git branch

```

## Create a branch and switch it Immediately

```
git checkout -b branch_name

```

## Delete a branch in git

```
git branch -d branch_name

```

## Merge

```
git merge branch_name

```

## Commit log as a graph in git

```
git log --graph --oneline

```

## Commit log as a graph in git of all branches

```
git log --graph --oneline --all

```

## Abort a conflicting merge

```
git merge --abort

```

## Adding a remote repository

```
git add remote https://repository_name.com

```

## View the remote repo URL

```
git remote -v

```

## Get more info about remote repo

```
git remote show origin

```

## Push changes to the remote repository

```
git push

```

## Pull changes from remote repo

```
git pull

```

## Check remote branches that git is currently tracking

```
git branch -r

```

## Fetch remote repo changes

```
git fetch

```

## Current commit logs of the remote repo

```
git log origin/main

```

## Merge remote repo with the local repo

```
git merge origin/main

```

## Get the contents of remote branches in Git without automatically merging

```
git remote update

```

## Push a new branch to the remote repository

```
git push -u origin branch_name

```

## Remove a remote branch in git

```
git push --delete origin branch_name

```

## GIT rebase

(transfer completed work from one branch to another using git rebase)

```
git rebase branch_name

```

## Force a push request in git:(VERY DANGEROUS)(

```
git push -f

```

---

# Git tips and tricks

## Blank commits

```
git commit --allow-empty -m "yooo"

```

## Prettify Logs

```
git log --pretty=oneline --graph --decorate

```

## Clean up local branches

```
git config --global fetch.prune true

```

- you can clean up local branches that have been merged

```
git branch --merged master | grep -v "master" | xargs -n 1 git branch -d

```

## File that specifies intentionally untracked files that Git should ignore

```
.gitignore

```

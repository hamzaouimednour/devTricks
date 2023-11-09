# Cloning
```bash
# clone a repository using Access Token
git clone https://<user>:<token>@github.com/<repository>
```

# Commit
```bash
# changing latest commit
git commit --amend
# changing latest commit without changing its message
git commit --amend --no-edit

# delete the most recent commit + destroying the work you've done
git reset --hard HEAD~1
# local commits are not pushed on the remote server
git cherry -v
```

# Merge
```
# reset all changes back to the last commit
git reset --hard HEAD
git merge --abort

# remove untracked files and directories
git clean -fd

# bring specific commit to your branch
git checkout <branch>
git cherry-pick <commit-id>
```

# Stashing
```bash
# stash changes
git stash
# stash tracked & untracked changes
git stash -u
# stash all changes
git stash -a
```

# Re-applying stash
```bash
# list of stashes
git stash list
# re-apply previous stash (witohut removing changes from stash)
git stash apply
# show stashed files
git stash show
# re-apply previous stash
git stash pop
# re-apply specific stash
git stash pop stash@{2}
```

# List branches
```bash
# list local branches
git branch
# list remote branches
git branch -r
# list all branches (local and remote)
git branch -a
```

# Delete local branches at once
```bash
# delete all local unmerged branches
git branch --no-merged | egrep -v "(^\*|master|dev)" | xargs git branch -D
# delete all local branches (merged and unmerged).
git branch | egrep -v "(^\*|master|dev)" | xargs git branch -D
```

# Delete remote branches at once
```bash
# delete all remote unmerged branches
git branch -r --merged | egrep -v "(^\*|master|dev)" | sed 's/origin\///' | xargs -n 1 git push origin --delete
# delete all remote branches (merged and unmerged).
git branch -r | egrep -v "(^\*|master|dev)" | sed 's/origin\///' | xargs -n 1 git push origin --delete
```

# Alias
```bash
# alais to remove recently added files from the staging area.
git config --global alias.unstage 'reset HEAD --'
git unstage file
git reset HEAD -- file
```

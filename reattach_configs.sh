#!/bin/bash
#If checking out locally, run this so your configs are not included in any pull requests
#We don't add README to this, it has the appid in and still needs a manual mergels


git update-index --no-skip-worktree realm_config.json 
git update-index --no-skip-worktree auth/providers.json
git update-index --no-skip-worktree hosting/config.json
git update-index --no-skip-worktree hosting/files/appConfig.js
git update-index --no-skip-worktree data_sources/mongodb-atlas/config.json
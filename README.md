# DFA Client


### Env variables

Name | Description
--- | ---
PORT | Server port (default: 8090)
REPO_DIR | Cloned repository name (default: repo)
REPO_LINK | Github repository link to clone
CLONE_DIR | Parent directory for the repository cloning (default: external)

Commands to run

```
cd server && npm install
cd .. && npm install
npm run build
npm start
```


## API

```
/refresh

This will clone the given repository
# Example: Cloned repo resides in external/repo
```

# DFA Client


### Env variables

Name | Description
--- | ---
PORT | Server port (default: 8090)
REPO_DIR | Cloned repository name (default: repo)
REPO_LINK | Github repository link to clone
EXTERNAL_DIR | Parent directory for the repository cloning (default: external)
SQLITE_SYNC | true/false, (default: false), if true it will create a new DB or overwrite the existing db, if false uses the existing db 

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

```
/environments

GET     - get environments
POST    - create environment
PATCH   - update environment
DELETE  - delete environment
```

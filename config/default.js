module.exports = {
    "github": {
        "token": "TOKEN",
        "client_id": "CLIENT_ID",
        "client_secret": "CLIENT_SECRET",
        "webhook_secret": "issues!"
    },
    "server": {
      "base_url": "PUBLIC_URL",
      "port": 8080
    },
    "app": {
      "base_url": "PUBLIC_URL"
    },
    "db": {
      "database": "issue-manager",
      "username": "USERNAME",
      "password": "PASSWORD",
      "host": "localhost",
      "dialect": "postgres",
      "logging": false
    },
    "comments": {
      "signature": `

---
This comment was generated automatically by [Issue-Bot](https://github.com/Glavin001/IssueBot/).
      `
    }
};
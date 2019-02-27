---
myid: 5
date: '2019-02-26'
title: Git Workflow
description: 'Source control standards for project'
logo: /img/question.svg
---
## Git Standards for SERVCO

![git simple workflow](/img/gitflow.png)

### Remote repository info (Github)

**[Repositories List](https://github.com/sparktechsllc)**

**[Main Project Repo](https://github.com/sparktechsllc/servco)**

**[Docs Repo](https://github.com/sparktechsllc/servco-docs)**

---

### Quick start

1. Fork github repository (See **Forking Repository** section for details)
2. Clone github repository to your local environment

*Example*

    git clone https://github.com/sparktechsllc/servco

3. Switch to *dev* branch

*Example*

    git checkout dev

4. Start coding

---

### Commiting Changes Workflow

1. Open your local repo and pull new changes from original remote repository
2. Switch to *dev* branch

*Example:*

    git checkout dev

3. Create a new branch (See **Naming conventions**)

*Example:*

    git checkout -b US02/bug

4. Make your changes
5. Commit your changes (See **Naming conventions**)

*Example:*

    git add .
    git commit -m "SERVCO-8 : Added style to login buttons"

6. Merge your new branch to *dev*

*Example:*

    git checkout dev
    git merge US02/bug

7. Push your changes to your remote repo

*Example:*

    git push origin dev

8. Create pull request to original repo

---

### Forking Repository

1. Open the github repository

2. Click on *fork* button (See screenshow below)

![git fork1](/img/forkrepo1.png)

3. Select the account where you want to fork the repository
   
![git fork2](/img/forkrepo2.png)

4. You will be redirected to your new forked repo

---
### Naming conventions

**Feature branch:** (Confluence-US-Id)/(group token)

**Group tokens**

    feat      Feature I'm adding or expanding
    bug       Bug fix or experiment

*Example:*

    US02/bug

**Commit message:** (Jira-Issue-Number) : (Simple description)

*Example:* 

    SERVCO-8 : Added style to login buttons

---

### Syncing upstream to get latest changes on forked repo

1. Configure original repo as a second remote upstream

*Example:*

    git remote add upstream https://github.com/sparktechsllc/servco-docs.git

2. Fetch from remote upstream

*Example:*

    git fetch upstream

3. Merge fetched data into local repo

*Example:*

    git merge upstream/master

4. Now you have the latest changes into your local repo











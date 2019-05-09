---
myid: 4
date: '2019-02-25'
title: Staging Server
description: 'How to set up staging server'
logo: /img/question.svg
---

### Server diagram

![server infrastructure](/img/servco_server.jpg)

---

### Address Info

Front-End (ReactJS App): http://10.0.1.89:3000/

Back-End (Express.js REST API): http://10.0.1.89:5000/

Database (MongoDB): http://10.0.1.89:27017/

Servco Docs (GatsbyJS Wiki): http://10.0.1.89:4000/

Jenkins: http://10.0.1.89:8080/

---

### Credentials

Ubuntu Server

| Name          | Value         |
| ------------- |:-------------:|
| Port          | 22            |
| Username      | dev1          |
| Password      | Sp@rkTeam350  |

Servco Tester

| Name          | Value         |
| ------------- |:-------------:|
| Port          | 3000            |
| Username      | qatesting@test.com|
| Password      | pruebas1  |

Jenkins

| Name          | Value         |
| ------------- |:-------------:|
| Port          | 8080          |
| Username      | servcodevops  |
| Password      | Spark@1234    |


### Deployment guide

You can either deploy a container by running a command on Slack or by running a job manually on Jenkins management console.

**Using Slack commands**

NOTE: You must to be a member of devops channel on SERVCO Slack workspace

To deploy a new version of the system, you just need to type one of the following commands and hit enter:

* Build and deploy wiki: `/build_docs`
* Build and deploy frontend (ReactJS): `/build_frontend`
* Build and deploy backend (Express API): `/build_backend`

**Using Jenkins management console**

1. Log into Jenkins
2. Select the job you want to run

![Jenkins job list](/img/jenkins_dashboard.png)

3. Click on "Build Now"


You will be notified on Slack devops group with the result of the deployment
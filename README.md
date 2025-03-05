# Jenkins CI/CD Pipeline for Frontend Deployment

## Overview
I set up a **Jenkins CI/CD pipeline** to automate the build and deployment of a frontend application using Docker. This project taught me how to use Jenkins, Docker, and Vagrant (together, I already worked with each one of them individually) to create a seamless deployment process.

---

## Challenges Faced
1. **Three Tools Working Together**:
   - I used these tools before individually, making them work together was a lot harder.
   - Learned: It was a lot simpler than I thought it was, took a lot of time and patience to set up.
   - 
2. **SSH Key Issues**:
   - Jenkins kept failing to load the SSH key for deployment.
   - Learned: Jenkins and the deployment server were on the same VM, so SSH was unnecessary. Simplified the pipeline by removing SSH.

3. **Docker Permissions**:
   - Jenkins couldn’t run Docker commands due to permission issues.
   - Learned: Added the Jenkins user to the Docker group and restarted Jenkins.
---

## What I Learned
- **Jenkins Pipelines**: How to define and run CI/CD pipelines using a `Jenkinsfile`.
- **Docker**: How to run Docker commands inside a `Jenkinsfile`
- **Vagrant**: How to make use of Vagrant provisioning
- **Debugging**: How to troubleshoot and fix issues in CI/CD pipelines.

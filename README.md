
# Cloud Build CI/CD Pipeline with Approval Gates

## Project Objective
To demonstrate a Continuous Integration and Continuous Deployment (CI/CD) pipeline with automated build steps and approval-controlled releases.

## Technologies Used
- GitHub
- Google Cloud Build
- Docker
- Artifact Registry
- Cloud Run

## Project Files
- app.py: Flask web application
- requirements.txt: Python dependencies
- Dockerfile: Container build instructions
- cloudbuild.yaml: CI/CD build configuration

## Workflow
1. Store application code in GitHub.
2. Build and verify the application.
3. Create a Docker image.
4. Add an approval gate before production release.
5. Deploy the approved application.

## Current Status
Source code and initial build configuration are prepared.
Google Cloud deployment and approval-gate execution are pending configuration.

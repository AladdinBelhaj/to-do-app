pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my-frontend"
        DOCKER_TAG = "latest"
        DEPLOY_SERVER = "192.168.33.10"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
                
                dir('backend') {
                    // Install sequelize-cli and ensure proper permissions
                    sh 'npm install'
                    sh 'chmod -R 755 node_modules/.bin'
                    sh 'npx sequelize-cli db:create'
                    sh 'npx sequelize-cli db:migrate'
                }
            }
        }
    }
}


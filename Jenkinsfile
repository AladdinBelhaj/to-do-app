pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
                dir('backend') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                dir('frontend') {
                    sh 'npx eslint . --fix'
                }
                dir('backend') {
                    sh 'npx eslint . --fix'
                    sh 'npx sequelize-cli db:migrate'
                }
            }
        }
        stage('Build') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
                dir('backend') {
                    sh 'npm run build'
                }
            }
        }
    }
}

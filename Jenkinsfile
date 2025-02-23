pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                dir('frontend') {
                    // Install Node.js dependencies
                    sh 'npm install'
                    // Build project
                    sh 'npm run build'
                }

                dir('backend') {
                    // Install dependencies for the backend
                    sh 'npm install'
                    // Run Sequelize migrations
                    sh 'npx sequelize-cli db:migrate'
                }
            }
        }
    }
}


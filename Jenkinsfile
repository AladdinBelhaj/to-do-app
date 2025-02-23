pipeline {
    agent any
    stages {
        stage('Build') {
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

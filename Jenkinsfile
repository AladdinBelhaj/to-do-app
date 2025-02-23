pipeline {
    agent any
    stages{
        stage('Build'){
            steps{
                dir('frontend'){ 
                // Install Node js dependencies
                sh 'install npm'
                // Build project
                sh 'npm run build'
                }
            }
        }
    }
}
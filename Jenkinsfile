pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "frontend"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                dir('frontend') {
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Deploy to VM') {
            steps {
                script {
                    // Stop and remove any existing container
                    sh "docker stop frontend || true"
                    sh "docker rm frontend || true"

                    // Run the new container
                    sh "docker run -d -p 80:80 --name frontend ${DOCKER_IMAGE}:${DOCKER_TAG}"
                }
            }
        }
    }

    post {
        success { echo "Pipeline succeeded!" }
        failure { echo "Pipeline failed!" }
    }
}

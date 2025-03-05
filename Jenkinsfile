pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "frontend"
        DOCKER_TAG = "latest"
        DEPLOY_SERVER = "192.168.33.10"
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
                sshagent(credentials: ['b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAA
AAtzc2gtZWQyNTUxOQAAACBY4rXKHnd27NlkOeNe17+dPtzsE2MuI3imS5dF
r8W8SgAAAJDI3EwDyNxMAwAAAAtzc2gtZWQyNTUxOQAAACBY4rXKHnd27Nlk
OeNe17+dPtzsE2MuI3imS5dFr8W8SgAAAEA3BcaIO4pWbpBEIW4Ip2/uLiEt
3Y5iNQ31fjqpz4rz5Fjitcoed3bs2WQ5417Xv50+3OwTYy4jeKZLl0WvxbxK
AAAAB3ZhZ3JhbnQBAgMEBQY=']) { 
                    script {

                        sh """
                            docker save ${DOCKER_IMAGE}:${DOCKER_TAG} | ssh -o StrictHostKeyChecking=no vagrant@${DEPLOY_SERVER} 'docker load'
                        """
                        sh """
                            ssh -o StrictHostKeyChecking=no vagrant@${DEPLOY_SERVER} "docker stop my-frontend || true"
                            ssh -o StrictHostKeyChecking=no vagrant@${DEPLOY_SERVER} "docker rm my-frontend || true"
                            ssh -o StrictHostKeyChecking=no vagrant@${DEPLOY_SERVER} "docker run -d -p 80:80 --name my-frontend ${DOCKER_IMAGE}:${DOCKER_TAG}"
                        """
                    }
                }
            }
        }
    }

    post {
        success { echo "Pipeline succeeded!" }
        failure { echo "Pipeline failed!" }
    }
}
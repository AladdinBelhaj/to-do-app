// pipeline {
//     agent any
//     stages {
//         stage('Build') {
//             steps {
//                 dir('frontend') {
//                     sh 'npm install'
//                     sh 'npm run build'
//                 }
                
//                 dir('backend') {
//                     // Install sequelize-cli and ensure proper permissions
//                     sh 'npm install'
//                     sh 'chmod -R 755 node_modules/.bin'
//                     sh 'npx sequelize-cli db:create'
//                     sh 'npx sequelize-cli db:migrate'
//                     sh 'npx eslint . --fix'
//                 }
//             }
//         }
        
//     }
// }



pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    // Install Node.js dependencies for frontend
                    sh 'npm install'
                }
                dir('backend') {
                    // Install dependencies for backend
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                dir('frontend') {
                    sh 'chmod -R 755 node_modules/.bin'
                    sh 'npx eslint . --fix'
                }
                dir('backend') {
                    sh 'npx eslint . --fix'
                    sh 'npx sequelize-cli db:create'
                    sh 'npx sequelize-cli db:migrate'
                }
            }
        }
        stage('Build') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }
    }
}

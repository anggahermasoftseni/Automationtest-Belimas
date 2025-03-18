pipeline {
    agent any
    environment {
        PRETTIER_CMD = 'npx prettier --write'
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    echo "Checking out the repository..."
                    checkout scm
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo "Installing dependencies..."
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo "Running tests..."
                    sh 'npm run test'
                }
            }
        }

        stage('Format Code with Prettier') {
            steps {
                script {
                    echo "Running Prettier to format code..."
                    sh "$PRETTIER_CMD **/*.js"
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo "Deploying the application..."
                    sh 'npm run deploy'
                }
            }
        }

        stage('Post-Test Cleanup') {
            steps {
                script {
                    echo "Cleaning up after tests..."
                    // Add any cleanup steps if needed, such as removing temporary files
                }
            }
        }
    }

    post {
        always {
            echo "The pipeline has finished executing."
        }
        success {
            echo "The pipeline executed successfully!"
        }
        failure {
            echo "The pipeline failed, please check the logs for errors."
        }
    }
}

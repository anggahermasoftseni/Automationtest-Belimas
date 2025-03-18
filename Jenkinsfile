pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/anggahermasoftseni/Automationtest-Belimas.git'
            }
        }
        stage('Install Node.js') {
            steps {
                bat 'curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -'
                bat 'sudo apt-get install -y nodejs'
                bat 'node -v'
                bat 'npm -v'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --headed'
            }
        }
        stage('Archive Test Reports') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            }
        }
    }
    post {
        always {
            echo 'Build finished!'
        }
    }
}

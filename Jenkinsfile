pipeline {
    agent any
    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/anggahermasoftseni/Automationtest-Belimas.git', branch: 'main'
            }
        }
        stage('Install Node.js') {
            steps {
                sh 'curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -'
                sh 'sudo apt-get install -y nodejs'
                sh 'node -v'
                sh 'npm -v'
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

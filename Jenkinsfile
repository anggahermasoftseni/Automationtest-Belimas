pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/anggahermasoftseni/Automationtest-Belimas.git', branch: 'main'
            }
        }
        stage('Check Environment') {
            steps {
                bat 'node -v'
                bat 'npm -v'
                bat 'where node'
                bat 'where npm'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'  // Pastikan install dependencies dari package-lock.json
            }
        }
        stage('Install Playwright') {
            steps {
                bat 'npm install -g playwright'
                bat 'npx playwright install'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                // Using 'list' for detailed console output and 'html' for detailed report
                bat 'npx playwright test --config=playwright.config.js'
            }
        }
        // stage('Archive Test Reports') {
        //     steps {
        //         archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        //     }
        // }
    }
    post {
        always {
            echo 'Build finished!'
        }
    }
}

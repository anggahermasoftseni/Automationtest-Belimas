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
                git url: 'https://github.com/anggahermasoftseni/Automationtest-Belimas.git', branch: 'main'
            }
        }
        stage('Check Current Location and List Files') {
            steps {
                bat 'echo Current Location: %cd%'      // Log lokasi saat ini (Windows)
                bat 'dir'                              // List file dan folder (Windows)
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
        stage('Check Environment Details') {
            steps {
                echo "Current Location: ${pwd()}"
                bat 'echo Node.js Version:'
                bat 'node -v || echo Node.js not found'
                bat 'echo npm Version:'
                bat 'npm -v || echo npm not found'
                bat 'echo Playwright Version:'
                bat 'npx playwright --version || echo Playwright not found'
                bat 'echo List of Files in Workspace:'
                bat 'dir'
            }
        }
        stage('Check Node.js and Playwright Installation') {
            steps {
                bat 'node -v'  // Cek versi Node.js
                bat 'npm -v'   // Cek versi npm
                bat 'npx playwright --version'  // Cek versi Playwright
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
                sh 'npx playwright test --headed'
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

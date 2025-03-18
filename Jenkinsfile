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
        stage('Install Node.js and Playwright') {
            steps {
                // Cek versi Node.js
                bat 'node -v'
                bat 'npm -v'
        
                // Install Playwright
                bat 'npm install -g playwright'
                bat 'npx playwright install chromium'
            }
        }
        stage('Check Environment Details') {
            steps {
                bat 'echo Current Location: %cd%'
                bat 'dir'
                bat 'node -v'
                bat 'npm -v'
                bat 'npx playwright --version'
            }
        }
        stage('Check Node.js and Playwright Installation') {
            steps {
                bat 'node -v'  // Cek versi Node.js
                bat 'npm -v'   // Cek versi npm
                bat 'npx playwright --version'  // Cek versi Playwright
            }
        }
        // stage('Install Dependencies') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }
        // stage('Run Playwright Tests') {
        //     steps {
        //         sh 'npx playwright test --headed'
        //     }
        // }
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

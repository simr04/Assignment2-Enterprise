pipeline {
  agent {
    docker {
      // Using the Node.js docker image (alpine variant)
      image 'node:20.15.0-alpine'
    }
  }
  
  stages {
    stage('Build') {
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }
    
    stage('Test') {
      steps {
        sh 'npm test -- --watchAll=false'
      }
    }
  }
}

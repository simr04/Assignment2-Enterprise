pipeline {
  agent {
    docker {
      // Using the Node.js docker image (alpine variant)
      image 'node:20.15.0-alpine'
    }
  }
  
  environment {
    NETLIFY_SITE_ID = 'e65577e5-6102-4612-ace5-fb7c39d16623'
    NETLIFY_AUTH_TOKEN = credentials('myToken')
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
    stage('Deploy'){
        agent{
            docker{
                image 'node:20.15.0-alpine'
                reuseNode True

            }
        }
        steps{
            sh '''
            npm install netlify-cli
            node_modules/.bin/netlify --version
            echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
            node_modules/.bin/netlify status
            node_modules/.bin/netlify deploy --prod --dir = build
            '''
        }
    }
  }
}

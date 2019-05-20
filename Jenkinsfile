pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Installation') {
      steps {
        echo 'Build Started'
        sh 'npm install'
      }
    }
  }
}
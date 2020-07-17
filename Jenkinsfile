pipeline {  // agent any    agent { label 'Window(2205)' 

        }  

stages {   

    stage ('Checkout') {    
    
        steps {     
        
            gitlabCommitStatus('Checkout') {  
            
                checkout scm          sh "df -h"sh "ls -lrt"  
                
                    }                 
                    
                    }  
                    
                }     
                
                stage("Build")     
                
                {       echo "My project"       
                
                }      stage('Test Execution') {   
                
                steps { bat 'jenkins.bat'  
                
                }         
                
                }   
                
                }    
                
                post { always 
                {    publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'RunResults/', reportFiles: 
                
                    'runresults.html', reportName: 'HTML LeanFT Report', reportTitles: ''])    
                    
                } 
                    
                }
                    
                }
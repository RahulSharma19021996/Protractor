import {Config,browser} from 'protractor';
var reporter = require('cucumber-html-reporter');
//import {InsertFeatureData} from "./stepDefinations/Hooks";
import { async } from "q";

//var  Feature = 'QPTestingDem';

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

   let ReportDate =yyyy + '-' + mm + '-' + dd;

export let config: Config = {
  directConnect: true,
  
  framework:"custom",
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    browserName: 'chrome',
   /* chromeOptions:{
      args:["--headless","--disable-gpu","--window-size=800,600"]
    }*/
  },  
 
  specs: [ 
    '../features/functional/login.feature',
    '../features/functional/createquote.feature'
 ],
  
  cucumberOpts: {
    //  tags:  [
    //     '@QPIdentifyCustomer'
    // ],
    format:"json:./cucumber_report.json",
    // require step definitions
    require: [
      './stepDefinations/*.js' 
    ]
  },
       onPrepare :()=>{

                browser.manage().window().maximize();

       },
      onComplete :async ()=>{
              var options = {

              theme: 'bootstrap',
              jsonFile: './cucumber_report.json',
              screenshotsDirectory: 'screenshots/',
              storeScreenshots: true,
              output: './Reports/'+ReportDate+'.html',
              reportSuiteAsScenarios: true,
              scenarioTimestamp: true,
              launchReport: true,
              metadata: {
                 "App Version":"0.3.2",
                 "Test Environment": "QPStage",
                 "Browser": "Chrome  83.0.3809.132",
                  "Platform": "Windows 07",
                  "Parallel": "Scenarios",
                  "Executed": "Local"
           }

           
  };

  reporter.generate(options);

  }


};

	
	
	
	
	
	
	
	
	
	

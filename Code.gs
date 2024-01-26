var sheet = SpreadsheetApp.getActive();
var data;
var values;
//tracks end of list
var blankPoint = 0;
var tasksFormatted = "";
var phoneEmail = "";

//compiles the ToDo list to ignore useless info
function compileMessage() {
  data = sheet.getRange("Sheet1!A:A");
  values = data.getValues();
  JSON.stringify(values);

  for (let i in values) {
    if (values[i]=='') {
      break
    } else {
      blankPoint = blankPoint + 1;
    }
  }
  //removes the blank spaces
  values.splice(blankPoint);
  values.splice(0,1);
  for (let i in values) {
    tasksFormatted = tasksFormatted + "\n" + values[i] 
  }
  JSON.stringify(tasksFormatted)
  Logger.log(tasksFormatted)
}

//pushes message of task list
function pushTaskList() {
  compileMessage()
  MailApp.sendEmail(phoneEmail, 
                    'Tasks',  
                    tasksFormatted);
}

function testFunc() {
  var getDate = Date()
  Logger.log(getDate);
}

function doGet() {
  
  var sheet = SpreadsheetApp.getActive();
  var data;
  var values;
  //tracks end of list
  var blankPoint = 0;
  var tasksFormatted = "";

  return HtmlService.createHtmlOutputFromFile('Web.html');
}

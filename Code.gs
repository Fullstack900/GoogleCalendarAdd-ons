function onCalendarEventOpen(e) {
var attendees = e.calendar.attendees;

var htmlContent = '<p>Attendees: </p><br>';
if(attendees){
for(var i=0;i<attendees.length;i++){
htmlContent += '<p>'+ JSON.stringify(attendees[i].displayName)+' </p><br>';
}
}else{
  htmlContent += '<p>Event does not have attendees</p><br>';
}

  return card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('My Add-on Sidebar'))
    .addSection(CardService.newCardSection().addWidget(
      CardService.newTextParagraph().setText(htmlContent)
    ))
    .build();
}


function doGet(e) {

// var response = UrlFetchApp.fetch("https://countriesnow.space/api/v0.1/countries");
//   Logger.log(response);


var checkboxGroup = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.DROPDOWN)
    .setTitle("A group of checkboxes. Multiple selections are allowed.")
    .setFieldName("checkbox_field")
    .addItem("checkbox one title", "checkbox_one_value", false)
    .addItem("checkbox two title", "checkbox_two_value", true)
    .addItem("checkbox three title", "checkbox_three_value", true);


  return card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('My Event Details'))
    .addSection(CardService.newCardSection().addWidget(checkboxGroup))
    .build();

  }

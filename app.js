app = function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBPORkO4KUXAAZxIR478KQBdy4Za0Eg9vA",
    authDomain: "week-7-76c59.firebaseapp.com",
    databaseURL: "https://week-7-76c59.firebaseio.com",
    projectId: "week-7-76c59",
    storageBucket: "week-7-76c59.appspot.com",
    messagingSenderId: "198725120974"
  };
  firebase.initializeApp(config);

  let database = firebase.database();

  let name = "";
  let role = "";
  let startDate = "";
  let rate = "";

  $('#btnSubmit').on("click", function(event) {

    event.preventDefault();

    name = $('#empName').val().trim();
    role = $('#empRole').val().trim();
    startDate = $('#empStartDate').val().trim();
    rate = $('#empRate').val().trim();

    database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      rate: rate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $('#empName').val("");
    $('#empRole').val("");
    $('#empStartDate').val("");
    $('#empRate').val("");


  });

  database.ref().on('child_added', function(snapshot) {

    let tBody = $('#tableBody');
    let newRow = $('<tr>');
    newRow.append($('<td>').text(snapshot.val().name));
    newRow.append($('<td>').text(snapshot.val().role));
    newRow.append($('<td>').text(snapshot.val().startDate));
    newRow.append($('<td>').text(''));
    newRow.append($('<td>').text(snapshot.val().rate));
    newRow.append($('<td>').text(''));
    tBody.append(newRow);
  });





}

$(document).ready(function() {
  app();
});

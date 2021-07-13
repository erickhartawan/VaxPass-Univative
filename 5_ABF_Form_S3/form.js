$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      passportnum: $("#passportnum").val(),
      patientname: $("#patientname").val(),
      patientdob: $("#patientdob").val(),
    };
    console.log(formData);

    $.ajax({
      type: "GET",
      url:
        "https://0mfyguy9zb.execute-api.us-west-1.amazonaws.com/vaxpass_dev/student/" +
        formData.passportnum,
      accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    }).done(function (data) {
      const result = data.Items[0]; // add .fieldname.S for String
      //ReferenceID, StudentID, dateofbirth,dateofissue, fullname, passportnum, university, verified (BOOL)
      const ReferenceID = result.ReferenceID.S;
      const passportnum = result.passportnum.S;
      const StudentID = result.StudentID.S;
      const dateofbirth = result.dateofbirth.S;
      const dateofissue = result.dateofissue.S;
      const fullname = result.fullname.S;
      const university = result.university.S;
      const verified = result.verified.BOOL;
      // $("#containter-root").load("cert.html");
      window.location.assign("cert.html");
      console.log(
        "ReferenceID: " + ReferenceID,
        "passportnum: " + passportnum,
        "StudentID: " + StudentID,
        "dob:" + dateofbirth,
        "dateofissue: " + dateofissue,
        "fullname: " + fullname,
        "university: " + university,
        "verifiedStatus: " + verified
      );
    });
    event.preventDefault();
  });
});

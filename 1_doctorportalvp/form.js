$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      ReferenceID: $("#referenceid").val(),
      patientname: $("#patientname").val(),
      patientdob: $("#patientdob").val(),
      patientvacc: $("#patientvacc").val(),
      patientvaccdate: $("#patientvaccdate").val(),
      patienttestresult: $("#patienttestresult").val(),
      patienttestresult: $("#patienttestresult").val(),
    };
    console.log(formData.ReferenceID);
    console.log(formData);

    $.ajax({
      type: "POST",
      url: "https://0mfyguy9zb.execute-api.us-west-1.amazonaws.com/vaxpass_dev/doctor",
      data: formData,
      contentType: "application/json",
      dataType: "json",
      encode: true,
    }).done(function (datya) {
      console.log(data);
    });

    event.preventDefault();
  });
});

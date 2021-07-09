const axios = require("axios");

axios
  .get(
    "https://0mfyguy9zb.execute-api.us-west-1.amazonaws.com/vaxpass_dev/student/B1234567"
  )
  .then((res) => console.log(res.data.Items[0].fullname.S));

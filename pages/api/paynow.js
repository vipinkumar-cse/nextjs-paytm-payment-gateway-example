import https from "https";
import PaytmConfig from "../../components/Paytm/config";
import PaytmChecksum from "../../components/Paytm/Checksum";
import Userdata from '../../Data/userdatagather';

export default async function paynow(req, res) {

  if (req.method === "POST") {
    var reqBody = JSON.parse(req.body);
    var orderId = "RSGI" + Math.floor(Math.random(6) * 1000000);
    var amount = reqBody.amount;
    var callbackUrl = "http://localhost:3000/api/paymentCallback"
    var userInfo = {
      custId: reqBody.custId, // CLIENT CUSTOMER ID
      mobile: reqBody.mobile,
      email: reqBody.email
    };

    const paytmParams = {};

    paytmParams.body = {
      requestType: "Payment",
      mid: PaytmConfig.PaytmConfig.mid,
      websiteName: PaytmConfig.PaytmConfig.website,
      orderId: orderId,
      callbackUrl: callbackUrl,
      txnAmount: {
        value: amount,
        currency: "INR",
      },
      userInfo: userInfo,
    };
    // console.log("Paytmparams +++++ ", paytmParams)              //printing paytmparams


    PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      PaytmConfig.PaytmConfig.key
    ).then(function (checksum) {
      paytmParams.head = {
        signature: checksum,
      };

      var post_data = JSON.stringify(paytmParams);

      var options = {
        /* for Staging */
        hostname: "securegw-stage.paytm.in",

        /* for Production */
        // hostname: 'securegw.paytm.in',

        port: 443,
        path: `/theia/api/v1/initiateTransaction?mid=${PaytmConfig.PaytmConfig.mid}&orderId=${orderId}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": post_data.length,
        },
      };
      // console.log(options);         //options

      var response = "";
      var post_req = https.request(options, function (post_res) {
        post_res.on("data", function (chunk) {
          response += chunk;

        });




        post_res.on("end", function () {
          response = JSON.parse(response);


          res.send(JSON.stringify({ mid: PaytmConfig.PaytmConfig.mid, orderId: orderId, token: response.body.txnToken }));


          // console.log("Halo1", req.body);
          // console.log("halo2", paytmParams.body.txnAmount);
          // console.log("hal3", paytmParams.body.userInfo);
          Userdata(paytmParams.body.txnAmount);
          Userdata(paytmParams.body.userInfo);

        });
      });


      post_req.write(post_data);
      post_req.end();
    });
  } else {


    res.send(req.body);

  }

}

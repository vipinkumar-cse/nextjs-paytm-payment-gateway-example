import Userdata from "../../Data/userdatagather"

export default function paynow(req, res) {
    const Usertxninfo = req.body;
    Userdata(Usertxninfo);



    if (req.method === "POST") {
        res.send(req.body);
    }
    else {

        console.log(req.method)
        res.send("it's NO")
    }
}
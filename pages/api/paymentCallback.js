
export default function paynow(req, res) {
    console.log(req.body)


    if (req.method === "POST") {
        res.send(req.body);
    }
    else {

        console.log(req.method)
        res.send("it's NO")
    }
}
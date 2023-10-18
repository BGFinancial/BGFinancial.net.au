// collapse all     Ctrl + k + 0
// expand all       Ctrl + k + j
// word wrap toggle Alt + z

function goTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

        // AJAX POST start

        const newEmp = {
            firstName: "Donald",
            lastName: "Garton"
        }

        const httpReq = new XMLHttpRequest();

        let url = "https://bgfinancial.net.au/analytics.json"

        httpReq.open("POST",url);

        httpReq.setRequestHeader = ("Content-Type","application/json");
        // from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
        httpReq.setRequestHeader = ("Access-Control-Allow-Origin","*");
        console.log(httpReq.statusText);

        // NOT WORKING
            // httpReq.addEventListener("load",function(){
            //     if (httpReq.status === 201 && httpReq.readyState === 4){
            //     console.log(httpReq.responseText);
            //     console.log(JSON.parse(httpReq.responseText));
            //     const res = JSON.parse(httpReq.responseText);
            //     console.log(res.employees[0]);
            //     console.log(res.employees[0].firstName);
            //     } else {
            //         console.log("XMLHttpRequest() Method 'PUT' has FAILED.  Request sent to url:-\n" + url + "\n" + httpReq.status);
            //     }
            // })
            // httpReq.send(JSON.stringify(newEmp));
        // NOT WORKING

    // AJAX POST end
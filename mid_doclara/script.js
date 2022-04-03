var arr = [];




function addRMCart(){
    var table = document.getElementById("cartbody");
    var row = table.insertRow(0);
    var product = document.getElementById("razer_m").innerHTML;
    var price = document.getElementById("razer_m_price").innerHTML;
    var row1 = row.insertCell(0);
    var row2 = row.insertCell(1);
    var row3 = row.insertCell(2)
    row1.innerHTML = product;
    row2.innerHTML = price;
    row3.innerHTML = '<a href="#" class="btn btn-primary" onclick="removeRM(this)">Remove</a>';
    
    var sliced = price.slice(4);
    sliced=sliced.replace(/\,/g,'');
    arr.push(Number(sliced));
    var sum = 0;
    for (var i = 0; i<arr.length; i++ ){
        sum+=arr[i];
        
    }
    var total = document.getElementById("theTotal").innerHTML = sum;
    }
    

    function removeRM(r){
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("cartbody").deleteRow(i-1);
        var price = document.getElementById("razer_m_price").innerHTML;
        var sliced = price.slice(4);
        sliced=sliced.replace(/\,/g,'');
        arr.pop("4000");
        var sum = 0;
    for (var i = 0; i<arr.length; i++ ){
        sum+=arr[i];
    }
        var total = document.getElementById("theTotal").innerHTML = sum;


    }



function addRMKCart(){
    var table = document.getElementById("cartbody");
    var row = table.insertRow(0);
    var product = document.getElementById("razer_mk").innerHTML;
    var price = document.getElementById("razer_mk_price").innerHTML;
    var row1 = row.insertCell(0);
    var row2 = row.insertCell(1);
    var row3 = row.insertCell(2)
    row1.innerHTML = product;
    row2.innerHTML = price;
    row3.innerHTML = '<a href="#" class="btn btn-primary" onclick="removeRMK(this)">Remove</a>';
    var intPrice = parseInt(price);
    var sliced = price.slice(4);
    sliced=sliced.replace(/\,/g,'')
    arr.push(Number(sliced));
    var sum = 0;
    for (var i = 0; i<arr.length; i++ ){
        sum+=arr[i];
    }
    var total = document.getElementById("theTotal").innerHTML = sum;
    }

    function removeRMK(r){
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("cartbody").deleteRow(i-1);
        var price = document.getElementById("razer_m_price").innerHTML;
        var sliced = price.slice(4);
        sliced=sliced.replace(/\,/g,'');
        arr.pop("2700");
        var sum = 0;
    for (var i = 0; i<arr.length; i++ ){
        sum+=arr[i];
    }

        var total = document.getElementById("theTotal").innerHTML = sum;


    }


function addRKMKCart(){
    var table = document.getElementById("cartbody");
    var row = table.insertRow(0);
    var product = document.getElementById("rk_mk").innerHTML;
    var price = document.getElementById("rk_mk_price").innerHTML;
    var row1 = row.insertCell(0);
    var row2 = row.insertCell(1);
    var row3 = row.insertCell(2)
    row1.innerHTML = product;
    row2.innerHTML = price;
    row3.innerHTML = '<a href="#" class="btn btn-primary" onclick="removeRKMK(this)">Remove</a>';
    var intPrice = parseInt(price);
    var sliced = price.slice(4);
    sliced=sliced.replace(/\,/g,'')
    arr.push(Number(sliced));
    var sum = 0;
    for (var i = 0; i<arr.length; i++ ){
        sum+=arr[i];
    }
    var total = document.getElementById("theTotal").innerHTML = sum;
    }

    function removeRKMK(r){
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("cartbody").deleteRow(i-1);
        var price = document.getElementById("razer_m_price").innerHTML;
        var sliced = price.slice(4);
        sliced=sliced.replace(/\,/g,'');
        arr.pop("1399");
        var sum = 0;
    for (var i = 0; i<arr.length; i++ ){
        sum+=arr[i];
    }

        var total = document.getElementById("theTotal").innerHTML = sum;


    }


function addLGHCart(){
    var table = document.getElementById("cartbody");
    var row = table.insertRow(0);
    var product = document.getElementById("logi_gh").innerHTML;
    var price = document.getElementById("logi_gh_price").innerHTML;
    var row1 = row.insertCell(0);
    var row2 = row.insertCell(1);
    var row3 = row.insertCell(2)
    row1.innerHTML = product;
    row2.innerHTML = price;
    row3.innerHTML = '<a href="#" class="btn btn-primary" onclick="removeLGH(this)">Remove</a>';
    var intPrice = parseInt(price);
    var sliced = price.slice(4);
    sliced=sliced.replace(/\,/g,'')
    arr.push(Number(sliced));
    var sum = 0;
    for (var i = 0; i<arr.length; i++ ){
        sum+=arr[i];
    }
    var total = document.getElementById("theTotal").innerHTML = sum;
    }


    function removeLGH(r){
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("cartbody").deleteRow(i-1);
        var price = document.getElementById("razer_m_price").innerHTML;
        var sliced = price.slice(4);
        sliced=sliced.replace(/\,/g,'');
        arr.pop("2100");
        var sum = 0;
        for (var i = 0; i<arr.length; i++ ){
            sum+=arr[i];
        }

        var total = document.getElementById("theTotal").innerHTML = sum;


    }

  
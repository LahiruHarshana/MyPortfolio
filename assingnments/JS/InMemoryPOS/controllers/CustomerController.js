var Customers =[];

var customerFormVar =document.querySelector("#customerForm");
var itemFormVar =document.querySelector("#itemForm");
var orderrFormVar =document.querySelector("#orderForm");
var homeFormVar = document.querySelector("#homeeeeee");


homeFormVar.style.display='inline'
customerFormVar.style.display='none';
itemFormVar.style.display='none';
orderrFormVar.style.display='none';


$("#homeNav").click(function (){
    homeFormVar.style.display='inline'
    customerFormVar.style.display='none';
    itemFormVar.style.display='none';
    orderrFormVar.style.display='none';
});

$("#customerNav").click(function (){
    homeFormVar.style.display='none'
    customerFormVar.style.display='inline';
    itemFormVar.style.display='none';
    orderrFormVar.style.display='none';
});


$("#itemNav").click(function (){
    homeFormVar.style.display='none'
    customerFormVar.style.display='none';
    itemFormVar.style.display='inline';
    orderrFormVar.style.display='none';
});



var $tblCustomer = $("#tblCustomer");
var $cIdTxt = $("#cIdTxt");
var $cNameTxt = $("#cNameTxt");
var $cAddressTxt = $("#cAddressTxt");
var $cSalaryText = $("#cSalaryText");


$("#cSavebtn").click(() => {
    const customer = {
        id: $cIdTxt.val(),
        name: $cNameTxt.val(),
        address: $cAddressTxt.val(),
        salary: $cSalaryText.val(),
    };

    Customers.push(customer);
    updateCustomerTable();
    // hi
});

$tblCustomer.on("dblclick", "tr", function () {
    const index = $(this).index();
    Customers.splice(index, 1);
    updateCustomerTable();
});

$("#cUpdateBtn").click(() => {
    const cIdValue = $cIdTxt.val();
    const cNameValue = $cNameTxt.val();
    const cAddressValue = $cAddressTxt.val();
    const cSalaryValue = $cSalaryText.val();

    for (let i = 0; i < Customers.length; i++) {
        if (Customers[i].id === cIdValue) {
            Customers[i] = {
                id: cIdValue,
                name: cNameValue,
                address: cAddressValue,
                salary: cSalaryValue,
            };
            break;
        }
    }

    updateCustomerTable();
});

function updateCustomerTable() {
    $tblCustomer.empty();

    Customers.forEach((customer) => {
        $tblCustomer.append(`<tr><td>${customer.name}</td><td>${customer.id}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`);
    });

    $tblCustomer.find("tr").click(function () {
        const row = $(this);
        const name = row.find("td:eq(0)").text();
        const id = row.find("td:eq(1)").text();
        const address = row.find("td:eq(2)").text();
        const salary = row.find("td:eq(3)").text();

        $cNameTxt.val(name);
        $cIdTxt.val(id);
        $cAddressTxt.val(address);
        $cSalaryText.val(salary);
    });
}

$("#clearBtn").click(() => {
    $cNameTxt.val("");
    $cIdTxt.val("");
    $cAddressTxt.val("");
    $cSalaryText.val("");
});

$("#cDeleteBtn").click(() => {
    const cIdValue = $cIdTxt.val();

    for (let i = 0; i < Customers.length; i++) {
        if (Customers[i].id === cIdValue) {
            Customers.splice(i, 1);
            updateCustomerTable();
            break;
        }
    }
});

$("#cSearchBtn").click(function () {
    const searchValue = $("#cSearchTxt").val();

    if (searchValue.trim() === "") {
        alert("Please enter a valid Customer ID to search.");
        return;
    }

    const customer = Customers.find((c) => c.id === searchValue);

    if (customer) {
        $cNameTxt.val(customer.name);
        $cIdTxt.val(customer.id);
        $cAddressTxt.val(customer.address);
        $cSalaryText.val(customer.salary);
    } else {
        alert("Customer not found.");
    }
});

export default Customers;

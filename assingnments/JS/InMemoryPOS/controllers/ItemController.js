var Items =[];

var customerFormVar =document.querySelector("#customerForm");
var itemFormVar =document.querySelector("#itemForm");
var orderrFormVar =document.querySelector("#orderForm");

customerFormVar.style.display='inline';
itemFormVar.style.display='none';
orderrFormVar.style.display='none';



$("#customerNav").click(function (){
    customerFormVar.style.display='inline';
    itemFormVar.style.display='none';
    orderrFormVar.style.display='none';
});


$("#itemNav").click(function (){
    customerFormVar.style.display='none';
    itemFormVar.style.display='inline';
    orderrFormVar.style.display='none';
});


$("#orderNav").click(function (){
    customerFormVar.style.display="none";
    itemFormVar.style.display="none";
    orderrFormVar.style.display="inline";
});


var $tblItem = $("#itemTbl");
var $iIdTxt = $("#iID");
var $iNameTxt = $("#iName");
var $iPrice = $("#i-Price");
var $iQty = $("#i-qty");


$("#iSaveBtn").click(() => {
    const item = {
        id: $iIdTxt.val(),
        name: $iNameTxt.val(),
        price: $iPrice.val(),
        Qty: $iQty.val(),
    };

    Items.push(item);
    updateItemTable();
});

$tblItem.on("dblclick", "tr", function () {
    const index = $(this).index();
    Items.splice(index, 1);
    updateItemTable();
});

$("#iUpdateBtn").click(() => {
    const iIdValue = $iIdTxt.val();
    const iNameValue = $iNameTxt.val();
    const iPriceValue = $iPrice.val();
    const iQtyValue = $iQty.val();

    for (let i = 0; i < Items.length; i++) {
        if (Items[i].id === iIdValue) {
            Items[i] = {
                id: iIdValue,
                name: iNameValue,
                price: iPriceValue,
                Qty: iQtyValue,
            };
            break;
        }
    }

    updateItemTable();
});

function updateItemTable() {
    $tblItem.empty();

    Items.forEach((item) => { // Use Items array, not Customers
        $tblItem.append(`<tr><td>${item.id}</td><td>${item.name}</td><td>${item.price}</td><td>${item.Qty}</td></tr>`); // Corrected table structure
    });

    $tblItem.find("tr").click(function () {
        const row = $(this);
        const id = row.find("td:eq(0)").text(); // Changed to get item ID
        const name = row.find("td:eq(1)").text(); // Changed to get item name
        const price = row.find("td:eq(2)").text();
        const qty = row.find("td:eq(3)").text();

        $iIdTxt.val(id); // Updated to set the correct values
        $iNameTxt.val(name);
        $iPrice.val(price);
        $iQty.val(qty);
    });
}

$("#iclearBtn").click(() => {
    $iNameTxt.val("");
    $iIdTxt.val("");
    $iPrice.val("");
    $iQty.val("");
});

$("#iDeleteBtn").click(() => {
    const iIdValue = $iIdTxt.val();

    for (let i = 0; i < Items.length; i++) {
        if (Items[i].id === iIdValue) {
            Items.splice(i, 1);
            updateItemTable();
            break;
        }
    }
});

$("#iSearchBtn").click(function () {
    const searchValue = $("#iSearchTxt").val(); // Changed to use the item ID field for searching

    if (searchValue.trim() === "") {
        alert("Please enter a valid Item ID to search.");
        return;
    }

    const item = Items.find((i) => i.id === searchValue);

    if (item) {
        $iNameTxt.val(item.name);
        $iIdTxt.val(item.id);
        $iPrice.val(item.price);
        $iQty.val(item.Qty);
    } else {
        alert("Item not found.");
    }
});

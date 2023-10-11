import Customers from './CustomerController.js';
import Items from "./ItemController.js";




var Orders = [];

$(document).ready(function () {
    $("#orderNav").click(function () {
        const customerFormVar = document.querySelector("#customerForm");
        const itemFormVar = document.querySelector("#itemForm");
        const orderrFormVar = document.querySelector("#orderForm");

        const selectElement = $("#selectCustomerId");
        selectElement.children().remove();

        for (let i = 0; i < Customers.length; i++) {
            const option = $("<option></option>");
            option.val(Customers[i].id);
            option.text(Customers[i].id);
            selectElement.append(option);
        }

        const selectItem = $("#oSelectItem");
        selectItem.children().remove();

        for (let i = 0; i < Items.length; i++) {
            const option = $("<option></option>");
            option.val(Items[i].id);
            option.text(Items[i].id);
            selectItem.append(option);
        }

        customerFormVar.style.display = "none";
        itemFormVar.style.display = "none";
        orderrFormVar.style.display = "inline";

        $("#selectCustomerId").val("");
        $("#oSelectItem").val("");

    });

    $("#selectCustomerId").change(function () {
        const selectedValue = $(this).val();
        for (let i = 0; i < Customers.length; i++) {
            if (selectedValue === Customers[i].id) {
                $("#oCName").val(Customers[i].name);
                $("#CustomerIDORderForm").val(Customers[i].id);
                $("#oCAddress").val(Customers[i].address);
                $("#oCSalary").val(Customers[i].salary);

            }
        }
    });

    $("#oSelectItem").change(function () {
        const selectedValue = $(this).val();
        for (let i = 0; i < Items.length; i++) {
            if (selectedValue === Items[i].id) {
                $("#itemID").val(Items[i].id);
                $("#ItemNameOrder").val(Items[i].name);
                $("#iOPrice").val(Items[i].price);
                $("#iOQty").val(Items[i].Qty);
            }
        }
    });

    $("#addToItemBtn").click(function () {

        var price=$("#iOPrice").val();
        var qty=$("#oqty").val();
        var total = price*qty;
        $("#totalTxt").text(total);
        $("#OrderSubTotal").text(total);

    });

    $("#oSaveBtn").click(function () {
        const order = {
            orderID:$("#oId").val(),
            date: $("#date").val(),
            customerID: $("#CustomerIDORderForm").val(),
            itemID: $("#itemID").val(),
            itemName: $("#ItemNameOrder").val(),
            unitPrice: $("#iOPrice").val(),
            Qty: $("#oqty").val(),
            total: $("#OrderSubTotal").text()
        };

        Orders.push(order);
        updateOrderTable();

    });


    $("#orderCashTxt").keyup(function (e) {
        var total =parseInt($("#OrderSubTotal").text());
        var cash =parseInt($("#orderCashTxt").val());
        var balance =  cash-total;
        $("#orderBalanceTxt").val(balance);
    });


    $("#orderDiscountTxt").keyup(function (e) {
        var total =parseInt($("#totalTxt").text());
        var discount =parseInt($("#orderDiscountTxt").val());

        if ($("#orderDiscountTxt")=="" ){
            var discount =0;
        }
        if (discount===0){
            $("#OrderSubTotal").text(total);
        }else{
            var balance = total-(total*(discount/100));
            $("#OrderSubTotal").text(balance);
        }

    });




});

function updateOrderTable() {
    $("#tblOrderBody").empty();

    Orders.forEach((orders) => {
        $("#tblOrderBody").append(`<tr><td>${orders.itemID}</td><td>${orders.itemName}</td><td>${orders.unitPrice}</td><td>${orders.Qty}</td><td>${orders.total}</td></tr>`);
    });
}
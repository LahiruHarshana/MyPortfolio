const CUS_ID_REGEX = /^(I00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{5,}$/;
const numbersOnlyRegex = /^[0-9]+$/;
const CUS_SALARY_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;

var validationId;
var validationName;
var validationAddress;
var validationSalary;


$("#iSaveBtn").attr('disabled',true);
$("#iUpdateBtn").attr('disabled',true);

$("#iID").keyup(function (e) {
    let value = $("#iID").val();
    if (value.length == 0) {
        $("#iSaveBtn").attr('disabled',true);
        $("#iID").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_ID_REGEX.test(value);
        if (res) {
            validationId =1;
            setBtn();
            $("#iID").css('border', '2px solid green');
        } else {
            $("#iID").css('border', '2px solid red');
        }
    }});

$("#IIName").keyup(function (e) {
    let value = $("#IIName").val();
    if (value.length == 0) {
        $("#iSaveBtn").attr('disabled',true);
        $("#IIName").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_NAME_REGEX.test(value);
        if (res) {
            validationName=1;
            setBtn();
            $("#IIName").css('border', '2px solid green');
        } else {
            $("#IIName").css('border', '2px solid red');
        }
    }});

$("#i-Price").keyup(function (e) {
    let value = $("#i-Price").val();
    if (value.length == 0) {
        $("#iSaveBtn").attr('disabled',true);
        $("#i-Price").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_SALARY_REGEX.test(value);
        if (res) {
            validationAddress=1;
            setBtn();
            $("#i-Price").css('border', '2px solid green');
        } else {
            $("#i-Price").css('border', '2px solid red');
        }
    }});

$("#Iqty").keyup(function (e) {
    let value = $("#Iqty").val();
    if (value.length == 0) {
        $("#iSaveBtn").attr('disabled',true);
        $("#Iqty").css('border', '1px solid #ced4da');
    } else {
        let res = numbersOnlyRegex.test(value);
        if (res) {
            validationSalary=1;
            setBtn();
            $("#Iqty").css('border', '2px solid green');
        } else {
            $("#Iqty").css('border', '2px solid red');
        }
    }});


function setBtn() {
    if (validationId==1 && validationName==1 && validationAddress==1 && validationSalary==1){
        $("#iSaveBtn").attr('disabled',false);
        $("#iUpdateBtn").attr('disabled',false);
    }
}

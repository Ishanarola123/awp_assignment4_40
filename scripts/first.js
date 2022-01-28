var myfirstapp = angular.module("form", []);

//for set by defualt value use this script and link with html file!
myfirstapp.controller("myform", function ($scope){
    $scope.person = {
        name : "ishanarola123@gmail.com",
        age : "20",
        mobileno : "85475995858",
        email:"dsjcfjdj@gmail.com",
        p1_email:"dcdce ede a@gmail.com",
        p2_email:"zdzdxczsdc @gmail.com"
    };
});
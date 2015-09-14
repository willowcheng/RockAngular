/**
 * Created by willowcheng on 15-09-13.
 */
(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        { name: 'Azurite', price: 110.50 },
        { name: 'Bloodstone', price: 22.90 },
        { name: 'Zircon', price: 1100 },
    ];
})();

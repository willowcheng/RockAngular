/**
 * Created by willowcheng on 15-09-13.
 */
(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.product = gem;
    });

    var gem = {
        name: 'Azurite',
        price: 110.50,
        canPurchase: false,
        soldOut: true
    };
})();


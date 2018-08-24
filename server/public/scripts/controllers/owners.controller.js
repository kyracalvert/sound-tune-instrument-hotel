myApp.controller('OwnersController', function ($http) {
    console.log('in OwnersController');

    const vm = this; 

    vm.addOwner = function () {
        console.log('in addOwner');
        $http({
            method: 'POST',
            url: '/owners',
            data: {
                name: vm.name,
                email: vm.email,
                phone: vm.phone,
                city: vm.city,
            }
        }).then(function (response) {
           console.log(response)
        }).catch(function (error) {
            alert('unable to post owner');
        })
    }
})    
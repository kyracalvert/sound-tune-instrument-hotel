myApp.controller('OwnersController', function ($http) {
    console.log('in OwnersController');

    const vm = this;
    vm.ownerToAdd = { name: '', last_name: '', email: '', phone: '', city: '' };
    vm.owner = { owner: '' };

    // Add (POST) owners to DOM
    vm.addOwner = function (ownerToAdd) {
        console.log('in addOwner');
        $http({
            method: 'POST',
            url: '/owners/owners',
            data: ownerToAdd
        }).then((response) => {
            //this should clear owners' input fields upon submit, but isn't
            vm.ownerToAdd = {};
            console.log('response: ', response);
            vm.getOwners();
        }).catch((error) => {
            console.log('error making request: ', error);
            alert('Something went wrong when POSTING owner. Check server!');
        });
    }

    // GET owners' information
    vm.getOwners = function () {
        $http({
            method: 'GET',
            url: '/owners/owners',
        }).then((response) => {
            console.log('response: ', response);
            vm.owner.owner = response.data
            console.log(vm.owner)
        }).catch((error) => {
            console.log('error making owner GET request: ', error)
            alert('Something went wrong when GETTING owner. Check server!')
        })
    }

    vm.getOwners();



})// end controller
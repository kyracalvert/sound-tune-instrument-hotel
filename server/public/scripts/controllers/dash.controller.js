myApp.controller('DashController', function ($http) {
    console.log('in DashController');

    const vm = this;
    vm.owners = [];

    // A pair is an instrument coupled with an owner
    vm.pair = [];

    vm.instrumentToAdd = { ticket_date: '', instrument: '', model: '', description: '', issue: '', checked_in: '', owner_id: '' };
    vm.dash = { instrument: '' };


    // Add (POST) instruments to DOM 
    vm.addInstrument = function (instrumentToAdd) {
        console.log('in addInstrument');
        console.log(instrumentToAdd)
        $http({
            method: 'POST',
            url: '/dash',
            data: instrumentToAdd
        }).then((response) => {
            console.log('response: ', response);
            vm.getInstruments();
        }).catch((error) => {
            console.log('error making request: ', error);
            alert('Something went wrong when POSTING instrument. Check server!');
        });
    }
    // GET instruments and owners' first name
    vm.getInstruments = function () {
        $http({
            method: 'GET',
            url: '/dash',
        }).then((response) => {
            console.log('response: ', response);
            vm.pair = response.data;
            // vm.instruments = response.data;
            console.log(vm.dash)
        }).catch((error) => {
            console.log('error making dash GET request: ', error);
            alert('Something went wrong when GETTING dash. Check server!');
        });
    }

    // GET a list of existing instruments, include owners
    vm.getOwners = function () {
        $http({
            method: 'GET',
            url: '/owners/owners',
        }).then((response) => {
            console.log('response: ', response);
            vm.owners = response.data
            console.log(vm.owners)
        }).catch((error) => {
            console.log('error making owner GET request: ', error)
            alert('Something went wrong when GETTING owner for dash. Check server!')
        })
    }

  
   
    // DELETE an instrument from the database
    vm.deleteInstrument = function (id) {
        console.log('in deleteInstrument');
        $http({
            method: 'DELETE',
            url: '/dash/' + id
        }).then(function (response) {
            alert('Instrument deleted.');
            vm.getInstruments();
            // vm.getOwners();
        }).catch(function (error) {
            alert('Unable to delete instrument');
            console.log(error);
        })
    }


    vm.getInstruments();
    vm.getOwners();

})// end controller




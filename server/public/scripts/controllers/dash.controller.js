myApp.controller('DashController', function ($http) {
    console.log('in DashController');

    const vm = this;
    vm.instrumentToAdd = { ticket_date: '', instrument: '', model: '', description: '', issue: '', owner_id: '' };
    vm.dash = {instrument: ''};

    // Add (POST) instruments to DOM 
    vm.addInstrument = function (instrumentToAdd) {
        console.log('in addInstrument');
        $http({
            method: 'POST',
            url: '/dash',
            data: instrumentToAdd
        }).then((response) => {
            console.log('response', response);
            vm.getInstruments();
        }).catch((error) => {
            console.log('error making request', error);
            alert('Something went wrong when posting instrument. Check server!');
        });
    }
    // GET instruments and owners' first name
    vm.getInstruments = function () {
        $http({
            method: 'GET',
            url: '/dash',
        }).then((response) => {
            console.log('response', response);
            vm.dash.instrument = response.data;
            // vm.instruments = response.data;
            console.log(vm.dash)
        }).catch((error) => {
            console.log('error making dash GET request', error);
            alert('Something went wrong! Check the server.');
        });
    }


    vm.getInstruments();
})




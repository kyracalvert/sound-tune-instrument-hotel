myApp.controller('DashController', function ($http) {
    console.log('in DashController');

    const vm = this;
    const instrumentToAdd = { ticket_date: '', instrument: '', model: '', description: '', issue: '' };
    vm.dash = [];

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
            vm.dash = response.data;
            vm.instruments = response.data;
            console.log(vm.instruments)
        }).catch((error) => {
            console.log('error making dash GET request', error);
            alert('Something went wrong! Check the server.');
        });
    }


    vm.getInstruments();
})




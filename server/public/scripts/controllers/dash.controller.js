myApp.controller('DashController', function ($http) {
    console.log('in DashController');

    const vm = this; 

    vm.addInstrument = function () {
        console.log('in addInstrument');
        $http({
            method: 'POST',
            url: '/dash',
            data: {
                date: vm.ticket_date,
                instrument: vm.instrument,
                model: vm.model,
                description: vm.description,
                issue: vm.issue,
                // image: vm.image
            }
        }).then(function (response) {
           console.log(response)
        }).catch(function (error) {
            alert('unable to post owner');
        })
    }
})    


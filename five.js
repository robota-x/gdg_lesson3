Promise.reject('promise fail!')
    .then(function(value) {
      console.log("success: " + value);
    })
    .catch(function(value) {
        console.log("fail:" + value);
    })
    .then(function() {
        console.log('all done!');
    })
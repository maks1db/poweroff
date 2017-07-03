var express = require('express'),
    router = express.Router();

router.post('/poweroff', (req, res) => {
    
    var exec = require('child_process').exec;

    // Create shutdown function
    function shutdown(callback){
        exec('poweroff', function(error, stdout, stderr){ callback(stdout); });
    }

    // Reboot computer
    shutdown(function(output){
        res.json({result: 'ok'});
    });
});


module.exports = router;
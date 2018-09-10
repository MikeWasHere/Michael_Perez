
$("#demo").animatedModal({
    modalTarget:'modal-02',
    animatedIn:'lightSpeedIn',
    animatedOut:'bounceOutDown',
    color:'#3498db',
    // Callbacks
    beforeOpen: function() {
        console.log("The animation was called");
    },
    afterOpen: function() {
        console.log("The animation is completed");
    },
    beforeClose: function() {
        console.log("The animation was called");
    },
    afterClose: function() {
        console.log("The animation is completed");
    }
});

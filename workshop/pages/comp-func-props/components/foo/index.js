Component({
    properties: {
        callback: {
            type: null,
            observer: function(val) {
                this.innerCallback = val;
            }
        }
    }
})
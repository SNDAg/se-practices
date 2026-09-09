const objectToTest = {
    fetch() {
        // this is the Real "complicated" implementation (e.g., database or API call)
        //this means that it is like the real api returning "[1,2,3]"
        return [1.4783561, 2.21327868, 3.111000]; //api extreanl
    },
    
    //we want to test this method, but we don't want to call the real fetch() method
    decorateFetchedList() {
        const input = this.fetch(); //[1.4783561, 2.21327868, 3.111000]
        return input.map((x) => '*' + x + '*');//[*1.4783561*, *2.21327868*, *3.111000*]
        // a, b , c ==> ['*a*', '*b*', '*c*']
    }
};

module.exports = objectToTest;
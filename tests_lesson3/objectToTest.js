const objectToTest = {
    fetch() {
        // this is the Real "complicated" implementation (e.g., database or API call)
        //this means that it is like the real api returning "[1,2,3]"
        return [1, 2, 3, 4, 5]; //api extreanl
    },
    
    decorateFetchedList() {
        const input = this.fetch();
        return input.map((x) => '*' + x + '*');
    }
};

module.exports = objectToTest;
describe("MathUtils", function () {
    var calc;

    //This will be called before running each spec
    beforeEach(function () {
        calc = new MathUtils();
        
    });

    describe("when calc is used it performs basic math operations", function () {
        //spec for sum operation
        it("should be able to calculate the sum of 3 and 5", function () {
            expect(calc.sum(3, 5)).toEqual(8);
        });

    });
});

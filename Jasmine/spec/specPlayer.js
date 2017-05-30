describe("Player", function () {
    var player;

    //This will be called before running each spec
    beforeEach(function () {
        player = new Player();
    });

        describe("when player starts a game", function () {
            //spec for sum operation
            it("should have an array length of 2", function () {
                expect(player.PlayerObject.cards("BlackJack").length).toEqual(2);
            });
        });
});

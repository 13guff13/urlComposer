define([
    'underscore',
    './common.js'
], function (
    _,
    common
) {
    'use strict';

    describe('Regions.Collection.fetch', function () {
        beforeEach(common.setup);
        afterEach(common.restore);

        it('fetching collection twice, expecting that collection is loaded from server once', function (done) {

            var collection2 = new common.Regions.Collection();

            collection1.fetch().then(function () {
                collection2.fetch().then(function () {
                    expect(this.server.requests.length).toEqual(common.region_1);
                    done();
                }.bind(this));
            }.bind(this));
        });

        it('loading root region called "All", expecting the only node', function (done) {
            var collection = new common.Regions.Collection();

            collection.fetch().then(function () {
                expect(collection.length).toEqual(1);
                var region = collection.first();
                expect(common.Regions.getRegionName(region.id)).toEqual('Все регионы');
            }).then(done);

        });
    });
});


describe('Testing provider', function () {

    var provider;
    beforeEach(module('myApp', function (configProvider) {
        provider = configProvider;
    }));

    it('should be defined', inject(function () {
        expect(provider).to.be.an.object;
        expect(provider.$get).to.be.a.function;
        expect(provider.setHost).to.be.a.function;
        expect(provider.setCatalog).to.be.a.function;
    }));

    it('can be setted', inject(function() {
        var host = 'http://192.168.0.10:8080';
        provider.setHost(host);
        expect(provider.$get().getHost()).to.be.equal(host);
    }));

});

describe('Factory using a provider', function() {
    var host = 'http://192.168.0.10:8080';
    var provider;
    var myFactory;

    beforeEach(module('myApp', function (configProvider) {
        provider = configProvider;
        configProvider.setHost(host);
    }));

    beforeEach(inject(function(_myFactory_) {
        myFactory = _myFactory_;
    }));

    it('echo', inject(function() {
        expect(true).to.be.true;
        expect(provider.$get().getHost()).to.be.equal(host);
        
    }));
    it('should be defined', function() {
        expect(myFactory).to.be.an.defined;
    });
    it('should be get the right urlRest', function() {
        expect(myFactory.urlRest).to.be.equal(host + '/rest/');
    });
});
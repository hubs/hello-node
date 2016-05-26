var assert 	=	require("assert");
describe('#indexOf',function(){
	it('Shoud return -1 when the value is not present',function(){
		assert.equal(-1,[1,2,3].indexOf(0));
	});

	it('Shoue return 0 when value is presend',function(){
		assert.equal(0,[1,2,3].indexOf(1));
	});

	it('Shoud return 2',function(){
		assert.equal(2,[1,2,3].indexOf(3));
	});
});	



import {RouterConfiguration} from '../src/router-configuration';

describe('router configuration', () => {

  it('intantiates correctly', () => {
    var config = new RouterConfiguration();
    expect(config).toBeDefined();
  });

  it('it handles string route', () => {
    var config = new RouterConfiguration();
    config.map('abc');
    
    expect(config.instructions.length).toBe(1);
  });

});

describe('add route', () => {
  // create a spy for the router.
  // And test if router.addRoute(config, navModel) is called with the correct param object.

});

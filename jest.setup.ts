// jest setup: runs once before any test module loads.
// Required because src/utils/config.ts reads process.env at module-init time;
// setting env in a test's beforeEach is too late — by then the config singleton
// has already frozen empty credential strings, causing OAuth auth to fail
// before nock-mocked endpoints can ever respond.
process.env.NODE_ENV = 'test';
process.env.HELPSCOUT_CLIENT_ID = 'test-client-id';
process.env.HELPSCOUT_CLIENT_SECRET = 'test-client-secret';
process.env.HELPSCOUT_BASE_URL = 'https://api.helpscout.net/v2/';

# hippo-repository-explorer
Hippo Repository Explorer

# Express.js (API) Notes:
- Create a Router file hold both ‘/‘ and ‘repos’
- Install Axios for Request

# React (Web) Notes:
- Call Components are in /web/src/components folder
- Call TypeScript Interfaces are in /web/src/types folder
- Constants are in /web/src/constants folder
- Redux Actions are in /web/src/actions folder
- Redux Reducers are in /web/src/reducers folder
- Redux Middleware are in /web/src/middleware folder
- Jest test are in /web/src/tests folder
- Added dependencies include: (redux, react-redux, redux-thunk, react-test-renderer, axios, uuid, react-bootstrap)
- Updated Tslint config for better React Conventions
- Upgraded react-scripts dependency to vi version 3.1.2 solve deprecated issues with recent release dependencies
- Redux Store State Design
	- initialState = {
		repos: [],				// Holds original repo list/data from first call
		languages: [],			// Holds list of available languages (Uses JS Set Method w/ Map to produce)
		visibleRepos: [],			// Holds filtered repo list/data
		view: SHOW_REPOS_VIEW,	// To possible views (repos, and details) 
		details: [],				// Holds repo in focus commits data
		selectedFilter: FILTER_ALL,	// Holds selected filter
		full_name: null			// Holds repo in focus ‘full_name’ for request commit data
	}

# FYI’s:
- I created basic Jest Snapshot test as instructed, however, 5 of the 6 components depend on Redux store.  Each of the 5 test will need to have a mock store passed into a Provider wrapper for testing, not really my ideal way of testing interaction with the Redux. We can discuss this more if needed.

# To Get Started
To install just run ‘npm install’ in both api and web directories
To run just run ‘npm start’
To test run ‘npm test’

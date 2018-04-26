/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "bundle/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([464,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(60);

var _constants2 = _interopRequireDefault(_constants);

var _utils = __webpack_require__(249);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample actions for User managment.
	Feel free to remove and replace with your own actions
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {

	addItem: function addItem(item) {
		// return {
		// 	type: 'ITEM_ADDED',
		// 	data: item
		// }
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.post('/api/item', item, _constants2.default.ITEM_ADDED));
		};
	},

	fetchItems: function fetchItems(params) {
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.get('/api/item', params, _constants2.default.ITEMS_RECEIVED));
		};
	},

	locationChanged: function locationChanged(location) {
		return {
			type: _constants2.default.LOCATION_CHANGED,
			data: location
		};
	},

	//    currentuserReceived: (user) => {
	// 	return {
	// 		type: 'CURRENT_USER_RECEIVED',
	// 		data: location
	// 	}
	// }

	currentUser: function currentUser() {
		console.log('GET CURRENT USER');
		return function (dispatch) {
			return dispatch(_utils.HTTPAsync.get('/auth/currentuser', null, _constants2.default.CURRENT_USER_RECEIVED));
		};
	}

	// fetchUsers: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
	// 	}
	// },

	// addUser: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
	// 	}
	// },

	// // Unlike addUser, register() also maintains a session for login state. After calling 
	// // TurboClient.createUser(), the new user is logged in as well:
	// register: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
	// 	}
	// },

	// loginUser: (credentials) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
	// 	}
	// },

	// currentUser: () => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
	// 	}
	// }

};

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Map = exports.Item = undefined;

var _Map = __webpack_require__(443);

var _Map2 = _interopRequireDefault(_Map);

var _Item = __webpack_require__(250);

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Nav from './Nav'
// import Footer from './Footer'
// import Item from './Item'
exports.Item = _Item2.default;
exports.Map = _Map2.default;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
	_inherits(Nav, _Component);

	function Nav() {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	}

	_createClass(Nav, [{
		key: 'render',
		value: function render() {
			// const currentUser = (this.props.user.currentUser==null) ? null: <p>Welcome, {this.props.user.currentUser}</p>
			var currentUser = this.props.user.currentUser;

			return _react2.default.createElement(
				'nav',
				null,
				_react2.default.createElement(
					'span',
					{ 'class': 'navbar-brand mb-0 h1' },
					'CoachingWow'
				),
				_react2.default.createElement(
					'a',
					{ 'class': 'nav-tab', href: '#' },
					'Dashboard'
				),
				_react2.default.createElement(
					'a',
					{ 'class': 'nav-tab', href: '#' },
					'Reservations'
				),
				_react2.default.createElement(
					'a',
					{ 'class': 'nav-tab', href: '#' },
					' Profiles '
				),
				_react2.default.createElement(
					'a',
					{ 'class': 'nav-tab', href: '#' },
					' ',
					currentUser == null ? null : _react2.default.createElement(
						'p',
						null,
						'Welcome, ',
						currentUser.username
					),
					' '
				)
			);
		}
	}]);

	return Nav;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return {
		user: state.account
	};
};

exports.default = (0, _reactRedux.connect)(stateToProps)(Nav);

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(188);

var _reactRedux = __webpack_require__(62);

var _actions = __webpack_require__(136);

var _actions2 = _interopRequireDefault(_actions);

var _reactDropzone = __webpack_require__(194);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _turbo = __webpack_require__(135);

var _turbo2 = _interopRequireDefault(_turbo);

var _reactBootstrap = __webpack_require__(195);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_Component) {
    _inherits(Results, _Component);

    function Results() {
        _classCallCheck(this, Results);

        var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

        _this.state = {
            showModal: false,
            item: {
                // position:{lat:40.70224017, lng:-73.9796719}
            }
        };
        return _this;
    }

    _createClass(Results, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('componentDidMount: ');
            this.props.fetchItems();
        }
    }, {
        key: 'updateItem',
        value: function updateItem(attr, event) {
            event.preventDefault();
            console.log(attr + ' == ' + event.target.value);
            var updated = Object.assign({}, this.state.item);
            updated[attr] = event.target.value;
            this.setState({
                item: updated
            });
        }
    }, {
        key: 'addItem',
        value: function addItem() {
            // // console.log('ADD ITEM: ' + JSON.stringify(this.state.item))
            // let newItem = Object.assign({}, this.state.item)
            // const len = this.props.item.all.length+1
            // newItem['id'] = len.toString()
            // // newItem['id'] = 100
            // // newItem['key'] = '100'
            // // newItem['defaultAnimation'] = 2
            // newItem['position'] = this.props.map.currentLocation
            // this.props.addItem(newItem)
            if (this.props.account.currentUser == null) {
                alert('Please log in or register to sell items');
                return;
            }

            var currentUser = this.props.account.currentUser;
            var updated = Object.assign({}, this.state.item);
            updated['position'] = this.props.map.currentLocation;
            updated['seller'] = {
                id: currentUser.id,
                username: currentUser.username,
                image: currentUser.image || ''
            };

            console.log('ADD ITEM: ' + JSON.stringify(updated));
            this.props.addItem(updated).then(function (data) {
                console.log('ITEM ADDED: ' + JSON.stringify(data));
            }).catch(function (err) {
                console.log('ERR: ' + err.message);
            });
        }
    }, {
        key: 'uploadImage',
        value: function uploadImage(files) {
            var _this2 = this;

            var image = files[0];
            console.log('uploadImage: ' + image.name);
            var turboClient = (0, _turbo2.default)({
                site_id: '5ad93b1b5789eb00142893f5'
            });

            turboClient.uploadFile(image).then(function (data) {
                // console.log('FILE UPLOADED: ' + JSON.stringify(data))
                // console.log('FILE UPLOADED: ' + data.result.url)
                var updated = Object.assign({}, _this2.state.item);
                updated['image'] = data.result.url;
                _this2.setState({
                    item: updated
                });
            }).catch(function (err) {
                console.log('UPLOAD ERROR: ' + err.message);
            });
        }
    }, {
        key: 'onPurchase',
        value: function onPurchase(item, event) {
            event.preventDefault();
            this.setState({
                showModal: true
            });
            console.log('onPurchase: ' + JSON.stringify(item));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            // const items = [
            //     {id:1, key:'1', price:'10', defaultAnimation:2, label:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}},
            //     {id:2, key:'2', price:'20', defaultAnimation:2, label:'Sofa', position:{lat:40.7124017, lng:-73.9896719}},
            //     {id:2, key:'2', price:'20', defaultAnimation:2, label:'Sofa', position:{lat:40.7124017, lng:-73.9896719}}
            // ]

            var items = this.props.item.all || [];

            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    items.map(function (item, i) {
                        return _react2.default.createElement(_presentation.Item, { key: item.id, onPurchase: _this3.onPurchase.bind(_this3, item), item: item });
                    })
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement('input', { onChange: this.updateItem.bind(this, 'label'), className: 'formControl', type: 'text', placeholder: 'Item' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement('input', { onChange: this.updateItem.bind(this, 'price'), className: 'formControl', type: 'text', placeholder: 'Price' }),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                this.state.item.image == null ? null : _react2.default.createElement('img', { src: this.state.item.image + '=s120-c' }),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactDropzone2.default,
                        { onDrop: this.uploadImage.bind(this), className: 'btn btn-info btn-fill', style: { marginRight: 16 } },
                        'Add Image'
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.addItem.bind(this), className: 'btn btn-success' },
                        'Add Item'
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal,
                    { bsSize: 'sm', show: this.state.showModal, onHide: function onHide() {
                            _this3.setState(showModal);
                        } },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Body,
                        { style: localStyle.modal },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'This is a modal'
                        )
                    )
                )
            );
        }
    }]);

    return Results;
}(_react.Component);

var localStyle = {
    input: {
        border: '1px solid #ddd',
        marginBottom: 12
    }
};

var stateToProps = function stateToProps(state) {
    return {
        item: state.item,
        map: state.map,
        account: state.account
    };
};

var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        addItem: function addItem(item) {
            return dispatch(_actions2.default.addItem(item));
        },
        fetchItems: function fetchItems(params) {
            return dispatch(_actions2.default.fetchItems(params));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Results);

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _superagent = __webpack_require__(22);

var _superagent2 = _interopRequireDefault(_superagent);

var _bluebird = __webpack_require__(19);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// standard superagent get request:
var getRequst = function getRequst(url, params) {
	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.get(url).query(params).set('Accept', 'application/json').end(function (err, response) {
			if (err) {
				reject(err);
				return;
			}

			var payload = response.body || response.text;
			resolve(payload);
		});
	});
};

var postRequst = function postRequst(url, body) {
	return new _bluebird2.default(function (resolve, reject) {
		_superagent2.default.post(url).send(body).set('Accept', 'application/json').end(function (err, response) {
			if (err) {
				reject(err);
				return;
			}

			var payload = response.body || response.text;
			resolve(payload);
		});
	});
};

exports.default = {
	post: function post(url, body, actionType) {
		return function (dispatch) {
			return postRequst(url, body).then(function (data) {
				// console.log('DATA: ' + JSON.stringify(data))
				if (actionType != null) {
					dispatch({
						type: actionType,
						data: data
					});
				}

				return data;
			}).catch(function (err) {
				throw err;
			});
		};
	},

	get: function get(url, params, actionType) {
		return function (dispatch) {
			return getRequst(url, params).then(function (data) {
				// console.log('DATA: ' + JSON.stringify(data))
				if (actionType != null) {
					dispatch({
						type: actionType,
						data: data
					});
				}

				return data;
			}).catch(function (err) {
				throw err;
			});
		};
	}

};

/***/ }),

/***/ 231:
/***/ (function(module) {

module.exports = {"name":"coachingWow","version":"0.0.0","server":false,"private":true,"scripts":{"dev":"webpack --mode development -w","build":"npm run clean && NODE_ENV=production webpack -p && gulp prod","clean":"rm -rf ./public/dist","postinstall":"npm run build"},"dependencies":{"bluebird":"latest","debug":"latest","dotenv":"latest","moment":"latest","react":"latest","react-bootstrap":"latest","react-dom":"latest","react-dropzone":"latest","react-google-maps":"^9.4.5","react-redux":"latest","react-time":"latest","redux":"latest","redux-thunk":"latest","superagent":"latest","turbo360":"latest","vertex360":"latest"},"devDependencies":{"babel-core":"latest","babel-loader":"latest","babel-preset-es2015":"latest","babel-preset-react":"latest","chai":"latest","chai-http":"latest","gulp":"latest","gulp-6to5":"latest","gulp-autoprefixer":"latest","gulp-concat":"latest","gulp-less":"latest","gulp-minify-css":"latest","gulp-rename":"latest","gulp-sass":"^3.1.0","gulp-uglify":"latest","json-loader":"latest","mocha":"latest","mocha-jscs":"latest","mocha-jshint":"latest","nodemon":"latest","rimraf":"latest","webpack":"latest","webpack-cli":"^2.0.15"},"deploy":["."],"format":"vertex","app":""};

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _turbo = __webpack_require__(135);

var _turbo2 = _interopRequireDefault(_turbo);

var _package = __webpack_require__(231);

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_ID = _package2.default.app || '';

var postRequest = function postRequest(resource, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).create(resource, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var getRequest = function getRequest(resource, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).fetch(resource, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					params: params, // can be null
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var putRequest = function putRequest(resource, entity, params, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).update(resource, entity, params).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var deleteRequest = function deleteRequest(resource, entity, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).remove(resource, entity).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var createUser = function createUser(credentials, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).createUser(credentials).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var login = function login(credentials, actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).login(credentials).then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var currentUser = function currentUser(actionType) {
	return function (dispatch) {
		return (0, _turbo2.default)({ site_id: APP_ID }).currentUser().then(function (data) {
			if (actionType != null) {
				dispatch({
					type: actionType,
					data: data
				});
			}

			return data;
		}).catch(function (err) {
			throw err;
		});
	};
};

var uploadFile = function uploadFile(file) {
	return (0, _turbo2.default)({ site_id: APP_ID }).uploadFile(file); // returns a Promise
};

exports.default = {

	getRequest: getRequest,
	postRequest: postRequest,
	putRequest: putRequest,
	deleteRequest: deleteRequest,
	createUser: createUser,
	login: login,
	currentUser: currentUser,
	uploadFile: uploadFile

};

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HTTPAsync = exports.TurboClient = undefined;

var _TurboClient = __webpack_require__(248);

var _TurboClient2 = _interopRequireDefault(_TurboClient);

var _HTTPAsync = __webpack_require__(230);

var _HTTPAsync2 = _interopRequireDefault(_HTTPAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TurboClient = _TurboClient2.default;
exports.HTTPAsync = _HTTPAsync2.default;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {

    var item = props.item;

    return _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
            "div",
            { id: "reservations" },
            _react2.default.createElement(
                "div",
                { "class": "reservation" },
                _react2.default.createElement(
                    "div",
                    { style: localStyle.itemImage },
                    _react2.default.createElement(
                        "a",
                        { onClick: props.onPurchase.bind(undefined), herf: "#" },
                        _react2.default.createElement("img", { style: localStyle.itemImage, src: item.image })
                    )
                ),
                _react2.default.createElement(
                    "h2",
                    null,
                    item.name
                ),
                _react2.default.createElement(
                    "span",
                    { "class": "reservation-date" },
                    "$",
                    item.price,
                    " "
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("img", { style: localStyle.icon, src: item.seller.image })
                )
            )
        )
    );
};

var localStyle = {
    icon: {
        width: 28,
        borderRadius: 14,
        float: 'right'
    },
    itemImage: {
        width: 100 + '%',
        padding: 3,
        border: '1px solid #ddd',
        background: '#ffffa'
    }
};

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(442);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // don't forget google maps import:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC44mPpaMNvENXryYjHBHzjST1UMnYlARk"></script>

var Map = function (_Component) {
	_inherits(Map, _Component);

	function Map() {
		_classCallCheck(this, Map);

		var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this));

		_this.state = {
			map: null
		};
		return _this;
	}

	_createClass(Map, [{
		key: 'mapMoved',
		value: function mapMoved() {
			// console.log('mapMoved: '+JSON.stringify(this.state.map.getCenter()))
			if (this.props.locationChanged != null) this.props.locationChanged(this.state.map.getCenter());
		}
	}, {
		key: 'zoomChanged',
		value: function zoomChanged() {
			// console.log('zoomChanged: '+this.state.map.getZoom())

		}
	}, {
		key: 'mapLoaded',
		value: function mapLoaded(map) {
			if (this.state.map != null) return;

			this.props.onMapReady(map);
			this.setState({
				map: map
			});
		}
	}, {
		key: 'handleMarkerClick',
		value: function handleMarkerClick(marker) {
			if (this.props.markerClicked != null) this.props.markerClicked(marker, this.state.map);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var markers = this.props.markers || [];

			return _react2.default.createElement(
				_reactGoogleMaps.GoogleMap,
				{
					ref: this.mapLoaded.bind(this),
					onDragEnd: this.mapMoved.bind(this),
					onZoomChanged: this.zoomChanged.bind(this),
					defaultZoom: this.props.zoom,
					defaultCenter: this.props.center },
				markers.map(function (marker, index) {
					return _react2.default.createElement(_reactGoogleMaps.Marker, _extends({
						key: index,
						clickable: true,
						icon: marker.icon,
						label: marker.label,
						title: marker.key,
						onClick: _this2.handleMarkerClick.bind(_this2, marker)
					}, marker));
				})
			);
		}
	}]);

	return Map;
}(_react.Component);

exports.default = (0, _reactGoogleMaps.withGoogleMap)(Map);

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(188);

var _reactRedux = __webpack_require__(62);

var _actions = __webpack_require__(136);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_Component) {
	_inherits(Search, _Component);

	function Search() {
		_classCallCheck(this, Search);

		var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

		_this.state = {
			map: null,
			center: null
		};
		return _this;
	}

	_createClass(Search, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.currentUser(); //MISSING () CAN CAUSE THE accountReducer NOT CONSOLE LOG
		}
	}, {
		key: 'centerChanged',
		value: function centerChanged(center) {
			console.log('centerChanged: ' + JSON.stringify(center));
			this.props.locationChanged(center);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			// const markers = [
			//     {id:1, key:'1', defaultAnimation:2, label:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}},
			//     {id:2, key:'2', defaultAnimation:2, label:'Nike Jordans', position:{lat:40.7124017, lng:-73.9896719}}
			// ]

			var items = this.props.item.all || [];

			var markers = [];
			items.forEach(function (item, i) {
				var marker = {
					key: item.id,
					label: item.name,
					position: item.position,
					defaultAnimation: 2
				};

				markers.push(marker);
			});

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_presentation.Map, {
					onMapReady: function onMapReady(map) {
						if (_this2.state.map != null) return;

						console.log('OnMapReady: ' + JSON.stringify(map.getCenter()));
						_this2.setState({
							map: map
						});
					},

					locationChanged: this.centerChanged.bind(this)
					// this.props.changeLocation
					, markers: markers,
					zoom: 12,
					center: { lat: 40.7224017, lng: -73.9896719 },
					containerElement: _react2.default.createElement('div', { style: { height: 100 + '%' } }),
					mapElement: _react2.default.createElement('div', { style: { height: 100 + 'vh' } }) })
			);
		}
	}]);

	return Search;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return {
		item: state.item,
		map: state.map
	};
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return {
		locationChanged: function locationChanged(location) {
			return dispatch(_actions2.default.locationChanged(location));
		},
		currentUser: function currentUser() {
			return dispatch(_actions2.default.currentUser());
		}
	};
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Search);

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Nav = exports.Search = exports.Results = undefined;

var _Search = __webpack_require__(444);

var _Search2 = _interopRequireDefault(_Search);

var _Results = __webpack_require__(229);

var _Results2 = _interopRequireDefault(_Results);

var _Nav = __webpack_require__(196);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Results = _Results2.default;
exports.Search = _Search2.default;
exports.Nav = _Nav2.default; /* * * * * * * * * * * * * * * * * * * * * * * * * * *
                             	Export your container components here. The Users
                             	container is just an example and you will likely
                             	remove it in favor of your own containers. 
                             * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                             */

// import Users from './Users'

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _containers = __webpack_require__(445);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { Results } from './containers'

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.state = {
            map: null
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            // const markers = [
            //     {id:1,key:'1', defaultAnimation:2,label:"Nike Jordan", position:{lat:40.7224017, lng:-73.9896719}},
            //     {id:2,key:'2', defaultAnimation:2,label:"Nike Jordan", position:{lat:40.7024017, lng:-73.9896719}}
            // ] 

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-4' },
                        _react2.default.createElement(_containers.Search, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-5' },
                        _react2.default.createElement(_containers.Nav, null),
                        _react2.default.createElement(_containers.Results, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-3' },
                        'ACCOUNT'
                    )
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(60);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	// all: null,
	currentUser: null // signed in user
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var updated = Object.assign({}, state);

	switch (action.type) {

		case _constants2.default.CURRENT_USER_RECEIVED:
			console.log('CURRENT_USER_RECEIVED: ' + JSON.stringify(action.data));
			updated['currentUser'] = action.data.user;
			return updated;

		// case constants.USERS_RECEIVED:
		// 	newState['all'] = action.data
		// 	return newState

		// case constants.USER_CREATED:
		// 	let array = (newState.all) ? Object.assign([], newState.all) : []
		// 	array.unshift(action.data)
		// 	newState['all'] = array
		// 	return newState

		default:
			return state;
	}
};

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(60);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
	currentLocation: { lat: 40.72, lng: -73.98 }
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var updated = Object.assign({}, state);
	switch (action.type) {

		case _constants2.default.LOCATION_CHANGED:
			console.log('LOCATION_CHANGED: ' + JSON.stringify(action.data));
			updated['currentLocation'] = action.data;
			return updated;

		// case constants.CURRENT_USER_RECEIVED:
		// 	newState['currentUser'] = action.data
		// 	return newState

		// case constants.USERS_RECEIVED:
		// 	newState['all'] = action.data
		// 	return newState

		// case constants.USER_CREATED:
		// 	let array = (newState.all) ? Object.assign([], newState.all) : []
		// 	array.unshift(action.data)
		// 	newState['all'] = array
		// 	return newState

		default:
			return updated;
	}
};

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _constants = __webpack_require__(60);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
		// all: [
		//         {id:'1', price:10, name:'Ping Pong', image: 'https://hoodrhetoric.com/wp-content/uploads/2016/08/Air-Jordan-1-Retro-High-OG-Banned-Black-White-555088-001.jpg', position:{lat:40.7224017, lng:-73.9896719}, seller:{username:'lebron_james',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
		//         {id:'2', price:20, name:'Dance', image: 'https://smhttp-ssl-18667.nexcesscdn.net/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/s/i/sig-7970018-sofa-chise-3.jpg', position:{lat:40.7124017, lng:-73.9996719}, seller:{username:'eli_manning',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}},
		//         {id:'3', price:30, name:'Rock Climbing', image: 'https://d2uk7vc0yceq94.cloudfront.net/uploads/2017/08/25/s/0/1/12707801/PV2H-5.jpeg', position:{lat:40.7024017, lng:-73.999671996719}, seller:{username:'tom_brady',image:'http://cdn.hoopshype.com/i/de/74/ac/lebron-james.png'}}
		//        ]
		all: null
};

exports.default = function () {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
		var action = arguments[1];

		var updated = Object.assign({}, state);

		switch (action.type) {
				case _constants2.default.ITEM_ADDED:
						var payload = action.data;
						console.log('ITEM_ADDED: ' + JSON.stringify(payload.data));
						// let all = Object.assign([], newState.all)
						// let all = (updated.all) ? Object.assign([], updated.all) : []
						var all = Object.assign([], updated.all);
						all.push(payload.data);
						updated['all'] = all;
						return updated;

				case _constants2.default.ITEMS_RECEIVED:
						updated['all'] = action.data.data;
						return updated;

				// case constants.USER_CREATED:
				// 	let array = (newState.all) ? Object.assign([], newState.all) : []
				// 	array.unshift(action.data)
				// 	newState['all'] = array
				// 	return newState

				// case constants.CURRENT_USER_RECEIVED:
				// 	newState['currentUser'] = action.data
				// 	return newState

				// case constants.USERS_RECEIVED:
				// 	newState['all'] = action.data
				// 	return newState


				default:
						return updated;
		}
};

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(60);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a sample reducer or user management. If you remove 
	and use your own reducers, remember to update the store 
	file (../stores/index.js) with your reducers.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: null,
	currentUser: null // signed in user
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var newState = Object.assign({}, state);

	switch (action.type) {

		case _constants2.default.CURRENT_USER_RECEIVED:
			newState['currentUser'] = action.data;
			return newState;

		case _constants2.default.USERS_RECEIVED:
			newState['all'] = action.data;
			return newState;

		case _constants2.default.USER_CREATED:
			var array = newState.all ? Object.assign([], newState.all) : [];
			array.unshift(action.data);
			newState['all'] = array;
			return newState;

		default:
			return state;
	}
};

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.accountReducer = exports.mapReducer = exports.itemReducer = exports.userReducer = undefined;

var _userReducer = __webpack_require__(452);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _itemReducer = __webpack_require__(451);

var _itemReducer2 = _interopRequireDefault(_itemReducer);

var _mapReducer = __webpack_require__(450);

var _mapReducer2 = _interopRequireDefault(_mapReducer);

var _accountReducer = __webpack_require__(449);

var _accountReducer2 = _interopRequireDefault(_accountReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Export your reducers here
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.userReducer = _userReducer2.default;
exports.itemReducer = _itemReducer2.default;
exports.mapReducer = _mapReducer2.default;
exports.accountReducer = _accountReducer2.default;

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(115);

var _reduxThunk = __webpack_require__(454);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(453);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a store with one reducer: userReducer. When 
	adding more reducers, make sure to include them in 
	line 3 (above) and line 18 (below):
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var store;
exports.default = {

	configure: function configure(initialState) {
		// initialState can be null

		var reducers = (0, _redux.combineReducers)({ // insert reducers here
			user: _reducers.userReducer,
			item: _reducers.itemReducer,
			map: _reducers.mapReducer,
			account: _reducers.accountReducer
		});

		if (initialState) {
			store = (0, _redux.createStore)(reducers, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

			return store;
		}

		store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

		return store;
	},

	currentStore: function currentStore() {
		return store;
	}
};

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(9);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stores = __webpack_require__(456);

var _stores2 = _interopRequireDefault(_stores);

var _reactRedux = __webpack_require__(62);

var _Home = __webpack_require__(446);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _react2.default.createElement(
	_reactRedux.Provider,
	{ store: _stores2.default.configure(null) },
	_react2.default.createElement(_Home2.default, null)
);
// import Intro from './components/Intro'


_reactDom2.default.render(app, document.getElementById('root'));

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Here are a few sample constants for typical actions.
	You may want to extends these to the other data
	types for your project (e.g. BLOG_POST_CREATED, BLOG_POST_UPDATED, etc)
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

exports.default = {

	ITEM_ADDED: 'ITEM_ADDED',
	LOCATION_CHANGED: 'LOCATION_CHANGED',
	CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED',
	ITEMS_RECEIVED: 'ITEMS_RECEIVED'
	// USER_LOGGED_IN: 		'USER_LOGGED_IN',
	// CURRENT_USER_RECEIVED: 	'CURRENT_USER_RECEIVED'

	// USERS_RECEIVED: 		'USERS_RECEIVED',
	// USER_CREATED: 			'USER_CREATED',
	// USER_LOGGED_IN: 		'USER_LOGGED_IN',


};

/***/ })

/******/ });
//# sourceMappingURL=app.map
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ERC20.js":
/*!*****************************!*\
  !*** ./components/ERC20.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_shudong_code_Mining3_webapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_shudong_code_Mining3_webapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_shudong_code_Mining3_webapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar Status = {\n    NO_DATA: 'no_data',\n    LOADING_DATA: 'loading_data',\n    DATA_LOADED: 'data_loaded',\n    CONFIRMING: 'confirming',\n    WITHDRAWING: 'withdrawing'\n};\nfunction ERC20(props) {\n    var _this = this;\n    _s();\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Status.NO_DATA), status = ref3[0], setStatus = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), finalizedAt1 = ref1[0], setFinalizedAt = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), dataSource1 = ref2[0], setDataSource = ref2[1];\n    var columns = [\n        {\n            title: 'Snapshot',\n            dataIndex: 'id',\n            key: 'id',\n            render: function(value, _row) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    children: [\n                        value,\n                        \"(\",\n                        new Date(value * 1000).toUTCString(),\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shudong/code/Mining3/webapp/components/ERC20.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, _this);\n            }\n        },\n        {\n            title: 'Total Earning',\n            dataIndex: 'earning',\n            key: 'earning'\n        },\n        {\n            title: 'Balance',\n            dataIndex: 'balance',\n            key: 'balance'\n        },\n        {\n            title: 'Withdrawn',\n            dataIndex: 'withdrawn',\n            key: 'withdrawn'\n        }, \n    ];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_Users_shudong_code_Mining3_webapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, withdrawAt, finalizedAt, earningToken, decimals, ref, ids, values, earningSums, dataSource, totalEarning, i, snapshot, balance, earningPerToken;\n            return _Users_shudong_code_Mining3_webapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setStatus(Status.LOADING_DATA);\n                        signer = props.contract.signer;\n                        _ctx.next = 4;\n                        return props.contract.lastWithdrawAt(signer.getAddress());\n                    case 4:\n                        withdrawAt = _ctx.sent;\n                        _ctx.next = 7;\n                        return props.contract.lastFinalizedAt();\n                    case 7:\n                        finalizedAt = _ctx.sent;\n                        setFinalizedAt(finalizedAt.toNumber());\n                        _ctx.next = 11;\n                        return props.contract.earningToken();\n                    case 11:\n                        earningToken = _ctx.sent;\n                        earningToken = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(earningToken, [\n                            \"function decimals() public view returns(uint8)\"\n                        ], signer);\n                        _ctx.next = 15;\n                        return earningToken.decimals();\n                    case 15:\n                        decimals = _ctx.sent;\n                        _ctx.t0 = _slicedToArray;\n                        _ctx.next = 19;\n                        return props.contract.balanceSnapshots(signer.getAddress());\n                    case 19:\n                        _ctx.t1 = _ctx.sent;\n                        ref = (0, _ctx.t0)(_ctx.t1, 2);\n                        ids = ref[0];\n                        values = ref[1];\n                        _ctx.next = 25;\n                        return props.contract.batchEarningSum(ids);\n                    case 25:\n                        earningSums = _ctx.sent;\n                        earningSums = earningSums.map(function(sum) {\n                            return new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(sum.toString());\n                        });\n                        dataSource = [];\n                        totalEarning = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(0);\n                        for(i = 0; i < ids.length; i++){\n                            snapshot = ids[i].toNumber();\n                            balance = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(values[i].toString()).div('10e+18');\n                            earningPerToken = earningSums[i].minus(i == 0 ? 0 : earningSums[i - 1]).div(decimals);\n                            totalEarning = totalEarning.plus(earningPerToken.times(balance));\n                            dataSource.push({\n                                key: i.toString(),\n                                id: snapshot,\n                                balance: balance.toFixed(),\n                                earning: earningPerToken.times(balance).toFixed(),\n                                withdrawn: snapshot <= withdrawAt.toNumber() ? 'true' : 'false'\n                            });\n                        }\n                        props.onEarning(totalEarning.toFixed());\n                        setDataSource(dataSource);\n                    case 32:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchData().then(function() {\n            setStatus(Status.DATA_LOADED);\n        }).catch(function(err) {\n            setStatus(Status.NO_DATA);\n            setDataSource([]);\n            openNotification(err.toString());\n        });\n    }, []);\n    var openNotification = function(err) {\n        antd__WEBPACK_IMPORTED_MODULE_6__.notification.open({\n            message: 'Failed to transfer',\n            description: err,\n            onClick: function() {}\n        });\n    };\n    var execWithdraw = function() {\n        var _ref = _asyncToGenerator(_Users_shudong_code_Mining3_webapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_shudong_code_Mining3_webapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setStatus(Status.WITHDRAWING);\n                        props.contract.withdraw().then(function(tx) {\n                            return tx.wait(3);\n                        }).then(function(txReceipt) {\n                            return fetchData();\n                        }).then(function() {\n                            setStatus(Status.DATA_LOADED);\n                        }).catch(function(err) {\n                            setStatus(Status.NO_DATA);\n                            openNotification(err.toString());\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function execWithdraw() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var confirmWithdraw = function() {\n        setStatus(Status.CONFIRMING);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"transfer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: status === Status.WITHDRAWING ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Spin, {\n                    tip: \"Waiting for 3 confirmations...\"\n                }, void 0, false, {\n                    fileName: \"/Users/shudong/code/Mining3/webapp/components/ERC20.js\",\n                    lineNumber: 116,\n                    columnNumber: 17\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    className: \"right-space\",\n                    type: \"primary\",\n                    onClick: confirmWithdraw,\n                    children: 'Withdraw'\n                }, void 0, false, {\n                    fileName: \"/Users/shudong/code/Mining3/webapp/components/ERC20.js\",\n                    lineNumber: 117,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {\n                fileName: \"/Users/shudong/code/Mining3/webapp/components/ERC20.js\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Table, {\n                rowClassName: function(row) {\n                    var classes = [];\n                    if (row.withdrawn === 'true') {\n                        classes.push('withdrawed');\n                    }\n                    if (status === Status.CONFIRMING) {\n                        classes.push('pending-withdraw');\n                    }\n                    return classes.join(' ');\n                },\n                dataSource: dataSource1,\n                columns: columns,\n                pagination: false,\n                loading: status === Status.LOADING_DATA\n            }, void 0, false, {\n                fileName: \"/Users/shudong/code/Mining3/webapp/components/ERC20.js\",\n                lineNumber: 127,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Modal, {\n                title: \"Confirm to withdraw\",\n                visible: status === Status.CONFIRMING,\n                onOk: execWithdraw,\n                onCancel: function() {\n                    return setStatus(Status.DATA_LOADED);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/shudong/code/Mining3/webapp/components/ERC20.js\",\n                lineNumber: 143,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shudong/code/Mining3/webapp/components/ERC20.js\",\n        lineNumber: 112,\n        columnNumber: 7\n    }, this));\n}\n_s(ERC20, \"H1ic1JgswiT/KBFPFVUn8sIafzM=\");\n_c = ERC20;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ERC20);\nvar _c;\n$RefreshReg$(_c, \"ERC20\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0VSQzIwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDTTtBQUNKO0FBQ1M7QUFDTztBQUM2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEUsR0FBSyxDQUFDWSxNQUFNLEdBQUcsQ0FBQztJQUNkQyxPQUFPLEVBQUUsQ0FBUztJQUNsQkMsWUFBWSxFQUFFLENBQWM7SUFDNUJDLFdBQVcsRUFBRSxDQUFhO0lBQzFCQyxVQUFVLEVBQUUsQ0FBWTtJQUN4QkMsV0FBVyxFQUFFLENBQWE7QUFDNUIsQ0FBQztTQUVRQyxLQUFLLENBQUNDLEtBQUssRUFBRSxDQUFDOzs7SUFDbkIsR0FBSyxDQUF1QmYsSUFBd0IsR0FBeEJBLCtDQUFRLENBQUNRLE1BQU0sQ0FBQ0MsT0FBTyxHQUE1Q08sTUFBTSxHQUFlaEIsSUFBd0IsS0FBckNpQixTQUFTLEdBQUlqQixJQUF3QjtJQUNwRCxHQUFLLENBQWlDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUF6Q2tCLFlBQVcsR0FBb0JsQixJQUFXLEtBQTdCbUIsY0FBYyxHQUFJbkIsSUFBVztJQUNqRCxHQUFLLENBQStCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQXhDb0IsV0FBVSxHQUFtQnBCLElBQVksS0FBN0JxQixhQUFhLEdBQUlyQixJQUFZO0lBRWhELEdBQUssQ0FBQ3NCLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQztZQUNHQyxLQUFLLEVBQUUsQ0FBVTtZQUNqQkMsU0FBUyxFQUFFLENBQUk7WUFDZkMsR0FBRyxFQUFFLENBQUk7WUFDVEMsTUFBTSxFQUFFLFFBQVFDLENBQVBDLEtBQUssRUFBRUQsSUFBSTs4QkFDaEIsTUFBTSwrREFBTEUsQ0FBSTs7d0JBQUVELEtBQUs7d0JBQUMsQ0FBQzt3QkFBQyxHQUFHLENBQUNFLElBQUksQ0FBQ0YsS0FBSyxHQUFHLElBQUksRUFBRUcsV0FBVzt3QkFBRyxDQUFDOzs7Ozs7OztRQUU3RCxDQUFDO1FBQ0QsQ0FBQ1I7WUFBQUEsS0FBSyxFQUFFLENBQWU7WUFBRUMsU0FBUyxFQUFFLENBQVM7WUFBRUMsR0FBRyxFQUFFLENBQVM7UUFBQSxDQUFDO1FBQzlELENBQUNGO1lBQUFBLEtBQUssRUFBRSxDQUFTO1lBQUVDLFNBQVMsRUFBRSxDQUFTO1lBQUVDLEdBQUcsRUFBRSxDQUFTO1FBQUEsQ0FBQztRQUN4RCxDQUFDRjtZQUFBQSxLQUFLLEVBQUUsQ0FBVztZQUFFQyxTQUFTLEVBQUUsQ0FBVztZQUFFQyxHQUFHLEVBQUUsQ0FBVztRQUFBLENBQUM7SUFDbEUsQ0FBQztJQUVELEdBQUssQ0FBQ08sU0FBUzttTEFBRyxRQUFRLFdBQUksQ0FBQztnQkFFckJDLE1BQU0sRUFDTkMsVUFBVSxFQUNWaEIsV0FBVyxFQUdiaUIsWUFBWSxFQU1WQyxRQUFRLEVBRVEsR0FBMEQsRUFBekVDLEdBQUcsRUFBRUMsTUFBTSxFQUNkQyxXQUFXLEVBR1huQixVQUFVLEVBQ1ZvQixZQUFZLEVBQ1BDLENBQUMsRUFDQUMsUUFBUSxFQUNSQyxPQUFPLEVBQ1BDLGVBQWU7Ozs7d0JBdkJ6QjNCLFNBQVMsQ0FBQ1QsTUFBTSxDQUFDRSxZQUFZO3dCQUN2QnVCLE1BQU0sR0FBR2xCLEtBQUssQ0FBQzhCLFFBQVEsQ0FBQ1osTUFBTTs7K0JBQ1hsQixLQUFLLENBQUM4QixRQUFRLENBQUNDLGNBQWMsQ0FBQ2IsTUFBTSxDQUFDYyxVQUFVOzt3QkFBbEViLFVBQVU7OytCQUNVbkIsS0FBSyxDQUFDOEIsUUFBUSxDQUFDRyxlQUFlOzt3QkFBbEQ5QixXQUFXO3dCQUNqQkMsY0FBYyxDQUFDRCxXQUFXLENBQUMrQixRQUFROzsrQkFFVmxDLEtBQUssQ0FBQzhCLFFBQVEsQ0FBQ1YsWUFBWTs7d0JBQWhEQSxZQUFZO3dCQUNoQkEsWUFBWSxHQUFHLEdBQUcsQ0FBQ3RDLG1EQUFlLENBQzlCc0MsWUFBWSxFQUNaLENBQUM7NEJBQUEsQ0FBZ0Q7d0JBQUEsQ0FBQyxFQUNsREYsTUFBTTs7K0JBRWFFLFlBQVksQ0FBQ0MsUUFBUTs7d0JBQXRDQSxRQUFROzs7K0JBRWNyQixLQUFLLENBQUM4QixRQUFRLENBQUNNLGdCQUFnQixDQUFDbEIsTUFBTSxDQUFDYyxVQUFVOzs7d0JBQXZELEdBQTBEO3dCQUF6RVYsR0FBRyxHQUFZLEdBQTBEO3dCQUFwRUMsTUFBTSxHQUFJLEdBQTBEOzsrQkFDeER2QixLQUFLLENBQUM4QixRQUFRLENBQUNPLGVBQWUsQ0FBQ2YsR0FBRzs7d0JBQXRERSxXQUFXO3dCQUNmQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ2MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLEdBQUc7NEJBQUksTUFBTSxDQUFOLEdBQUcsQ0FBQ3ZELHFEQUFTLENBQUN1RCxHQUFHLENBQUNDLFFBQVE7O3dCQUUzRG5DLFVBQVUsR0FBRyxDQUFDLENBQUM7d0JBQ2ZvQixZQUFZLEdBQUcsR0FBRyxDQUFDekMscURBQVMsQ0FBQyxDQUFDO3dCQUNsQyxHQUFHLENBQU0wQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdKLEdBQUcsQ0FBQ21CLE1BQU0sRUFBRWYsQ0FBQyxHQUFJLENBQUM7NEJBQzVCQyxRQUFRLEdBQUdMLEdBQUcsQ0FBQ0ksQ0FBQyxFQUFFUSxRQUFROzRCQUMxQk4sT0FBTyxHQUFHLEdBQUcsQ0FBQzVDLHFEQUFTLENBQUN1QyxNQUFNLENBQUNHLENBQUMsRUFBRWMsUUFBUSxJQUFJRSxHQUFHLENBQUMsQ0FBUTs0QkFDMURiLGVBQWUsR0FBR0wsV0FBVyxDQUFDRSxDQUFDLEVBQUVpQixLQUFLLENBQ3hDakIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdGLFdBQVcsQ0FBQ0UsQ0FBQyxHQUFHLENBQUMsR0FDaENnQixHQUFHLENBQUNyQixRQUFROzRCQUNkSSxZQUFZLEdBQUdBLFlBQVksQ0FBQ21CLElBQUksQ0FBQ2YsZUFBZSxDQUFDZ0IsS0FBSyxDQUFDakIsT0FBTzs0QkFDOUR2QixVQUFVLENBQUN5QyxJQUFJLENBQUMsQ0FBQztnQ0FDYnBDLEdBQUcsRUFBRWdCLENBQUMsQ0FBQ2MsUUFBUTtnQ0FDZk8sRUFBRSxFQUFFcEIsUUFBUTtnQ0FDWkMsT0FBTyxFQUFFQSxPQUFPLENBQUNvQixPQUFPO2dDQUN4QkMsT0FBTyxFQUFFcEIsZUFBZSxDQUFDZ0IsS0FBSyxDQUFDakIsT0FBTyxFQUFFb0IsT0FBTztnQ0FDL0NFLFNBQVMsRUFBRXZCLFFBQVEsSUFBSVIsVUFBVSxDQUFDZSxRQUFRLEtBQUssQ0FBTSxRQUFHLENBQU87NEJBQ25FLENBQUM7d0JBQ0wsQ0FBQzt3QkFDRGxDLEtBQUssQ0FBQ21ELFNBQVMsQ0FBQzFCLFlBQVksQ0FBQ3VCLE9BQU87d0JBQ3BDMUMsYUFBYSxDQUFDRCxVQUFVOzs7Ozs7UUFDNUIsQ0FBQzt3QkF0Q0tZLFNBQVM7Ozs7SUF3Q2YvQixnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiK0IsU0FBUyxHQUFHbUMsSUFBSSxDQUFDLFFBQ3pCLEdBRCtCLENBQUM7WUFDcEJsRCxTQUFTLENBQUNULE1BQU0sQ0FBQ0csV0FBVztRQUNoQyxDQUFDLEVBQUV5RCxLQUFLLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUssQ0FBQztZQUNmcEQsU0FBUyxDQUFDVCxNQUFNLENBQUNDLE9BQU87WUFDeEJZLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDaEJpRCxnQkFBZ0IsQ0FBQ0QsR0FBRyxDQUFDZCxRQUFRO1FBQ2pDLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBSyxDQUFDZSxnQkFBZ0IsR0FBRyxRQUFRLENBQVBELEdBQUcsRUFBSyxDQUFDO1FBQ2pDOUQsbURBQWlCLENBQUMsQ0FBQztZQUNqQmlFLE9BQU8sRUFBRSxDQUFvQjtZQUM3QkMsV0FBVyxFQUFFSixHQUFHO1lBQ2hCSyxPQUFPLEVBQUUsUUFBUSxHQUFGLENBQUMsQ0FBQztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ0MsWUFBWTttTEFBRyxRQUFRLFdBQUcsQ0FBQzs7Ozt3QkFDN0IxRCxTQUFTLENBQUNULE1BQU0sQ0FBQ0ssV0FBVzt3QkFDNUJFLEtBQUssQ0FBQzhCLFFBQVEsQ0FBQytCLFFBQVEsR0FBR1QsSUFBSSxDQUFDLFFBQVEsQ0FBUFUsRUFBRSxFQUFLLENBQUM7NEJBQ3BDLE1BQU0sQ0FBQ0EsRUFBRSxDQUFDQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsQ0FBQyxFQUFFWCxJQUFJLENBQUMsUUFBUSxDQUFQWSxTQUFTLEVBQUssQ0FBQzs0QkFDcEIsTUFBTSxDQUFDL0MsU0FBUzt3QkFDcEIsQ0FBQyxFQUFFbUMsSUFBSSxDQUFDLFFBQ2hCLEdBRHNCLENBQUM7NEJBQ1hsRCxTQUFTLENBQUNULE1BQU0sQ0FBQ0csV0FBVzt3QkFDaEMsQ0FBQyxFQUFFeUQsS0FBSyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFLLENBQUM7NEJBQ2ZwRCxTQUFTLENBQUNULE1BQU0sQ0FBQ0MsT0FBTzs0QkFDeEI2RCxnQkFBZ0IsQ0FBQ0QsR0FBRyxDQUFDZCxRQUFRO3dCQUNqQyxDQUFDOzs7Ozs7UUFDTCxDQUFDO3dCQVpLb0IsWUFBWTs7OztJQWNsQixHQUFLLENBQUNLLGVBQWUsR0FBRyxRQUM1QixHQURrQyxDQUFDO1FBQzNCL0QsU0FBUyxDQUFDVCxNQUFNLENBQUNJLFVBQVU7SUFDL0IsQ0FBQztJQUVELE1BQU0sNkVBQ0g2QyxDQUFHO1FBQUN3QixTQUFTLEVBQUMsQ0FBVTs7OzBCQUduQmpFLE1BQU0sS0FBS1IsTUFBTSxDQUFDSyxXQUFXLCtFQUN4QlAsc0NBQUk7b0JBQUM0RSxHQUFHLEVBQUMsQ0FBZ0M7Ozs7O3VHQUN6Qy9FLHdDQUFNO29CQUNMOEUsU0FBUyxFQUFDLENBQWE7b0JBQ3ZCRSxJQUFJLEVBQUMsQ0FBUztvQkFDZFQsT0FBTyxFQUFFTSxlQUFlOzhCQUV2QixDQUFVOzs7Ozs7O3dGQUlwQjNFLHlDQUFPOzs7Ozt3RkFDUEgsdUNBQUs7Z0JBQ0prRixZQUFZLEVBQUUsUUFBUSxDQUFQQyxHQUFHLEVBQUssQ0FBQztvQkFDcEIsR0FBRyxDQUFDQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO29CQUNoQixFQUFFLEVBQUVELEdBQUcsQ0FBQ3BCLFNBQVMsS0FBSyxDQUFNLE9BQUUsQ0FBQzt3QkFDM0JxQixPQUFPLENBQUN6QixJQUFJLENBQUMsQ0FBWTtvQkFDN0IsQ0FBQztvQkFDRCxFQUFFLEVBQUU3QyxNQUFNLEtBQUtSLE1BQU0sQ0FBQ0ksVUFBVSxFQUFFLENBQUM7d0JBQy9CMEUsT0FBTyxDQUFDekIsSUFBSSxDQUFDLENBQWtCO29CQUNuQyxDQUFDO29CQUNELE1BQU0sQ0FBQ3lCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLENBQUc7Z0JBQzNCLENBQUM7Z0JBQ0RuRSxVQUFVLEVBQUVBLFdBQVU7Z0JBQ3RCRSxPQUFPLEVBQUVBLE9BQU87Z0JBQ2hCa0UsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCQyxPQUFPLEVBQUV6RSxNQUFNLEtBQUtSLE1BQU0sQ0FBQ0UsWUFBWTs7Ozs7O3dGQUV4Q04sdUNBQUs7Z0JBQ0ptQixLQUFLLEVBQUMsQ0FBcUI7Z0JBQzNCbUUsT0FBTyxFQUFFMUUsTUFBTSxLQUFLUixNQUFNLENBQUNJLFVBQVU7Z0JBQ3JDK0UsSUFBSSxFQUFFaEIsWUFBWTtnQkFDbEJpQixRQUFRLEVBQUUsUUFBUTtvQkFBRjNFLE1BQU0sQ0FBTkEsU0FBUyxDQUFDVCxNQUFNLENBQUNHLFdBQVc7Ozs7Ozs7Ozs7Ozs7QUFLdEQsQ0FBQztHQXhJUUcsS0FBSztLQUFMQSxLQUFLO0FBMElkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FUkMyMC5qcz84NjYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiwgTW9kYWwsIERpdmlkZXIsIFNwaW4sIG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBTdGF0dXMgPSB7XG4gIE5PX0RBVEE6ICdub19kYXRhJyxcbiAgTE9BRElOR19EQVRBOiAnbG9hZGluZ19kYXRhJyxcbiAgREFUQV9MT0FERUQ6ICdkYXRhX2xvYWRlZCcsXG4gIENPTkZJUk1JTkc6ICdjb25maXJtaW5nJyxcbiAgV0lUSERSQVdJTkc6ICd3aXRoZHJhd2luZycsXG59O1xuXG5mdW5jdGlvbiBFUkMyMChwcm9wcykge1xuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShTdGF0dXMuTk9fREFUQSk7XG4gICAgY29uc3QgW2ZpbmFsaXplZEF0LCBzZXRGaW5hbGl6ZWRBdF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbZGF0YVNvdXJjZSwgc2V0RGF0YVNvdXJjZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBjb2x1bW5zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1NuYXBzaG90JyxcbiAgICAgICAgICAgIGRhdGFJbmRleDogJ2lkJyxcbiAgICAgICAgICAgIGtleTogJ2lkJyxcbiAgICAgICAgICAgIHJlbmRlcjogKHZhbHVlLCBfcm93KSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW4+e3ZhbHVlfSh7bmV3IERhdGUodmFsdWUgKiAxMDAwKS50b1VUQ1N0cmluZygpfSk8L3NwYW4+XG4gICAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgICB7dGl0bGU6ICdUb3RhbCBFYXJuaW5nJywgZGF0YUluZGV4OiAnZWFybmluZycsIGtleTogJ2Vhcm5pbmcnfSxcbiAgICAgICAge3RpdGxlOiAnQmFsYW5jZScsIGRhdGFJbmRleDogJ2JhbGFuY2UnLCBrZXk6ICdiYWxhbmNlJ30sXG4gICAgICAgIHt0aXRsZTogJ1dpdGhkcmF3bicsIGRhdGFJbmRleDogJ3dpdGhkcmF3bicsIGtleTogJ3dpdGhkcmF3bid9LFxuICAgIF07XG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldFN0YXR1cyhTdGF0dXMuTE9BRElOR19EQVRBKTtcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvcHMuY29udHJhY3Quc2lnbmVyO1xuICAgICAgICBjb25zdCB3aXRoZHJhd0F0ID0gYXdhaXQgcHJvcHMuY29udHJhY3QubGFzdFdpdGhkcmF3QXQoc2lnbmVyLmdldEFkZHJlc3MoKSk7XG4gICAgICAgIGNvbnN0IGZpbmFsaXplZEF0ID0gYXdhaXQgcHJvcHMuY29udHJhY3QubGFzdEZpbmFsaXplZEF0KCk7XG4gICAgICAgIHNldEZpbmFsaXplZEF0KGZpbmFsaXplZEF0LnRvTnVtYmVyKCkpO1xuXG4gICAgICAgIGxldCBlYXJuaW5nVG9rZW4gPSBhd2FpdCBwcm9wcy5jb250cmFjdC5lYXJuaW5nVG9rZW4oKTtcbiAgICAgICAgZWFybmluZ1Rva2VuID0gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgICAgIGVhcm5pbmdUb2tlbixcbiAgICAgICAgICAgIFtcImZ1bmN0aW9uIGRlY2ltYWxzKCkgcHVibGljIHZpZXcgcmV0dXJucyh1aW50OClcIl0sXG4gICAgICAgICAgICBzaWduZXJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGVjaW1hbHMgPSBhd2FpdCBlYXJuaW5nVG9rZW4uZGVjaW1hbHMoKTtcblxuICAgICAgICBjb25zdCBbaWRzLCB2YWx1ZXNdID0gYXdhaXQgcHJvcHMuY29udHJhY3QuYmFsYW5jZVNuYXBzaG90cyhzaWduZXIuZ2V0QWRkcmVzcygpKTtcbiAgICAgICAgbGV0IGVhcm5pbmdTdW1zID0gYXdhaXQgcHJvcHMuY29udHJhY3QuYmF0Y2hFYXJuaW5nU3VtKGlkcyk7XG4gICAgICAgIGVhcm5pbmdTdW1zID0gZWFybmluZ1N1bXMubWFwKHN1bSA9PiBuZXcgQmlnTnVtYmVyKHN1bS50b1N0cmluZygpKSk7XG5cbiAgICAgICAgdmFyIGRhdGFTb3VyY2UgPSBbXTtcbiAgICAgICAgdmFyIHRvdGFsRWFybmluZyA9IG5ldyBCaWdOdW1iZXIoMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdCA9IGlkc1tpXS50b051bWJlcigpO1xuICAgICAgICAgICAgY29uc3QgYmFsYW5jZSA9IG5ldyBCaWdOdW1iZXIodmFsdWVzW2ldLnRvU3RyaW5nKCkpLmRpdignMTBlKzE4Jyk7XG4gICAgICAgICAgICBjb25zdCBlYXJuaW5nUGVyVG9rZW4gPSBlYXJuaW5nU3Vtc1tpXS5taW51cyhcbiAgICAgICAgICAgICAgICBpID09IDAgPyAwIDogZWFybmluZ1N1bXNbaSAtIDFdXG4gICAgICAgICAgICApLmRpdihkZWNpbWFscyk7XG4gICAgICAgICAgICB0b3RhbEVhcm5pbmcgPSB0b3RhbEVhcm5pbmcucGx1cyhlYXJuaW5nUGVyVG9rZW4udGltZXMoYmFsYW5jZSkpO1xuICAgICAgICAgICAgZGF0YVNvdXJjZS5wdXNoKHtcbiAgICAgICAgICAgICAgICBrZXk6IGkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBpZDogc25hcHNob3QsXG4gICAgICAgICAgICAgICAgYmFsYW5jZTogYmFsYW5jZS50b0ZpeGVkKCksXG4gICAgICAgICAgICAgICAgZWFybmluZzogZWFybmluZ1BlclRva2VuLnRpbWVzKGJhbGFuY2UpLnRvRml4ZWQoKSxcbiAgICAgICAgICAgICAgICB3aXRoZHJhd246IHNuYXBzaG90IDw9IHdpdGhkcmF3QXQudG9OdW1iZXIoKSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9wcy5vbkVhcm5pbmcodG90YWxFYXJuaW5nLnRvRml4ZWQoKSk7XG4gICAgICAgIHNldERhdGFTb3VyY2UoZGF0YVNvdXJjZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hEYXRhKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoU3RhdHVzLkRBVEFfTE9BREVEKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgc2V0U3RhdHVzKFN0YXR1cy5OT19EQVRBKTtcbiAgICAgICAgICAgIHNldERhdGFTb3VyY2UoW10pO1xuICAgICAgICAgICAgb3Blbk5vdGlmaWNhdGlvbihlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH0pXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgb3Blbk5vdGlmaWNhdGlvbiA9IChlcnIpID0+IHtcbiAgICAgIG5vdGlmaWNhdGlvbi5vcGVuKHtcbiAgICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byB0cmFuc2ZlcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlcnIsXG4gICAgICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGV4ZWNXaXRoZHJhdyA9IGFzeW5jKCkgPT4ge1xuICAgICAgICBzZXRTdGF0dXMoU3RhdHVzLldJVEhEUkFXSU5HKTtcbiAgICAgICAgcHJvcHMuY29udHJhY3Qud2l0aGRyYXcoKS50aGVuKCh0eCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHR4LndhaXQoMyk7XG4gICAgICAgIH0pLnRoZW4oKHR4UmVjZWlwdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoRGF0YSgpO1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFN0YXR1cyhTdGF0dXMuREFUQV9MT0FERUQpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0dXMoU3RhdHVzLk5PX0RBVEEpO1xuICAgICAgICAgICAgb3Blbk5vdGlmaWNhdGlvbihlcnIudG9TdHJpbmcoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpcm1XaXRoZHJhdyA9ICgpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKFN0YXR1cy5DT05GSVJNSU5HKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmFuc2Zlcic+XG4gICAgICAgIDw+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdHVzID09PSBTdGF0dXMuV0lUSERSQVdJTkdcbiAgICAgICAgICAgICAgPyA8U3BpbiB0aXA9XCJXYWl0aW5nIGZvciAzIGNvbmZpcm1hdGlvbnMuLi5cIiAvPlxuICAgICAgICAgICAgICA6IDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncmlnaHQtc3BhY2UnXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb25maXJtV2l0aGRyYXd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeydXaXRoZHJhdyd9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAgcm93Q2xhc3NOYW1lPXsocm93KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBjbGFzc2VzID0gW107XG4gICAgICAgICAgICAgIGlmIChyb3cud2l0aGRyYXduID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXMucHVzaCgnd2l0aGRyYXdlZCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IFN0YXR1cy5DT05GSVJNSU5HKSB7XG4gICAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goJ3BlbmRpbmctd2l0aGRyYXcnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XG4gICAgICAgICAgbG9hZGluZz17c3RhdHVzID09PSBTdGF0dXMuTE9BRElOR19EQVRBfVxuICAgICAgICAvPlxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICB0aXRsZT1cIkNvbmZpcm0gdG8gd2l0aGRyYXdcIlxuICAgICAgICAgIHZpc2libGU9e3N0YXR1cyA9PT0gU3RhdHVzLkNPTkZJUk1JTkd9XG4gICAgICAgICAgb25Paz17ZXhlY1dpdGhkcmF3fVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRTdGF0dXMoU3RhdHVzLkRBVEFfTE9BREVEKX1cbiAgICAgICAgPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRVJDMjA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJldGhlcnMiLCJtb21lbnQiLCJCaWdOdW1iZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRhYmxlIiwiQnV0dG9uIiwiTW9kYWwiLCJEaXZpZGVyIiwiU3BpbiIsIm5vdGlmaWNhdGlvbiIsIlN0YXR1cyIsIk5PX0RBVEEiLCJMT0FESU5HX0RBVEEiLCJEQVRBX0xPQURFRCIsIkNPTkZJUk1JTkciLCJXSVRIRFJBV0lORyIsIkVSQzIwIiwicHJvcHMiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJmaW5hbGl6ZWRBdCIsInNldEZpbmFsaXplZEF0IiwiZGF0YVNvdXJjZSIsInNldERhdGFTb3VyY2UiLCJjb2x1bW5zIiwidGl0bGUiLCJkYXRhSW5kZXgiLCJrZXkiLCJyZW5kZXIiLCJfcm93IiwidmFsdWUiLCJzcGFuIiwiRGF0ZSIsInRvVVRDU3RyaW5nIiwiZmV0Y2hEYXRhIiwic2lnbmVyIiwid2l0aGRyYXdBdCIsImVhcm5pbmdUb2tlbiIsImRlY2ltYWxzIiwiaWRzIiwidmFsdWVzIiwiZWFybmluZ1N1bXMiLCJ0b3RhbEVhcm5pbmciLCJpIiwic25hcHNob3QiLCJiYWxhbmNlIiwiZWFybmluZ1BlclRva2VuIiwiY29udHJhY3QiLCJsYXN0V2l0aGRyYXdBdCIsImdldEFkZHJlc3MiLCJsYXN0RmluYWxpemVkQXQiLCJ0b051bWJlciIsIkNvbnRyYWN0IiwiYmFsYW5jZVNuYXBzaG90cyIsImJhdGNoRWFybmluZ1N1bSIsIm1hcCIsInN1bSIsInRvU3RyaW5nIiwibGVuZ3RoIiwiZGl2IiwibWludXMiLCJwbHVzIiwidGltZXMiLCJwdXNoIiwiaWQiLCJ0b0ZpeGVkIiwiZWFybmluZyIsIndpdGhkcmF3biIsIm9uRWFybmluZyIsInRoZW4iLCJjYXRjaCIsImVyciIsIm9wZW5Ob3RpZmljYXRpb24iLCJvcGVuIiwibWVzc2FnZSIsImRlc2NyaXB0aW9uIiwib25DbGljayIsImV4ZWNXaXRoZHJhdyIsIndpdGhkcmF3IiwidHgiLCJ3YWl0IiwidHhSZWNlaXB0IiwiY29uZmlybVdpdGhkcmF3IiwiY2xhc3NOYW1lIiwidGlwIiwidHlwZSIsInJvd0NsYXNzTmFtZSIsInJvdyIsImNsYXNzZXMiLCJqb2luIiwicGFnaW5hdGlvbiIsImxvYWRpbmciLCJ2aXNpYmxlIiwib25PayIsIm9uQ2FuY2VsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ERC20.js\n");

/***/ })

});
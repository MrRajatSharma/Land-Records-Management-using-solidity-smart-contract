App = {
	web3Provider: null,
	contracts: {
        owner: "0x17e336990AA131ab1498FfFF928dAAA0BCcD9fDA",
        address: "0x6122bDEa2d7b7BDE6b19C5BBEDd2dC1A37409C99",
		ABI: [
			{
				"constant": false,
				"inputs": [
					{
						"name": "accountAddress",
						"type": "address"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "contactNumber",
						"type": "string"
					},
					{
						"name": "email",
						"type": "string"
					},
					{
						"name": "password",
						"type": "string"
					},
					{
						"name": "aadhar",
						"type": "uint256"
					}
				],
				"name": "addNewUser",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "aadhar",
						"type": "uint256"
					},
					{
						"name": "khataNo",
						"type": "int256"
					},
					{
						"name": "khewatNo",
						"type": "int256"
					},
					{
						"name": "fullAddress",
						"type": "string"
					},
					{
						"name": "landmark",
						"type": "string"
					},
					{
						"name": "state",
						"type": "string"
					},
					{
						"name": "zip",
						"type": "string"
					},
					{
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "addProperty",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "aadhar",
						"type": "uint256"
					},
					{
						"name": "index",
						"type": "uint256"
					}
				],
				"name": "getProperty",
				"outputs": [
					{
						"name": "",
						"type": "int256"
					},
					{
						"name": "",
						"type": "int256"
					},
					{
						"name": "",
						"type": "string"
					},
					{
						"name": "",
						"type": "string"
					},
					{
						"name": "",
						"type": "string"
					},
					{
						"name": "",
						"type": "string"
					},
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "aadhar",
						"type": "uint256"
					}
				],
				"name": "getTotalProperties",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "aadhar",
						"type": "uint256"
					},
					{
						"name": "password",
						"type": "string"
					}
				],
				"name": "login",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "aadhar",
						"type": "uint256"
					},
					{
						"name": "index",
						"type": "uint256"
					}
				],
				"name": "remove",
				"outputs": [
					{
						"name": "",
						"type": "uint256[]"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "sender",
						"type": "uint256"
					},
					{
						"name": "recipient",
						"type": "uint256"
					},
					{
						"name": "index",
						"type": "uint256"
					}
				],
				"name": "transfer",
				"outputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"constant": true,
				"inputs": [],
				"name": "creatorAdmin",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"name": "properties",
				"outputs": [
					{
						"name": "aadhar",
						"type": "uint256"
					},
					{
						"name": "khataNo",
						"type": "int256"
					},
					{
						"name": "khewatNo",
						"type": "int256"
					},
					{
						"name": "fullAddress",
						"type": "string"
					},
					{
						"name": "landmark",
						"type": "string"
					},
					{
						"name": "state",
						"type": "string"
					},
					{
						"name": "zip",
						"type": "string"
					},
					{
						"name": "value",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"name": "users",
				"outputs": [
					{
						"name": "email",
						"type": "string"
					},
					{
						"name": "password",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "contactNumber",
						"type": "string"
					},
					{
						"name": "aadhar",
						"type": "uint256"
					},
					{
						"name": "accountAddress",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
					}
				],
				"name": "usersProperties",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			}
		]
	},

	init: function () {
		if (typeof web3 !== 'undefined') {
			App.web3Provider = web3.currentProvider;
		} else {
			// If no injected web3 instance is detected, fall back to Ganache
			App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
		}
		web3 = new Web3(App.web3Provider);

		return App.initContract();
	},

	initContract: function () {
		App.contracts.asset = new web3.eth.Contract(App.contracts.ABI, App.contracts.address);
		
		// web3.eth.getAccounts(function (error, accounts) {
		// 	if (error) {
		// 		console.log(error);
		// 	}

		// contract deployment
		// App.contracts.asset.deploy({
		// 	data: "bytecode"
		// })
		// .send({
		// 	from: App.contracts.owner,
		// 	gas: '4700000',
		// 	gasPrice: '20000000000000'
		// }, function(error, transactionHash){ console.log('transactionHash'. transactionHash) })
		// .on('error', function(error){ console.log('error', error) })
		// .on('transactionHash', function(transactionHash){ console.log('transactionHash', transactionHash) })
		// .on('receipt', function(receipt){
		//    console.log(receipt) // contains the new contract address
		// })
		
		return App.bindEvents();

	},

	bindEvents: function () {
		$(document).on('click', '#addProperty', App.createProperty);
		$(document).on('click', '#transfer', App.transfer);
		$(document).on('click', '#btn-PropReject', App.rejectProperty);
		$(document).on('click', '#btn-PropReqChange', App.reqchangeOwnership);
		$(document).on('click', '#btn-PropAcptChange', App.approveChangeOwnership);
		$(document).on('click', '#btn-PropValChange', App.changeValue);
		$(document).on('click', '#btn-PropSearch', App.getPropertyDetails);
		$(document).on('click', '#btn-PropAddUser', App.adduser);
		$(document).on('click', '#login', App.login);
	},

	createProperty: function (event) {
		event.preventDefault();

		var khataNo = $('#khataNo').val();
		var khewatNo = $('#khewatNo').val();
		var address = $('#address').val();
		var state = $('#state').val();
		var landmark = $('#landmark').val();
		var zip = $('#zip').val();
		var area = $('#area').val();
		var aadhar = sessionStorage.aadhar;

		console.log(aadhar, khataNo, khewatNo, address, landmark, state, zip, area);
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log(error);
				return;
			}

			App.contracts.asset.methods.addProperty(parseInt(aadhar), parseInt(khataNo), parseInt(khewatNo), address, landmark, state, zip, 0, area).send({from: App.contracts.owner, gas: 3000000}, function (error, result) {
				if (!error)
					console.log(result);
				else
					console.error(error);
			});
		});

	},
	approveProperty: function (event) {
		event.preventDefault();
		var PropId = $('#PropSearchform #PropSearch').val();
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log(error);
			}
			App.contracts.asset.methods.approveProperty(PropId, { gas: 1000000, gasPrice: web3.toWei(20, 'gwei') }, function (error, result) {
				if (!error)
					console.log(JSON.stringify(result));
				else
					console.error(error);
			});
		});

	},
	rejectProperty: function (event) {
		event.preventDefault();
		var PropId = $('#PropSearchform #PropSearch').val();
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log(error);
			}
			App.contracts.asset.rejectProperty(PropId, { gas: 1000000, gasPrice: web3.toWei(20, 'gwei') }, function (error, result) {
				if (!error)
					console.log(JSON.stringify(result));
				else
					console.error(error);
			});
		});

	},
	reqchangeOwnership: function (event) {
		event.preventDefault();
		var PropId = $('#PropSearchform #PropSearch').val();
		var NewOwner = $('#PropReqChangeform #PropReqChange').val();
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log(error);
			}
			App.contracts.asset.changeOwnership(PropId, NewOwner, { gas: 1000000, gasPrice: web3.toWei(20, 'gwei') }, function (error, result) {
				if (!error)
					console.log(JSON.stringify(result));
				else
					console.error(error);
			});
		});

	},
	approveChangeOwnership: function (event) {
		event.preventDefault();
		var PropId = $('#PropSearchform #PropSearch').val();
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log(error);
			}
			App.contracts.asset.approveChangeOwnership(PropId, { gas: 1000000, gasPrice: web3.toWei(20, 'gwei') }, function (error, result) {
				if (!error)
					console.log(JSON.stringify(result));
				else
					console.error(error);
			});
		});

	},
	changeValue: function (event) {
		event.preventDefault();
		var PropId = $('#PropSearchform #PropSearch').val();
		var NewVal = $('#PropValChangeform #PropValChange').val();
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log(error);
			}
			App.contracts.asset.changeValue(PropId, NewVal, { gas: 1000000, gasPrice: web3.toWei(20, 'gwei') }, function (error, result) {
				if (!error)
					console.log(JSON.stringify(result));
				else
					console.error(error);
			});
		});

	},
	transfer: function (event) {
		event.preventDefault();
		var recipientAadhar = $("#aadhar").val();
		var index = $("#propertyId").val();
		var aadhar = sessionStorage.aadhar;
		console.log(aadhar, parseInt(recipientAadhar), parseInt(index));
		App.contracts.asset.methods.transfer(aadhar, parseInt(recipientAadhar), parseInt(index)).send({from: App.contracts.owner, gas: 300000}, function (error, result) {
			if (!error) {
				console.log('usersProperties res', result);
			}
			else {
				console.error('usersProperties err', error);
			}
		});
	},
	login: function (event) {
		event.preventDefault();
        var password = $('#password').val();
        var aadharNumber = $('#aadhar').val();
		console.log('Form', aadharNumber, password);
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log('Error getting account', error);
				return;
			}
            App.contracts.asset.methods.login(parseInt(aadharNumber), password).call(function (error, result) {
                if (error) {
					alert("Wrong credentials");
					console.error('err', error);
				}
                else {
					console.log('res', result);
					sessionStorage.loggedIn = true;
					sessionStorage.aadhar = aadharNumber;
					location.href = "home.html";
				}
            });
		});
	},
	adduser: function (event) {
        event.preventDefault();
        var contactNumber = $('#contactNumber').val();
        var accountAddress = $('#accountAddress').val();
        var password = $('#password').val();
        var name = $('#name').val();
        var email = $('#email').val();
        var aadharNumber = $('#aadhar').val();
		console.log('User address', contactNumber, accountAddress, password, name, email, aadharNumber);
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log('Error getting account', error);
				return;
			}
			console.log('Accounts', accounts);
            App.contracts.asset.methods.addNewUser(accountAddress, name, contactNumber, email, password, parseInt(aadharNumber)).send({ from: App.contracts.owner, gas: 3000000 }, function (error, result) {
				console.log('res', result);
				
				if (!error) {
					console.log('res', result);
					alert("Account created. Goto login page to login");
				}
                else {
					console.error('err', error);
					alert("Error creating account. Please try again");
				}
            });
		});

	},
	getUser(aadhar) {
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log('Error getting account', error);
				return;
			}
			console.log('Accounts', accounts);
            App.contracts.asset.methods.users(aadhar).call(function (error, result) {
                if (!error) {
					console.log('res', result);
				}
                else {
					console.error('err', error);
				}
            });
		});

	},
	getProperty(aadhar, index, callback) {
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log('Error getting account', error);
				return;
			}
			App.contracts.asset.methods.getProperty(aadhar, index).call(function (error, result) {
                if (!error) {
					console.log('getProperty res', result);
					callback(result);
				}
                else {
					console.error('getProperty err', error);
				}
			});
			// App.contracts.asset.methods.properties(index).call(function (error, result) {
            //     if (!error) {
			// 		console.log('properties res', result);
			// 	}
            //     else {
			// 		console.error('properties err', error);
			// 	}
			// });
			// App.contracts.asset.methods.usersProperties(aadhar, index).call(function (error, result) {
            //     if (!error) {
			// 		console.log('usersProperties res', result);
			// 	}
            //     else {
			// 		console.error('usersProperties err', error);
			// 	}
            // });
		});

	},
	getTotalProperties(aadhar, callback) {
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log('Error getting account', error);
				return;
			}
            App.contracts.asset.methods.getTotalProperties(aadhar).call(function (error, result) {
                if (!error) {
					console.log('res', result);
					callback(result);
				}
                else {
					console.error('err', error);
				}
            });
		});

	},
	getProperties() {
		var aadhar = sessionStorage.aadhar;
		console.log("Calling getTotalProperties");
		App.getTotalProperties(aadhar, (totalProperties) => {
			for (let i = 0; i < totalProperties; i++) {
				App.getProperty(aadhar, i, (property) => {
					// add to html
					console.log("P returned", property);
					$("#tBody").append(
						`<tr>
							<td>${i + 1}</td>
							<td>${property["0"]}</td>
							<td>${property["1"]}</td>
							<td>${property["2"]}</td>
							<td>${property["3"]}</td>
							<td>${property["4"]}</td>
							<td>${property["5"]}</td>
							<td>${property["7"]}</td>
						</tr>`
					)
				});
			}
		});
	},
	approveUsers: function (event) {
		event.preventDefault();
		var useraddress = $('#adduser #PropAddUser').val();
		console.log('approving user', useraddress, App.contracts.owner);
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log(error);
			}
			App.contracts.asset.methods.approveUsers(useraddress).send({ from: App.contracts.owner }, function (error, result) {
				if (!error)
					console.log(JSON.stringify(result));
				else
					console.error(error);
			});
		});
	}
};

$(function () {
	$(window).load(function () {
		App.init();
	});
});

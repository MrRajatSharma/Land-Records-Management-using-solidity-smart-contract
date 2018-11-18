App = {
	web3Provider: null,
	contracts: {
        owner: "0x17e336990AA131ab1498FfFF928dAAA0BCcD9fDA",
        address: "0xF077B4464824c753CaE07475fCb0584F7CE49a10",
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
						"type": "uint256"
					},
					{
						"name": "khewatNo",
						"type": "uint256"
					},
					{
						"name": "plotNo",
						"type": "uint256"
					},
					{
						"name": "fullAddress",
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
						"name": "area",
						"type": "string"
					},
					{
						"name": "size",
						"type": "string"
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
				"inputs": [],
				"name": "getCountOfPropertyOnSale",
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
						"name": "area",
						"type": "string"
					}
				],
				"name": "getCountOfPropertyOnSaleByArea",
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
				"inputs": [],
				"name": "getPropertiesCount",
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
						"name": "index",
						"type": "uint256"
					}
				],
				"name": "getProperty",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
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
						"type": "string"
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
				"name": "getPropertyByAadhar",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
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
						"name": "area",
						"type": "string"
					}
				],
				"name": "getPropertyCountByArea",
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
						"name": "index",
						"type": "uint256"
					}
				],
				"name": "getPropertyOnSale",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
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
						"name": "area",
						"type": "string"
					},
					{
						"name": "index",
						"type": "uint256"
					}
				],
				"name": "getPropertyOnSaleByArea",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
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
						"name": "khataNo",
						"type": "uint256"
					},
					{
						"name": "khewatNo",
						"type": "uint256"
					},
					{
						"name": "plotNo",
						"type": "uint256"
					}
				],
				"name": "getUserDetailsByKKP",
				"outputs": [
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
						"name": "aadhar",
						"type": "uint256"
					},
					{
						"name": "index",
						"type": "uint256"
					},
					{
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "setUserPropertyOnSale",
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
						"type": "uint256"
					},
					{
						"name": "khewatNo",
						"type": "uint256"
					},
					{
						"name": "plotNo",
						"type": "uint256"
					},
					{
						"name": "fullAddress",
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
						"name": "area",
						"type": "string"
					},
					{
						"name": "size",
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
		$(document).on('click', '#logout', App.logout);
		$(document).on('click', '.viewUserDetails', App.getUserDetails);
		$(document).on('click', '.sell', App.showAddToSellingModal);
		$(document).on('click', '.rmsell', App.removeFromselling);
		$(document).on('click', '#search', App.search);
		$(document).on('click', '#sellModalSaveBtn', App.addForselling);
		$(document).on('click', '#addUser', App.addUser);
		$(document).on('click', '#login', App.login);
	},

	createProperty: function (event) {
		event.preventDefault();

		var khataNo = $('#khataNo').val();
		var khewatNo = $('#khewatNo').val();
		var address = $('#address').val();
		var state = $('#state').val();
		var plotNo = $('#plotNo').val();
		var zip = $('#zip').val();
		var area = $('#area').val();
		var size = $('#size').val();
		var aadhar = sessionStorage.aadhar;

		if (!sessionStorage.aadhar) {
            alert("Please login");
			location.href = "login.html";

			return;
		}
		  
		console.log(aadhar, khataNo, khewatNo, plotNo, address, state, zip, area, size);
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log(error);
				return;
			}

			App.contracts.asset.methods.addProperty(parseInt(aadhar), parseInt(khataNo), parseInt(khewatNo), parseInt(plotNo), address, state, zip, area, size).send({from: App.contracts.owner, gas: 3000000}, function (error, result) {
				if (!error) {
					alert("Property added");
					console.log(result);
				}
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
		App.contracts.asset.methods.transfer(aadhar, parseInt(recipientAadhar), parseInt(index) - 1).send({from: App.contracts.owner, gas: 300000}, function (error, result) {
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
		console.log('Logging in', aadharNumber, password);

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
	},
	logout: () => {
		sessionStorage.aadhar = null;
		location.href = "login.html";
	},
	showAddToSellingModal(event) {
		event.preventDefault();
		const index = $(this).data("index");
		$('#exampleModalCenter').modal('show');
		$('#exampleModalCenter').data("index", index);
	},
	removeFromselling(event) {
		event.preventDefault();
		const index = $(this).data("index");
		const aadhar = sessionStorage.aadhar;
		App.contracts.asset.methods.setUserPropertyOnSale(aadhar, index, 0).send({ from: App.contracts.owner, gas: 3000000 }, function (error, result) {
			console.log('res', result);
			
			if (!error) {
				console.log('res', result);
				alert("Success");
				location.reload();
			}
			else {
				console.error('err', error);
				alert("Error");
			}
		});
	},
	getUserDetails(event) {
		event.preventDefault();
		const khata = $(this).data("khata");
		const khewat = $(this).data("khewat");
		const plot = $(this).data("plot");
		console.log(khata, khewat, plot);

		// fetch user details
		App.contracts.asset.methods.getUserDetailsByKKP(khata, khewat, plot).call(function (error, result) {
			if (!error) {
				console.log('res', result);
				$("#userDetailsModal").modal("show");
				$("#name").html(result[0]);
				$("#email").html(result[1]);
				$("#number").html(result[2]);
			}
			else {
				console.error('err', error);
				alert("Error");
			}
		});

	},
	addForselling(event) {
		event.preventDefault();
		const aadhar = sessionStorage.aadhar;
		const val = $("#amount").val();
		const index = $('#exampleModalCenter').data("index");
		if (!val || val == "" | val <= 0) {
			alert("Please add proper input");
			return;
		}
		console.log(aadhar, val, index);
		App.contracts.asset.methods.setUserPropertyOnSale(aadhar, index, val).send({ from: App.contracts.owner, gas: 3000000 }, function (error, result) {
			console.log('res', result);
			
			if (!error) {
				console.log('res', result);
				alert("Success");
				location.reload();
			}
			else {
				console.error('err', error);
				alert("Error");
			}
		});

	},
	addUser: function (event) {
        event.preventDefault();
        var contactNumber = $('#contactNumber').val();
        var accountAddress = $('#accountAddress').val();
        var password = $('#password').val();
        var name = $('#name').val();
        var email = $('#email').val();
        var aadharNumber = $('#aadhar').val();
		console.log('User address', contactNumber, accountAddress, password, name, email, aadharNumber);

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

	},
	getUser(aadhar) {
		App.contracts.asset.methods.users(aadhar).call(function (error, result) {
			if (!error) {
				console.log('res', result);
			}
			else {
				console.error('err', error);
			}
		});
	},
	search(event) {
		event.preventDefault();
		const area = $("#area").val();
		console.log(area);
		App.contracts.asset.methods.getCountOfPropertyOnSaleByArea(area).call(function (error, result) {
			if (!error) {
				for (let i = 0; i < result; i++) {
					$("#searchTBody").html("");

					App.contracts.asset.methods.getPropertyOnSaleByArea(area, i).call(function (error, property) {
						// add to html
						console.log(property);
						$("#searchTBody").append(
							`<tr>
								<td>${i + 1}</td>
								<td>${property["0"]}</td>
								<td>${property["1"]}</td>
								<td>${property["2"]}</td>
								<td>${property["3"]}</td>
								<td>${property["4"]}</td>
								<td>${property["5"]}</td>
								<td>${property["6"]}</td>
								<td>${property["7"]}</td>
								<td><button class="btn btn-success viewUserDetails" data-index="${i}" data-khata="${property[0]}" data-khewat="${property[1]}" data-plot="${property[2]}">View User details</button></td>
							</tr>`
						)
					});
				}
				console.log('getCountOfPropertyOnSaleByArea res', result);
			}
			else {
				console.error('getCountOfPropertyOnSaleByArea err', error);
			}
		});
	},
	getProperty(index, callback) {		
		App.contracts.asset.methods.getProperty(index).call(function (error, result) {
			if (!error) {
				console.log('getProperty res', result);
				callback(result);
			}
			else {
				console.error('getProperty err', error);
			}
		});
	},
	getPropertyByAadhar(aadhar, index, callback) {
		web3.eth.getAccounts(function (error, accounts) {
			if (error) {
				console.log('Error getting account', error);
				return;
			}
			App.contracts.asset.methods.getPropertyByAadhar(aadhar, index).call(function (error, result) {
                if (!error) {
					console.log('getPropertyByAadhar res', result);
					callback(result);
				}
                else {
					console.error('getPropertyByAadhar err', error);
				}
			});
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
	getAllSellingProperties() {
		App.contracts.asset.methods.getCountOfPropertyOnSale().call(function (error, result) {
			if (!error) {
				for (let i = 0; i < result; i++) {
					App.contracts.asset.methods.getPropertyOnSale(i).call(function (error, property) {
						// add to html
						console.log(property);
						$("#tBody").append(
							`<tr>
								<td>${i + 1}</td>
								<td>${property["0"]}</td>
								<td>${property["1"]}</td>
								<td>${property["2"]}</td>
								<td>${property["3"]}</td>
								<td>${property["4"]}</td>
								<td>${property["5"]}</td>
								<td>${property["6"]}</td>
								<td>${property["7"]}</td>
							</tr>`
						)
					});
				}
				console.log('getCountOfPropertyOnSaleByArea res', result);
			}
			else {
				console.error('getCountOfPropertyOnSaleByArea err', error);
			}
		});
	},
	getMyProperties() {
		var aadhar = sessionStorage.aadhar;
		console.log("Calling getTotalProperties");
		App.getTotalProperties(aadhar, (totalProperties) => {
			for (let i = 0; i < totalProperties; i++) {
				App.getPropertyByAadhar(aadhar, i, (property) => {
					// add to html
					let sellingText = "Add for Selling";
					if (property[8] != 0) {
						// already on selling
						sellingText = "Remove from Selling"
					}
					$("#tBody").append(
						`<tr>
							<td>${i + 1}</td>
							<td>${property["0"]}</td>
							<td>${property["1"]}</td>
							<td>${property["2"]}</td>
							<td>${property["3"]}</td>
							<td>${property["4"]}</td>
							<td>${property["5"]}</td>
							<td>${property["6"]}</td>
							<td>${property["7"]}</td>
							<td><button class="btn btn-success ${property[8]!=0? "rmsell" : "sell"}" data-index="${i}">${sellingText}</button></td>
						</tr>`
					)
				});
			}
		});
	},
};

$(function () {
	$(window).load(function () {
		App.init();
	});
});

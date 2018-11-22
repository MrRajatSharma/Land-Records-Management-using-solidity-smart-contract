pragma solidity ^0.4.4;

contract LandRecord {
    address public creatorAdmin;

	struct PropertyDetail {
	    uint aadhar;
		uint khataNo;
		uint khewatNo;
		uint plotNo;
		string fullAddress;
		string state;
		string zip;
		string area;
		string size;
		uint value;     // if value is 0 then property is not on sale and if its not then its on sale
		// cant add more struct properties as stack too deep error will occur
	}
	
    struct User {
        string email;
        string password;
        string name;
        string contactNumber;
        uint aadhar;
        address accountAddress;
    }
    
    struct Tx {
        uint propertyId;
        uint sender;
        string senderName;
        uint receiver;
        string receiverName;
        uint value;
    }
    
    // list of all transfers between users
    Tx[] tx;
    
    // int[][] usersProperties;
	PropertyDetail[] public properties;
	mapping(uint => uint[]) public usersProperties;

    mapping(uint => User) public users;
	
	// Initializing the User Contract.
	constructor() public {
		creatorAdmin = msg.sender;
	}
	
    function remove(uint aadhar, uint index)  returns(uint[]) {
        if (index >= usersProperties[aadhar].length) return;

        for (uint i = index; i<usersProperties[aadhar].length-1; i++) {
            usersProperties[aadhar][i] = usersProperties[aadhar][i+1];
        }
        delete usersProperties[aadhar][usersProperties[aadhar].length-1];
        usersProperties[aadhar].length--;
        return usersProperties[aadhar];
    }
    
    function transfer(uint sender, uint recipient, uint index) {
        uint propertyId = usersProperties[sender][index];
        tx.push(Tx(propertyId, sender, users[sender].name, recipient, users[recipient].name, properties[propertyId - 1].value));
        
        usersProperties[recipient].push(propertyId);
        usersProperties[sender] = remove(sender, index);
    }

    function addProperty(uint aadhar, uint khataNo, uint khewatNo, uint plotNo, string fullAddress, string state, string zip, string area, string size) public returns (bool) {
        for (uint i = 0; i<properties.length; i++){
            if (properties[i].khataNo == khataNo && properties[i].khewatNo == khewatNo && properties[i].plotNo == plotNo) {
                return false;
            }
        }
        uint length = properties.push(PropertyDetail(aadhar, khataNo, khewatNo, plotNo, fullAddress, state, zip, area, size, 0));
        // users[aadhar].properties.push(length);
        usersProperties[aadhar].push(length);
        return true;
    }
    
    function getTotalTx() returns (uint) {
        return tx.length;
    }
    
    function getTx(uint index) returns (
        uint,
        string,
        uint,
        string,
        uint
	){
	    Tx txx = tx[index];
        return (txx.sender, txx.senderName, txx.receiver, txx.receiverName, txx.value);
    }
    
    function getTotalProperties(uint aadhar) returns (uint) {
        return usersProperties[aadhar].length;
    }
    
    function getPropertiesCount() returns (uint) {
        return properties.length;
    }
    
    function getPropertyCountByArea(string area) returns (uint) {
        uint length = properties.length;
        uint count = 0;
        for (uint i = 0; i < length; i++) {
            bool result = stringsEqual(properties[i].area, area);
            if (result == true) {
                count++;
            }
        }
        return count;
    }
    
    function getCountOfPropertyOnSale() returns (uint) {
        uint length = properties.length;
        uint count = 0;
        for (uint i = 0; i < length; i++) {
            if (properties[i].value != 0) {
                count++;
            }
        }
        return count;
    }
    
    function getPropertyOnSale(uint index) returns (
        uint,
		uint,
		uint,
		string,
		string,
		string,
		string,
		uint
	){
        uint length = properties.length;
        uint count = 0;
        for (uint i = 0; i < length; i++) {
            if (properties[i].value != 0) {
                if (count == i) {
                    PropertyDetail pd = properties[i];
                    return (pd.khataNo, pd.khewatNo, pd.plotNo, pd.fullAddress, pd.state, pd.area, pd.size, pd.value);
                }
                count++;
            }
        }
    }
    
    function getCountOfPropertyOnSaleByArea(string area) returns (uint) {
        uint length = properties.length;
        uint count = 0;
        for (uint i = 0; i < length; i++) {
            if (properties[i].value != 0 && stringsEqual(properties[i].area, area)) {
                count++;
            }
        }
        return count;
    }
    
    function getUserDetailsByKKP(uint khataNo, uint khewatNo, uint plotNo) returns (string, string, string) {
        for (uint i = 0; i < properties.length; i++) {
            if (khataNo == properties[i].khataNo && khewatNo == properties[i].khewatNo && plotNo == properties[i].plotNo) {
                User user = users[properties[i].aadhar];
                return (user.name, user.email, user.contactNumber);
            }
        }
    }
    
    
    function getPropertyOnSaleByArea(string area, uint index) returns (
        uint,
		uint,
		uint,
		string,
		string,
		string,
		string,
		uint
	){
        uint length = properties.length;
        uint count = 0;
        for (uint i = 0; i < length; i++) {
            if (properties[i].value != 0 && stringsEqual(properties[i].area, area)) {
                if (count == i) {
                    PropertyDetail pd = properties[i];
                    return (pd.khataNo, pd.khewatNo, pd.plotNo, pd.fullAddress, pd.state, pd.zip, pd.size, pd.value);
                }
                count++;
            }
        }
    }
    
    function setUserPropertyOnSale(uint aadhar, uint index, uint value) returns (bool) {
        uint propertyIndex = usersProperties[aadhar][index];
        PropertyDetail pd = properties[propertyIndex - 1];
        pd.value = value;
        return true;
    }
    
    function getProperty(uint index) returns (
        uint,
		uint,
		uint,
		string,
		string,
		string,
		string,
		string
	){
        PropertyDetail pd = properties[index];
        return (pd.khataNo, pd.khewatNo, pd.plotNo, pd.fullAddress, pd.state, pd.zip, pd.area, pd.size);
    }
    
    function getPropertyByAadhar(uint aadhar, uint index) returns (
        uint,
		uint,
		uint,
		string,
		string,
		string,
		string,
		string,
		uint
	){
        uint propertyIndex = usersProperties[aadhar][index];
        PropertyDetail pd = properties[propertyIndex - 1];
        return (pd.khataNo, pd.khewatNo, pd.plotNo, pd.fullAddress, pd.state, pd.zip, pd.area, pd.size, pd.value);
    }
    
	// Add new user.
	function addNewUser(address accountAddress, string name, string contactNumber, string email, string password, uint aadhar) public returns (bool) {
	    users[aadhar] = User(email, password, name, contactNumber, aadhar, accountAddress);
	    return true;
	}
	
	function login(uint aadhar, string password) public returns (bool) {
	    require(stringsEqual(users[aadhar].password, password) == true);
	    
	    return true;
	}
	
	function stringsEqual(string storage _a, string memory _b) internal returns (bool) {
		bytes storage a = bytes(_a);
		bytes memory b = bytes(_b);
		if (a.length != b.length)
			return false;
		// @todo unroll this loop
		for (uint i = 0; i < a.length; i ++)
			if (a[i] != b[i])
				return false;
		return true;
	}
}
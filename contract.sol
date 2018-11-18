pragma solidity ^0.4.4;

contract LandRecord {
    address public creatorAdmin;

	struct PropertyDetail {
		uint aadhar;
		int khataNo;
		int khewatNo;
		string fullAddress;
		string landmark;
		string state;
		string zip;
		uint value;
		string area;
	}
	
    struct User {
        string email;
        string password;
        string name;
        string contactNumber;
        uint aadhar;
        address accountAddress;
    }
    
    
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

        for (uint i = index; i<usersProperties[aadhar].length-1; i++){
            usersProperties[aadhar][i] = usersProperties[aadhar][i+1];
        }
        delete usersProperties[aadhar][usersProperties[aadhar].length-1];
        usersProperties[aadhar].length--;
        return usersProperties[aadhar];
    }
    
    function transfer(uint sender, uint recipient, uint index) {
        usersProperties[recipient].push(usersProperties[sender][index]);
        usersProperties[sender] = remove(sender, index);
    }

    function addProperty(uint aadhar, int khataNo, int khewatNo, string fullAddress, string landmark, string state, string zip, uint value, string area) public returns (bool) {
        for (uint i = 0; i<properties.length; i++){
            if (properties[i].khataNo == khataNo && properties[i].khewatNo == khewatNo) {
                return false;
            }
        }
        uint length = properties.push(PropertyDetail(aadhar, khataNo, khewatNo, fullAddress, landmark, state, zip, value, area));
        // users[aadhar].properties.push(length);
        usersProperties[aadhar].push(length);
        return true;
    }
    
    function getTotalProperties(uint aadhar) returns (uint) {
        return usersProperties[aadhar].length;
    }
    
    function getProperty(uint aadhar, uint index) returns (int,
		int,
		string,
		string,
		string,
		string,
		uint,
		string
	){
        uint propertyIndex = usersProperties[aadhar][index];
        PropertyDetail pd = properties[propertyIndex - 1];
        return (pd.khataNo, pd.khewatNo, pd.fullAddress, pd.landmark, pd.state, pd.zip, pd.value, pd.area);
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
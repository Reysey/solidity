pragma solidity ^0.4.17;


contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {

        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}


contract Campaign{

    // NEW TYPE DEFINITION
    struct Request {
        // Describes why the request is being created.
        string description;

        // Amount of money that the manager wants to send to the vendor
        uint value;

        // address that the money will be sent to.
        address recipient;

        // true if the request has already been processed(money sent)
        bool complete;

        // Count Of Approvals
        uint approvalCount;

        // 
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
     uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount; 

    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint minimum, address creatorAddress) public {
        manager = creatorAddress;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true; 
        approversCount++;
    }

    // CREATE A REQUEST OF TYPE REQUEST
    function createRequest(string desc, uint val, address rec) public restricted {
        Request memory newRequest = Request({
            description     : desc,
            value           : val,
            recipient       : rec,
            complete        : false,
            approvalCount   : 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2) );
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view
    returns(uint, uint, uint, uint, address) {
        // CONTRACT BALLANCE
        // MINIMUM CONTRIBUTION
        // REQUEST COUNT
        // CONTRIBUTORS NUMBER
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }

}
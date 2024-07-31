// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// A simple governance contract for managing votes and proposals in the DAO.
contract Governance {
    struct Proposal {
        uint id;
        string description;
        uint voteCount;
        bool executed;
    }

    Proposal[] public proposals;
    mapping(address => uint) public votePower;
    uint public proposalCount;
    address public admin;

    event ProposalCreated(uint id, string description);
    event Voted(uint proposalId, address voter, uint votes);
    event ProposalExecuted(uint id);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function createProposal(string memory description) public onlyAdmin {
        proposals.push(Proposal({
            id: proposalCount,
            description: description,
            voteCount: 0,
            executed: false
        }));
        emit ProposalCreated(proposalCount, description);
        proposalCount++;
    }

    function vote(uint proposalId, uint votes) public {
        require(proposalId < proposalCount, "Proposal does not exist");
        require(votePower[msg.sender] >= votes, "Insufficient vote power");
        
        proposals[proposalId].voteCount += votes;
        votePower[msg.sender] -= votes;

        emit Voted(proposalId, msg.sender, votes);
    }

    function executeProposal(uint proposalId) public onlyAdmin {
        require(proposalId < proposalCount, "Proposal does not exist");
        require(!proposals[proposalId].executed, "Proposal already executed");

        proposals[proposalId].executed = true;
        emit ProposalExecuted(proposalId);

        // Execute the proposal's action here (custom logic required)
    }

    // Function to assign voting power to DAO members
    function assignVotePower(address voter, uint votes) public onlyAdmin {
        votePower[voter] = votes;
    }
}

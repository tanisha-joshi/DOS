export const address = "0x578D1942700F5c6808Bb5B64bb8c5f6a637EC101"
export const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Index",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_fileId",
				"type": "string"
			}
		],
		"name": "createCommunityPost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_image",
				"type": "string"
			}
		],
		"name": "CreateNewCommunity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Index",
				"type": "uint256"
			}
		],
		"name": "joinCommunity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "communities",
		"outputs": [
			{
				"internalType": "contract Community",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCommunities",
		"outputs": [
			{
				"internalType": "contract Community[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Index",
				"type": "uint256"
			}
		],
		"name": "getCommunityDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Index",
				"type": "uint256"
			}
		],
		"name": "getCommunityMembers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Index",
				"type": "uint256"
			}
		],
		"name": "getCommunityPost",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
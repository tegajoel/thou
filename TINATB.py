from web3 import Web3
# User Account 

# Connect to the Ethereum network
w3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'))

# Example function to create a new account
def create_account():
    account = w3.eth.account.create()
    print(f'Address: {account.address}')
    print(f'Private Key: {account.privateKey.hex()}')
    return account

# Function to send Ether from one account to another
def send_ether(from_address, private_key, to_address, amount):
    nonce = w3.eth.getTransactionCount(from_address)
    tx = {
        'nonce': nonce,
        'to': to_address,
        'value': w3.toWei(amount, 'ether'),
        'gas': 2000000,
        'gasPrice': w3.toWei('50', 'gwei')
    }
    signed_tx = w3.eth.account.sign_transaction(tx, private_key)
    tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)
    print(f'Transaction Hash: {tx_hash.hex()}')

# Example usage
new_account = create_account()
send_ether('YOUR_FROM_ADDRESS', 'YOUR_PRIVATE_KEY', new_account.address, 0.01)

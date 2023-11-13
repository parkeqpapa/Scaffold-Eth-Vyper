#version 0.3.9

owner: public(address)
greeting: public(String[28]) 
premium: public(bool) 
totalCounter: public(uint256) 

userGreetingCounter: HashMap[address, uint256]

event GreetingChange:
    greetingSetter: address
    newGreeting: String[28]
    premium: bool
    value: uint256

@external
def __init__(_owner: address):
    self.owner = _owner
    self.greeting = "Building Unstoppable Apps!!!"
    self.premium = False
    self.totalCounter = 0


@payable
@external
def setGreeting(_newGreeting: String[28]):
    self.greeting = _newGreeting
    self.totalCounter += 1
    self.userGreetingCounter[msg.sender] += 1

    if(msg.value > 0):
        self.premium = True
    
    if(msg.value == 0):
        self.premium = False
    log GreetingChange(msg.sender, _newGreeting, msg.value > 0, 0)

@external
def withdraw():
    assert self.owner == msg.sender
    send(self.owner, self.balance)


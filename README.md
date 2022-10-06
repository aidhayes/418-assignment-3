# 418-assignment-3
Creating an HTML webpage, creating a server for it using Express.js, and deploying it using EC2. Through the use of pm2, the site is able to stay online.

## Installation
For node_modules, run:  
`node install`

## Links
### Website
This link should work, I tested it from multiple devices. If it does not, please contact me.  
ec2-18-212-28-127.compute-1.amazonaws.com:9000 

## Steps for hosting site on EC2
- Create new EC2 instance
- Security > Security Details > Security groups > Inbound rules > Edit inbound rules
- Add rule, then select 'Custom TCP' under type, then ender port you want to use (eg. 3000)
- `cd` to directory w/ key (.pem)
- `ssh -i "[key_name].pem" ubuntu@[ip]`
- Install Node.js by running `sudo apt install nodejs`
- Clone repository
- `cd` to repository
- Install PM2 by running `npm install pm2 -g`
- Run `pm2 start [file_name]`
- Go to [public IPv4 DNS]:[port] in browser
- Site should be up and running, and should stay running even after terminal is closed since PM2 was used

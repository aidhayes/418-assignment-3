# 418-assignment-3
Creating an HTML webpage, creating a server for it using Express.js, and deploying it using EC2. Through the use of pm2, the site is able to stay online.
## Installation
For node_modules, run:  
`node install`

## Links
### Website
This link should work, I tested it from multiple devices. If it does not, please contact me.  
http://ec2-18-212-28-127.compute-1.amazonaws.com:9000 

## Notes for future reference
- Create new EC2 instance
- Create new inbound rule for port you want to use 
- `cd` to directory w/ key (.pem)
- `ssh -i "[key_name].pem" ubuntu@ec2-[ip]
- Clone repository
- `cd` to repository
- Run `node index.js`

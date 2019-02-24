const Migrations = artifacts.require("Migrations");
var poe = artifacts.require("./proofOfExistance1");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

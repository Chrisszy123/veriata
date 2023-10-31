import ABI from "../ABI.json";
import Web3 from "web3";
const { ethereum } = window;
const web3 = new Web3(ethereum);
const contractAddress = "0x36975C64adF48552E655758Bc0b20bD331be7564";
const ABI_VALUE = ABI;
const contract = new web3.eth.Contract(ABI_VALUE, contractAddress);

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const status = await checkChainID();
      if (status === true) {
        const obj = {
          res: addressArray[0],
          status: true,
        };
        return obj;
      } else {
        const obj = {
          res: "Please Connect to Georli",
          status: false,
        };
        return obj;
      }
    } catch (err) {
      return {
        res: "User Rejected Request",
        false: false,
      };
    }
  }
};

const checkChainID = async () => {
  const chainid = await web3.eth.net.getId();
  if (chainid === 1) {
    return true;
  } else {
    return false;
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      const status = await checkChainID();
      if (status === true) {
        const obj = {
          res: addressArray[0],
          status: true,
        };
        return obj;
      } else {
        const obj = {
          res: "Please Connect to Goerli",
          status: false,
        };
        return obj;
      }
    } catch (err) {
      return {
        res: "",
        status: true,
      };
    }
  }
};

export const getAllCars = async () => {
  if (window.ethereum) {
    const status = await checkChainID();
    if (status === true) {
      try {
        const response = await contract.methods.getAllCars().call();
        return {
          success: true,
          response,
        };
      } catch (error) {
        return {
          success: false,
          response: "😥 Something went wrong: " + error.message,
        };
      }
    }
  }
};

// export const getAllInspection = async () => {
// 	if (window.ethereum) {
// 		const status = await checkChainID();
// 		if (status === true) {
// 			try {
// 				const response = await contract.methods.getAllInspection().call();
// 				return {
// 					success: true,
// 					response,
// 				};
// 			} catch (error) {
// 				return {
// 					success: false,
// 					response: "😥 Something went wrong: " + error.message,
// 				};
// 			}
// 		}
// 	}
// };

// export const getServiceWorkerCount = async () => {
// 	if (window.ethereum) {
// 		const status = await checkChainID();
// 		if (status === true) {
// 			try {
// 				const response = await contract.methods.getServiceWorkerCount().call();
// 				return {
// 					success: true,
// 					response,
// 				};
// 			} catch (error) {
// 				return {
// 					success: false,
// 					response: "😥 Something went wrong: " + error.message,
// 				};
// 			}
// 		}
// 	}
// };

export const mint = async (minQnt) => {
  if (window.ethereum) {
    const status = await checkChainID();
    if (status === true) {
      try {
        const accounts = await web3.eth.getAccounts();
        const response = await contract.methods.mint(minQnt).send({
          from: accounts[0],
        });
        return {
          success: true,
          response,
        };
      } catch (error) {
        return {
          success: false,
          response: "😥 Mint gone wrong: " + error.message,
        };
      }
    }
  }
};

// export const addVehicle = async (vin, name, color) => {
// 	if (window.ethereum) {
// 		try {
// 			const accounts = await web3.eth.getAccounts();

// 			const response = await contract.methods.addCar(vin, name, color).send({
// 				from: accounts[0],
// 			});
// 			return {
// 				success: true,
// 				response,
// 			};
// 		} catch (error) {
// 			return {
// 				success: false,
// 				response: "😥 Something went wrong: " + error.message,
// 			};
// 		}
// 	}
// };

// export const addInspection = async (vin) => {
// 	if (window.ethereum) {
// 		try {
// 			const accounts = await web3.eth.getAccounts();
// 			var today = new Date().toISOString().slice(0, 10);
// 			const response = await contract.methods.addInspection(vin, today).send({
// 				from: accounts[0],
// 			});
// 			return {
// 				success: true,
// 				response,
// 			};
// 		} catch (error) {
// 			return {
// 				success: false,
// 				response: "😥 Something went wrong: " + error.message,
// 			};
// 		}
// 	}
// };

// export const getCarDetails = async (vin) => {
// 	if (window.ethereum) {
// 		try {
// 			const response = await contract.methods.getCar(vin).call();
// 			return {
// 				success: true,
// 				response,
// 			};
// 		} catch (error) {
// 			return {
// 				success: false,
// 				response: "😥 Something went wrong: " + error.message,
// 			};
// 		}
// 	}
// };

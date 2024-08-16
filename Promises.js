//Promises and promise chaining

let cart = ["skirt", "jeans", "top"];



// order.then(() => proceedTopayment()
// ).then(() => updateOrderStatus());

const createOrder = (cart) => {
   
    let promise = new Promise((resolve, reject) => {
        if(validateOrder(cart)){
            
            setTimeout(() => {
                 resolve("2345");
            }, 5000)
            
           
        }else {
            let err = "Unidentified items";
            reject(err);
        }
    })
    
    return promise;
}

const proceedToPayment = (orderId) => {
   
    let promise = new Promise((resolve, reject) => {
        // if(validateOrder(orderId)){
            
                 resolve("Payment is successfull");
            
           
        // }else {
        //     let err = "Unidentified order";
        //     reject(err);
        // }
    })
    
    return promise;
}

let validateOrder = (items) => {
    return false;
}

let order  = createOrder(cart);

console.log(order);
order.then((orderId) => {
    console.log(orderId)
    return orderId;
}).catch((err) => console.log(err)
).then((orderId) => {
    return proceedToPayment(orderId);
}).then((result) => {
    console.log(result);
}).catch((err) => console.log(err))





// =============================Promise.all==================================


const p1 = new Promise ((resolve, reject) => {
	setTimeout(() => {
  	//resolve("P1 is successful")
 		reject("P1 failed");
    
  }, 3000)
});

const p2 = new Promise ((resolve, reject) => {
	setTimeout(() => {
  	reject("P2 failed");
  	//resolve("P2 is successful")
  }, 4000)
});

const p3 = new Promise ((res, reject) => {
	setTimeout(() => {
  	//reject("P3 failed");
  	res("P3 is successful")
  }, 1000)
})


Promise.all([p1, p2, p3]).then((res) => {
	console.log(res);
}).catch((err) => {
	console.error(err);
})




// =============================Promise.allSettled==================================


const p1 = new Promise ((resolve, reject) => {
	setTimeout(() => {
  	//resolve("P1 is successful")
 		reject("P1 failed");
    
  }, 3000)
});

const p2 = new Promise ((resolve, reject) => {
	setTimeout(() => {
  	reject("P2 failed");
  	//resolve("P2 is successful")
  }, 4000)
});

const p3 = new Promise ((res, reject) => {
	setTimeout(() => {
  	//reject("P3 failed");
  	res("P3 is successful")
  }, 1000)
})


Promise.allSettled([p1, p2, p3]).then((res) => {
	console.log(res);
}).catch((err) => {
	console.error(err);
})



// =============================Promise.race==================================


const p1 = new Promise ((resolve, reject) => {
	setTimeout(() => {
  	//resolve("P1 is successful")
 		reject("P1 failed");
    
  }, 3000)
});

const p2 = new Promise ((resolve, reject) => {
	setTimeout(() => {
  	reject("P2 failed");
  	//resolve("P2 is successful")
  }, 4000)
});

const p3 = new Promise ((res, reject) => {
	setTimeout(() => {
  	//reject("P3 failed");
  	res("P3 is successful")
  }, 1000)
})


Promise.race([p1, p2, p3]).then((res) => {
	console.log(res);
}).catch((err) => {
	console.error(err);
})



// =============================Promise.any==================================


const p1 = new Promise ((resolve, reject) => {
	setTimeout(() => {
  	//resolve("P1 is successful")
 		reject("P1 failed");
    
  }, 3000)
});

const p2 = new Promise ((resolve, reject) => {
	setTimeout(() => {
  	reject("P2 failed");
  	//resolve("P2 is successful")
  }, 4000)
});

const p3 = new Promise ((res, reject) => {
	setTimeout(() => {
  	//reject("P3 failed");
  	res("P3 is successful")
  }, 1000)
})


Promise.any([p1, p2, p3]).then((res) => {
	console.log(res);
}).catch((err) => {
	console.error(err);
})

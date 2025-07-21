// let inventory = [{
//         id: 1,
//         name: 'Apple',
//         price: 0.50,
//         quantity: 200
//     },
//     {
//         id: 2,
//         name: 'Banana',
//         price: 0.30,
//         quantity: 150
//     },
//     {
//         id: 3,
//         name: 'Apple',
//         price: 0.90,
//         quantity: 50
//     },
// ]

// // const productName = inventory.map((item) => item.name);
// // console.log(productName);

// function updateInventory(productId, amount) {
//     inventory.map((item) => {
//         item.id === productId ? item.quantity += amount : '';
//         item.quantity < 0 ? item.quantity = 0 : ''
//     })
// }

// updateInventory(1, -150)
// updateInventory(2, -130)
// updateInventory(3, -24)

// function findStock(threshold) {
//     inventory.map((item) => {
//         if (item.quantity <= threshold) {
//             console.log(item.name);
//         }
//     })
// }

// console.log(inventory);
// findStock(60)


// function totalInventoryValue() {
//     let totalCost = 0;
//     inventory.map((item) => {
//         for (let i = 0; i < inventory.length; i++) {
//             totalCost += item.price * item.quantity;
//         }
//         console.log(totalCost);
//     })
// }

// totalInventoryValue()


const students = {
    Alice: {
        math: 92,
        physics: 87,
        literature: 81
    },
    Bob: {
        math: 75,
        physics: 90,
        literature: 88
    },
    Charlie: {
        math: 92,
        physics: 93,
        literature: 85
    },
    Diana: {
        math: 89,
        physics: 91,
        literature: 90
    },
};
    
function getTopStudent(subject, studentsObj) {
    Object.entries(studentsObj).forEach(([studentName, predmets]) => {
        Object.entries(predmets).map(([elem, rating]) => {
            if (subject === elem) {               
                console.log(`Наивысшая оценка ${rating} по предмету ${subject} у ученика ${studentName}`);                
            }
        })       
    })    
}

getTopStudent('physics', students);
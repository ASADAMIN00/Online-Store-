var tdate = new Date()
var d = tdate.getMonth() +1 + '/' +  tdate.getDate() + '/' + tdate.getFullYear().toString()
let onlineStore = [
    {
        name: "ASADULLAH AMIN Online Store",
        location: "New York, NY",
        categories: [   
            "Laptops",
            "Smartphones",
            "Accessories"
                    ],
        products: [
            {
                id: '1:',
                name: "MacBook Pro",
                category: "laptop",
                price: "2500$",
                stocks: 200,
                details: {
                    brand: "apple",
                    model: "Pro 2024",
                    colors: ["black", " gray ", "white"],
                    screenSize: "14 inch",
                            },

            },
            {
                id: '2:',
                name: "Mackbook lite",
                category: "laptop",
                price: "1500$",
                stocks: 120,
                details: {
                    brand: "apple",
                    model: "lite 2021",
                    colors: ["black ",  " white"],
                    screenSize: "11 inch",
                            },

            },
            {
                id: '3:',
                name: "iMac",
                category: "laptop",
                price: "3500$",
                stocks: 70,
                details: {
                    brand: "apple",
                    model: "new 2023",
                    colors: ['brown ', " white"],
                    screenSize: "13 inch",
                            },

            },
            {
                id: '4:',
                name: "Mac Mini",
                category: "laptop",
                price: "2800$",
                stocks: 300,
                details: {
                    brand: "apple",
                    model: "mini 2019",
                    colors: ["white"],
                    screenSize: "9 inch",
                            },

            },
            {
                id: '5:',
                name: "Mackbook Air New",
                category: "laptop",
                price: "4500$",
                stocks: 30,
                details: {
                    brand: "apple",
                    model: "Air New 2024",
                    colors: ['brwon ' , ' grey'],
                    screenSize: "15 inch",
                            },

            }
                    ],
        customers: [
            {
                id: '1:',
                firstName: "Abdul",
                lastName: "Waqas",
                email: "abdulwaqas@gmail.com",
                phoneNumber: "0256xxxxx",
                Address: {
                    street: "st 1 phool gali",
                    city: "karachi",
                    state: "sindh",
                    zipCode: "70000",
                },

            },
            {
                id: '2:',
                firstName: "Muhammad",
                lastName: "Bilal",
                email: "MuhammadBilal@gmail.com",
                phoneNumber: "0589xxxx",
                Address: {
                    street: "st near garden west",
                    city: "karachi",
                    state: "sindh",
                    zipCode: "70000",
                },

            },
            {
                id: '3:',
                firstName: "Muhammad",
                lastName: "Yaseen",
                email: "muhammadyaseen@gmail.com",
                phoneNumber: "0569442xxxxx",
                Address: {
                    street: "aus melbourne ",
                    city: "melbourne",
                    state: "meleb",
                    zipCode: "95000",
                },

            },
            {
                id: '4:',
                firstName: "Ahmer",
                lastName: "Ali",
                email: "Ahmerali@gmail.com",
                phoneNumber: "024892xxxx",
                Address: {
                    street: "new zealand",
                    city: "Auckland",
                    state: "willangton",
                    zipCode: "986000",
                },

            },
            {
                id: '5:',
                firstName: "Kumail",
                lastName: "Naqvi",
                email: "kumailnaqvi@gmail.com",
                phoneNumber: "02196xxxxx",
                Address: {
                    street: "burners road",
                    city: "islamabad",
                    state: "sindh",
                    zipCode: "65000",
                },

            }
        ],
        orders: [
            {
                oId: '1:',
                date: d,
                status:  'Shipped', //0 : SHIPPED, 1: DELIVERD, 2: PROCESSING,
                totalAmount: '2500$',
                products:  
                // [
                    {
                        productID: 65,
                        qantity: 5,
                        price: '2500$',

                    }
                    // ]


            },
            {
                oId: '2:',
                date: d,
                status:  'Deliverd', //0 : SHIPPED, 1: DELIVERD, 2: PROCESSING,
                totalAmount: '1500$',
                products:  
                // [
                    {
                        productID: 95,
                        qantity: 7,
                        price: '1500$',

                    }
                    // ]


            },
            {
                oId: '3:',
                date: d,
                status: 'Deliverd', //0 : SHIPPED, 1: DELIVERD, 2: PROCESSING,
                totalAmount: '3500$',
                products:  
                // [
                    {
                        productID: 7,
                        qantity: 15,
                        price: '3500$',

                    }
                    // ]


            },
            {
                oId: '4:',
                date: d,
                status: 'Deliverd', //0 : SHIPPED, 1: DELIVERD, 2: PROCESSING,
                totalAmount: '2800$',
                products:  
                // [
                    {
                        productID: 698,
                        qantity: 2,
                        price: '2800$',

                    }
                    // ]


            },
            {
                oId: '5:',
                date: d,
                status: 'Processing', //0 : SHIPPED, 1: DELIVERD, 2: PROCESSING,
                totalAmount: '4500$',
                products:  
                // [
                    {
                        productID: 1,
                        qantity: 3,
                        price: '4500$',

                    }
                    // ]


            },
        ]
    },
    
    ]
  
 var customerTablep = document.getElementById('customerTable');  // customer table html
 var productTablep = document.getElementById('ProductTable');  // Product table html
 var ordertablep = document.getElementById('orderTable');  // Order table html

for(var i = 0; i<onlineStore.length;i++){
    // console.log(i)
    for(var cuskey in onlineStore[i]){

       if(cuskey != 'name' && cuskey != 'location' &&  cuskey != 'categories'){   
        //    console.log(onlineStore[i][cuskey]);

             for(var m = 0; m < onlineStore[i][cuskey].length; m++){
                // console.log(onlineStore[i][cuskey][m]);
                    if(cuskey == 'customers'){
                       var p = onlineStore[i][cuskey][m] 
                       
                        customerTablep.innerHTML += `
                          <tr>
                              <td class = 'id'> ${p.id}</td> 
                              <td> ${p.firstName}</td> 
                              <td> ${p.email}</td> 
                              <td> ${p.phoneNumber}</td> 
                              <td> ${p.Address.street}</td> 
                          </tr>
                        `
                    } 
                    else if(cuskey == 'products'){
                       var p = onlineStore[i][cuskey][m] 
                       productTablep.innerHTML += `
                        <tr>
                           <td class = 'id'> ${p.id} </td>
                           <td> ${p.name} </td>
                           <td> ${p.details.model} </td>
                           <td> ${p.category} </td>
                           <td> ${p.price} </td>
                           <td> ${p.stocks} </td>
                           <td> ${p.details.colors} </td>
                           <td> ${p.details.screenSize} </td>
                        </tr>
                       `
                    }
                    else{
                        var p = onlineStore[i][cuskey][m];
                        ordertablep.innerHTML += `
                          <tr> 
                             <td class = 'id'> ${p.oId} </td>
                             <td> ${p.date} </td>
                             <td> ${p.status} </td>
                             <td> ${p.totalAmount} </td>
                             <td> ${p.products.productID} </td>
                             <td> ${p.products.qantity} </td>
                             <td> ${p.products.price} </td>
                          </tr>
                        ` 
                    }
                
               }
          } 
       
        
    }
}

function customer(e){ 
    var products = document.getElementById('products')
    var customers = document.getElementById('customers')
    var orders = document.getElementById('orders')

   if(e.innerHTML == 'Products'){
     products.style.display = 'block'
     customers.style.display = 'none'
     orders.style.display = 'none'
   }
   else if(e.innerHTML == 'Customer'){
     customers.style.display = 'block'
      products.style.display = 'none'
      orders.style.display = 'none'
   }
   else{
     orders.style.display = 'block'
      customers.style.display = 'none'
      products.style.display = 'none'
   }
  
}

function lightTheme(){
    document.getElementById('moon').style.display = 'none'
    document.getElementById('sun').style.display = 'block'
   document.body.style.backgroundColor = 'white'
   document.body.style.Color = 'black'
   document.getElementById('main').className = 'mainli'
   document.getElementById('headi').className = 'h1'
   document.getElementById('input').className = 'input'
   document.getElementById('ProductTable').className = 'tab'
   document.getElementById('customers').className = 'tab'
   document.getElementById('orders').className = 'tab'
}
function darkTheme(){
    document.getElementById('moon').style.display = 'block'
    document.getElementById('sun').style.display = 'none'
   document.body.style.backgroundColor = 'black'
   document.getElementById('main').className = 'main'
   document.getElementById('headi').classList.remove('h1')
   document.getElementById('input').className = 'second'
   document.getElementById('ProductTable').classList.remove('tab')
   document.getElementById('orders').classList.remove('tab')
   document.getElementById('customers').classList.remove('tab')



}


//   for(var i = 0; i<onlineStore.length; i++){
    
//      for(var key in onlineStore[i]){
//          //  console.log(key)
//          if(key == 'name' || key == 'location'){
//             console.log(onlineStore[i][key]);
//          }
//      else{
//         for(var k = 0; k < onlineStore[i][key].length; k++){

//          if(key == 'categories'){
//                console.log(onlineStore[i][key][k])
//             }
//         else{
//            for(var minikey in onlineStore[i][key][k]){
//                 console.log(onlineStore[i][key][k][minikey])
//                 if(minikey == 'details' || minikey == 'Address' || minikey == 'products'){
//                     for(var lmini in onlineStore[i][key][k][minikey]){
//                      console.log(onlineStore[i][key][k][lmini])
//                     }
//                 }
//                //  console.log(minikey)
//            } }

//         }}

//      }
//   }


// let table = document.getElementById('table')
// for(var i = 0; i< onlineStore.length; i++){
    
//    table.innerHTML += `
//     <tr>
//         <td> ${onlineStore[i].name} </td>
//         <td> ${onlineStore[i].location} </td>
//         <td> ${onlineStore[i].categories} </td>
//         <td> ${onlineStore[i].products[0].id} </td>
//         <td> ${onlineStore[i].customers[0].id} </td>
//         <td> ${onlineStore[i].orders[0].oId} </td>
//     </tr>
//    `
  
      
//    }
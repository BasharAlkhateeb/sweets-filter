//items
const cakes = document.querySelectorAll(".cakes");
const cupCakes = document.querySelectorAll(".cupcakes");
const sweets = document.querySelectorAll(".sweets");
const doughnuts = document.querySelectorAll(".doughnuts");
//filters
const cakeFilter= document.querySelector("[data-filter='cakes']");
const cupcakesFilter = document.querySelector("[data-filter='cupcakes']")
const sweetsFilter = document.querySelector("[data-filter='sweets']")
const doughnutsFilter = document.querySelector("[data-filter='doughnuts']")
const All =  document.querySelector("[data-filter='all']");
///////////////////////////////////////////////////////////////
const a = document.querySelectorAll("a");
const store = document.getElementById("store-items");
/////////////////////////////////////////////////////////////////
//data-item
const sweets_data= document.querySelectorAll(".store-item")
//////////////////////////////////////////////////////////////////


function filter(){

a.forEach(function(btn){
    btn.addEventListener("click",function(e){
        if (e.currentTarget.contains(cakeFilter)||e.currentTarget.contains(cupcakesFilter)||e.currentTarget.contains(sweetsFilter)||e.currentTarget.contains(doughnutsFilter) ){
            cupCakes.forEach(function(c){
             c.remove();

            })
            sweets.forEach(function(s){
                s.remove();
            })
            doughnuts.forEach(function(d){
                d.remove();
            })
            cakes.forEach(function(v){
                v.remove();
            })

        }

    })
})

}
filter();

function saveValues(){
    a.forEach(function(btn){
        btn.addEventListener("click",function(e){
            if (e.currentTarget.contains(cakeFilter)){
                cakes.forEach(function(b){
                    store.append(b);
                })
            }
            else if (e.currentTarget.contains(cupcakesFilter)){
                cupCakes.forEach(function(c){
                    store.append(c);
                })
            }
            else  if (e.currentTarget.contains(sweetsFilter)){
                sweets.forEach(function(s){
                    store.append(s);
                })
            }
            else if (e.currentTarget.contains(doughnutsFilter)){
                doughnuts.forEach(function(d){
                    store.append(d);

                })
            }
           else if (e.currentTarget.contains(All)){
            sweets_data.forEach(function(z){
                store.append(z);
            })
           }
        })
    })
}
saveValues();

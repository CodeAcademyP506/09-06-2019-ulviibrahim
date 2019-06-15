
// Yeni Telefon constructor Object yaradın

function telephone(name,species,color,storage,balanceStatus){
    // Telefona aid property-ler elave edin
    this.name=name;
    this.species=species;
    this.color=color;
    this.storage=storage; 
    this.balance=parseInt(balanceStatus);
    this.calcTimeCall= function calcTimeCall(minute){
       this.minute=minute;
       
       return this.minute* 0.03
    }
// Balansin artirilmasi metodu
    this.charge= function chargeBalance(money){
        this.money=money
           var chargeBalanceMoney= this.balance+=money
    var exceptionC="Siz balansinizi "+this.money +" manat artirdiniz. Hazirki balansiniz: "+this.balance+" manatdir"
    chargeBalanceMoney.toFixed(2)
         return exceptionC
    }
    // getInfo metodu
   this.getInfo= function getInfo(){
        var info= "Name phone: "+this.name+", Type: "+this.species+", Color: "+ this.color+", Storage: "+this.storage+"gb "+", Balance: "+this.balance
        return  info
    }

//  Balansin azaldilmasi metodu
this.resultBalance=function resultBalance(minute){
    var rbalance= this.balance-=this.calcTimeCall(minute)
     rbalance.toFixed(2)
    var exception="Siz "+this.minute+" deqiqe danisdiniz ve balansinizdan  "+ this.calcTimeCall(minute) +" manat cixildi. hazirki balansiniz: "+rbalance
return exception
}

}



var Samsung= new telephone("Samsung","Galaxy A7 2016", "black", 16,10)
var Nokia= new telephone("Nokia","C6","black",8,4 )


Samsung.charge(5)

Nokia.charge(2)

console.log(Nokia.getInfo())
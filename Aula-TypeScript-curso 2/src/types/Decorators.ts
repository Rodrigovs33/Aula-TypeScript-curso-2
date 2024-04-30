export function ValidaDebito(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalmethod = descriptor.value;
    descriptor.value = function(valorDoDebito: number){
        if(valorDoDebito <= 0){
            throw new Error ("O valor a ser debitador precisa ser maior do que zero!!");
            
        }
        if(valorDoDebito > this.saldo){
            throw new Error ("seu saldo é insuficiente para realizar a operação!");
            
        }
        return originalmethod.apply(this, [valorDoDebito])
    }
}
export function ValidaDeposito(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalmethod = descriptor.value;
    descriptor.value = function(valorDoDeposito: number){
        if(valorDoDeposito <= 0){
            throw new Error ("O valor a ser depositadodeve ser maior do que zewro!");
        }
        return originalmethod.apply(this, [valorDoDeposito]);
    }
}
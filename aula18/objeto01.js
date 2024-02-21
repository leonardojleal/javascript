let amigo = {nome: 'josé', 
sexo: 'M', 
peso: 85.5,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}






amigo.engordar(5)
console.log(`Meu amigo ${amigo.nome} pesa ${amigo.peso}Kg`)
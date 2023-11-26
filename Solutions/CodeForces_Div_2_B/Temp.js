class form{
  constructor(name){
    this.name=name
  }
  formSub(){
    console.log(`form submited by ${this.name}`)
  }

  formCan(){
    console.log(`form cancelled by ${this.name}`)
  }
}

class fullForm extends form{
  constructor(fullName,age){
    super(age)
  }
}

let newForm=new fullForm(25,"sayooj satheesh");
newForm.formSub()
window.onload = function () {

    let form = document.querySelector("form");
    let name = document.getElementById('name');   

    
    let pristine = new Pristine(form);
    
    let defaultConfig = {
        // class of the parent element where the error/success class is added
        classTo: 'form-group',
        errorClass: 'has-danger',
        successClass: 'has-success',
        // class of the parent element where error text element is appended
        errorTextParent: 'form-group',
        // type of element to create for the error text
        errorTextTag: 'div',
        // class of the error text element
        errorTextClass: 'text-help' 
    };
      
    // A validator to check if the first letter is capitalized
    pristine.addValidator(name, function(value) {
        // here `this` refers to the respective input element
        if (value.length && value[0] === value[0].toUpperCase()){
            return true;
        }
        return false;
    }, "The first character must be capitalized", 2, false);
    

    // name.addEventListener('change', function (e) {
    //     e.preventDefault();
        
    //     // check if the form is valid
    //     var isValid = pristine.validate(); // returns true or false

    //     alert(isValid ? 'Имя написано нормально' : 'Имя с большой буквы напиши')
    //  }); 

     form.addEventListener('submit', function (e) {
         e.preventDefault();
        
        // check if the form is valid
        var isValid = pristine.validate(); // returns true or false
        alert(isValid ? 'отправляем' : 'не отправляем')
     }); 

};
 
window.onload = function () {

    let form = document.querySelector("form");
    let name = document.getElementById('name'); 
    let tel =  document.getElementById('tel');

    
    let pristine = new Pristine(form);
    
    let defaultConfig = {
        // class of the parent element where the error/success class is added
        classTo: 'form-group',
        errorClass: 'has-danger',
        successClass: 'has-success',
        // class of the parent element where error text element is appended
        errorTextParent: 'form-group',
        // type of element to create for the error text
        errorTextTag: 'span',
        // class of the error text element
        errorTextClass: 'text-help' 
    };

      
    // A validator to check if the first letter is capitalized
    pristine.addValidator(name, function(value) {
            if (value.length && value[0] === value[0].toUpperCase()){
            return true;
        }
        return false;
    }, "The first character must be capitalized", 2, false);
    
    //set mask for phone number
    var element = document.getElementById('tel');
    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    var mask = IMask(element, maskOptions);


     form.addEventListener('submit', function (e) {
         e.preventDefault();
         var isValid = pristine.validate(); 
        alert(isValid ? 'Thank you for the order' : 'Something wrong with form. Please try again')
     }); 

};
 
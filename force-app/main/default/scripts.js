function submitHandler() {
    let outputdate = document.querySelector('.outputdate');
    let inputdate = document.querySelector('.inputdate');
    console.log('inputvalue-->> ', inputdate.value);

    //converting string date to localeDate, for localedate use developer console using userInfo.getlocale() method
    let formatedDate = new Date(inputdate.value).toLocaleDateString('en-IN');
    outputdate.value = formatedDate;
}
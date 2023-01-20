# Modale Formulary Validate(MFV)

# Getting Started with MFV

#1 Import the npm library in your project
#2 Import the component in your jsx at the modal place
#3 Add two props in the call of the components : <ModalFormValidate isModalOpen={isModalOpen} userinfo={modalData} />
1st props : isModalOpen must return "true or false"
2nd props : userinfo must return the object fill in with all form's inputs value
exemple :
const data = {
firstName: "",
lastName: "",
birth: "",
dateStart: "",
street: "",
city: "",
state: "",
zipCode: "",
department: "",
};
#4 Enjoy the library

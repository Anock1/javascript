var myDetails = document.getElementById("about");
const me ={
    first_name:"Anock",
    last_name:"Mumba",
    height:"1.5metres",
    country:"Malawi",
    getDetails: function () {
        myDetails.innerHTML = `<h2>My Name is ${this.first_name}  ${this.last_name}
        </h2>
        <p>I am ${this.height} tall.</P> 
        <p>I am from Malawi.</p>
        `
    }
}


me.getDetails();
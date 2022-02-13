fetch("https://randomuser.me/api")
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        console.log(data);
        let personProfile = data.results[0];
        let image = document.createElement("img");
        let mainDiv = document.getElementById("main");
        let personInfo = document.createElement("ul");
        let li = document.createElement("li");
        personInfo.appendChild(document.createTextNode(`Name: ${personProfile.name.first} ${personProfile.name.last}`));
        personInfo.appendChild(document.createTextNode(`Age: ${personProfile.dob.age}`));
        personInfo.appendChild(document.createTextNode(`Gender: ${personProfile.gender}`));
        personInfo.appendChild(document.createTextNode(`Country: ${personProfile.location.country}`));
        personInfo.appendChild(document.createTextNode(`City: ${personProfile.location.city}`));
        personInfo.appendChild(document.createTextNode(`Email: ${personProfile.email}`));

        image.setAttribute("id", "personPic");
        image.src = personProfile.picture.large;
        mainDiv.appendChild(image);
        mainDiv.appendChild(personInfo);
    })
    .catch((error) => {
        console.log(error);
    });

//    Profile picture (medium or lage)
// Name (First, Last)
// Age
// Gender
// Country
// City
// Email

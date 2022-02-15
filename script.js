fetch("https://randomuser.me/api")
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        // console.log(data);
        let personProfile = data.results[0];
        let image = document.createElement("img");
        let mainDiv = document.getElementById("main");
        // let personInfo = document.createElement("ul");
        // let liName = document.createElement("li");
        // let liAge = document.createElement("li");
        // let liGender = document.createElement("li");
        // let liCountry = document.createElement("li");
        // let liCity = document.createElement("li");
        // let liEmail = document.createElement("li");
        // liName.appendChild(document.createTextNode(`Name: ${personProfile.name.first} ${personProfile.name.last}`));
        // liAge.appendChild(document.createTextNode(`Age: ${personProfile.dob.age}`));
        // liGender.appendChild(document.createTextNode(`Gender: ${personProfile.gender}`));
        // liCountry.appendChild(document.createTextNode(`Country: ${personProfile.location.country}`));
        // liCity.appendChild(document.createTextNode(`City: ${personProfile.location.city}`));
        // liEmail.appendChild(document.createTextNode(`Email: ${personProfile.email}`));
        image.setAttribute("id", "personPic");
        image.src = personProfile.picture.large;
        mainDiv.appendChild(image);
        // mainDiv.appendChild(personInfo);
        // personInfo.appendChild(liName);
        // personInfo.appendChild(liAge);
        // personInfo.appendChild(liGender);
        // personInfo.appendChild(liCountry);
        // personInfo.appendChild(liCity);
        // personInfo.appendChild(liEmail);
        let createPersonData = (data) => {
            //argument is an object
            // const personDisplayInfo = [];
            personDisplayInfo.push({ Name: `${personProfile.name.first} ${personProfile.name.last}` });
            personDisplayInfo.push({ Age: `${personProfile.dob.age}` });
            personDisplayInfo.push({ Gender: `${personProfile.gender}` });
            personDisplayInfo.push({ Country: `${personProfile.location.country}` });
            personDisplayInfo.push({ City: `${personProfile.location.city}` });
            personDisplayInfo.push({ Email: `${personProfile.email}` });

            return personDisplayInfo;
        };
        const personDisplayInfo = [];
        createPersonData(data);
        return personDisplayInfo;
    })
    .then((displayData) => {
        console.log(displayData);
        let mainDiv = document.getElementById("main");
        let li;
        let personInfo = document.createElement("ul");
        displayData.forEach((category) => {
            li = document.createElement("li");
            li.appendChild(document.createTextNode(`${Object.keys(category)[0]} : ${Object.values(category)[0]}`));
            personInfo.appendChild(li);
        });
        mainDiv.appendChild(personInfo);
    })
    .catch((error) => {
        console.log(error);
    });

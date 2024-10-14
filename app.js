$(document).ready(function() {
    const apiKey = '402823046e07f1a2eea14d5ab45f282e';

    $('.logo').click(function() {
        alert('Welcome to Meow Club!');
    });

    window.navigateTo = function(sectionId) {
        $('section').hide();
        $(`#${sectionId}`).show();
        $('html, body').animate({
            scrollTop: $(`#${sectionId}`).offset().top
        }, 800);
        if (sectionId === 'profile') {
            renderPetProfiles();
        }
    }

    window.handleClick = function(animalType) {
        localStorage.setItem('selectedAnimal', animalType);
        navigateTo('create-profile');
    }

    $('#pet-profile-form').on('submit', function(event) {
        event.preventDefault();
        const petProfile = {
            name: $('#petName').val(),
            age: $('#petAge').val(),
            breed: $('#petBreed').val(),
            gender: $('#petGender').val(),
            neutered: $('#petNeutered').val(),
            environment: $('#petEnvironment').val(),
            animalType: localStorage.getItem('selectedAnimal')
        };

        let petProfiles = JSON.parse(localStorage.getItem('petProfiles')) || [];
        petProfiles.push(petProfile);
        localStorage.setItem('petProfiles', JSON.stringify(petProfiles));

        navigateTo('vaccination-history');
        displayVaccinationHistory();
    });

    function displayVaccinationHistory() {
        const petProfile = JSON.parse(localStorage.getItem('petProfiles')).slice(-1)[0];
        if (petProfile) {
            $('#petNameTitle').text(`Pet: ${petProfile.name}`);
            $('#petInfo').html(`
                Age: ${petProfile.age} <br>
                Breed: ${petProfile.breed} <br>
                Gender: ${petProfile.gender} <br>
                Neutered/Spayed: ${petProfile.neutered} <br>
                Environment: ${petProfile.environment} <br>
                Type: ${petProfile.animalType}
            `);
            const vaccinationHistory = JSON.parse(localStorage.getItem('vaccinationHistory')) || [];
            displayVaccinations(vaccinationHistory);
        }
    }

    function displayVaccinations(vaccinations) {
        const vaccinationList = $('#vaccinationList');
        vaccinationList.empty();
        vaccinations.forEach((vaccine) => {
            vaccinationList.append(`<li>${vaccine.name} - ${vaccine.date}</li>`);
        });
    }

    window.addVaccination = function() {
        const vaccineName = prompt('Enter the vaccine name:');
        const vaccineDate = prompt('Enter the vaccination date (YYYY-MM-DD):');
        if (vaccineName && vaccineDate) {
            const vaccinationHistory = JSON.parse(localStorage.getItem('vaccinationHistory')) || [];
            vaccinationHistory.push({ name: vaccineName, date: vaccineDate });
            localStorage.setItem('vaccinationHistory', JSON.stringify(vaccinationHistory));
            displayVaccinations(vaccinationHistory);
        }
    }

    function renderPetProfiles() {
        const petProfiles = JSON.parse(localStorage.getItem('petProfiles')) || [];
        const petProfilesList = $('#petProfilesList');
        petProfilesList.empty();
        petProfiles.forEach((profile, index) => {
            const profileCard = `
                <div class="profile-card">
                    <h3>${profile.name} (${profile.animalType})</h3>
                    <p>Age: ${profile.age}</p>
                    <p>Breed: ${profile.breed}</p>
                    <p>Gender: ${profile.gender}</p>
                    <p>Neutered/Spayed: ${profile.neutered}</p>
                    <p>Environment: ${profile.environment}</p>
                    <button class="edit-button" onclick="editProfile(${index})">Edit</button>
                    <button class="delete-button" onclick="deleteProfile(${index})">Delete</button>
                </div>
            `;
            petProfilesList.append(profileCard);
        });
    }

    window.editProfile = function(index) {
        const petProfiles = JSON.parse(localStorage.getItem('petProfiles')) || [];
        const profile = petProfiles[index];

        $('#petName').val(profile.name);
        $('#petAge').val(profile.age);
        $('#petBreed').val(profile.breed);
        $('#petGender').val(profile.gender);
        $('#petNeutered').val(profile.neutered);
        $('#petEnvironment').val(profile.environment);
        localStorage.setItem('selectedAnimal', profile.animalType);

        // Remove the old profile to replace it with the updated one upon form submission.
        petProfiles.splice(index, 1);
        localStorage.setItem('petProfiles', JSON.stringify(petProfiles));

        navigateTo('create-profile');
    }

    window.deleteProfile = function(index) {
        let petProfiles = JSON.parse(localStorage.getItem('petProfiles')) || [];
        petProfiles.splice(index, 1);
        localStorage.setItem('petProfiles', JSON.stringify(petProfiles));
        renderPetProfiles();
    }
});

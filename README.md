# Meow Club - Pet Management Website

## Overview
Meow Club is a web-based application designed to help pet owners manage their pets' profiles and vaccination histories. The website provides features for creating pet profiles, tracking vaccination records, and browsing available pet services. It is built using HTML, CSS, and JavaScript, with localStorage utilized for persisting user data.

## Features
- **Home Page**: Welcomes users to Meow Club and allows them to select an animal type.
- **Pet Profile Creation**: Users can create detailed profiles for their pets, including name, age, breed, gender, and environment.
- **Vaccination History**: Each pet profile can store and display vaccination records. Users can add vaccination history for their pets.
- **Pet Profiles Management**: Users can view, edit, and delete their pet profiles. Vaccination history is displayed for each pet.
- **Pet Services**: A list of available services such as grooming, vaccination, doctor consultation, and training is available for users to choose from.
- **About Us**: Information about the Meow Club, including contact details and the organization's mission, is displayed.

## Technology Stack
- **Frontend**: 
  - HTML5
  - CSS3
  - JavaScript (jQuery)
- **Data Storage**: 
  - `localStorage` is used to persist pet profiles and vaccination history data in the browser.

## Project Structure
- **HTML (index.html)**: The main file for structuring the web application. It contains various sections such as Home, Profile, Vaccination History, Services, and About Us.
- **CSS (styles.css)**: Contains the styling for the website, including layout, colors, and responsive design.
- **JavaScript (app.js)**: Handles interactivity, profile management, and data persistence. It manages profile creation, vaccination history, and navigation.

## How to Use
1. **Home Page**: 
   - Start by selecting an animal type (e.g., Dog or Cat) to create a pet profile.
2. **Create Profile**: 
   - Enter the pet's details such as name, age, breed, gender, and environment.
   - Submit the form to create the profile, which will be saved in localStorage.
3. **Pet Profiles**:
   - Navigate to the Pet Profiles section to view the created profiles. 
   - Each profile includes buttons to:
     - **Edit**: Update the pet's information.
     - **Delete**: Remove the profile from the list.
     - **Add Vaccination**: Add a new vaccination record (name and date).
4. **Vaccination History**:
   - Each pet profile displays its associated vaccination history. Users can add vaccination records by clicking the "Add Vaccination" button under the profile.
5. **Pet Services**:
   - Browse available services such as grooming, vaccination, doctor consultation, and training.
6. **About Us**:
   - View contact information and learn about the mission of Meow Club.

## Data Persistence
- Pet profiles and vaccination histories are saved in the browser's `localStorage`. This allows users to close and reopen the browser without losing data. Data is cleared if the user manually deletes profiles or clears browser storage.

## Installation and Setup
1. **Download or Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/meow-club.git

# Exercise description and how to run it.
Firs step would be to clone the repository.

It is separaited in two parts: 
- backend(API project with CRUD operations)
- frontend(ReactJS in TypeScript using NextJS framework and TailwindCSS for style).

## Backend 
### To run
- In the repository open the **Backend/DevicesController** folder.
- Activate the **DevicesController.sln** solution file using Windows Visual Studio.
- Press the **F5** button or click the **run/debug** button to launch the project(it should open the Swagger page in the browser, displaying CRUD operations).
  
![Screenshot of a run/debug button in Windows Visual Studio](https://github.com/LigaV123/Controller/blob/main/runButton.PNG)

### Description
#### GET Functions:
There are 5 available retrieval functions:

- To select and view all data.
- Retrieve a specific object by its ID.
- Get an array of data by name, model, or status. If the requested values are not found in the database, a not found error will be displayed.
- If searching for an object by name, model, or status with an empty value, a bad request error will be displayed.

#### POST Function:
This function creates a new object and adds it to the database. All fields must be filled in; empty values result in a bad request error.

- The object ID is generated automatically so there is no need in adjusting it.
- The status must be 'on' or 'off'; other values are not accepted.
- Names and models can be created as desired.
- The conversation status must be a whole number; letters and special characters are not allowed.

#### PUT Function:
This function allows updating the values of a specific object.

The desired object ID must be specified. 

All conditions described for the POST function apply here as well, except for the ID field, which must match the specified object ID;
otherwise, a bad request error will be displayed. 

If the desired ID and object ID match but are not in the database, a not found error will be displayed.

#### DELETE Function:
This function requires entering the object ID and then deletes the object from the database. 

If it fails to find the ID, a not found error will be displayed.

## Frontend 
### To run
- In Visual Studio Code Terminal or Command Prompt, navigate to the project directory using the command:
  **cd Users\Name\Desktop\DevicesController\Frontend** (resulting in something like: **C:\Users\Name\Desktop\DevicesController\Frontend>**).
- Install dependencies: Inside the project directory, run the command: **npm install** (or **npm i**) to install the required dependencies.
- Start the development server with the command: **npm run dev**
- Follow the provided URL to the local host; Ctrl+click the link or copy-paste it into your web browser.

![Screenshot of a local host url in Visual Studio Code terminal](https://github.com/LigaV123/Controller/blob/main/localhost.PNG)

### Description
#### Header:
The header contains 4 active links. Clicking on them opens a new page with its respective title. 

Currently, only the Devices page is filled; others remain empty.

A potential enhancement for the header could involve refreshing/reloading the page upon a second click of the same link. 

The User Name section could be made active and functional. Clicking on the main logo could redirect to the Home page.

#### Main Section:
In the main content section, you'll find Online and Offline buttons indicating the number of devices based on their on/off status.
Clicking these buttons filters the displayed devices. Additionally, there's a Quick Search field where you can input a device's name or model to search for it.
All filters display an updated list whenever a device changes its on/off status.

The main content consists of test devices, displaying on/off status as colored balls and percentages, along with the name, model, and conversation status. 
Each device has three buttons visible when hovering over it:

- Settings: Opens a window allowing the modification of the device's name, model, and conversation status.
If any fields are left blank, the original values are retained.
Two additional buttons are available: clicking Update saves the entered new values, while Delete removes the device entirely.
In this section, possibilities could include incorporating an option to change the number of viewed messages for the conversation status (currently static).
- Control: Controls the on/off status of the device. Changes can be observed both in the color of the ball and the percentage displayed.
- Arrow: Opens a window with an overview of the device (Device Details). Here, status changes can be observed when the Control button is clicked.

At the bottom of the main content the available number of devices can be seen depending on the search result.

#### Footer:
The footer displays the current year and copyright information. Currently, the footer's position is fixed at the bottom of the screen.

Improvement could be that it would adapt if the page content increases.

## TMedia

Uzdevums ir izstrādāt nelielu .NET Core C# Web API projektu kuram ir "Devices" kontrolieris ar CRUD operācijām.

Izmantot datubāzi pēc izvēles un saslēgt API ar swagger dokumentāciju.

Kad API ir gatavs savienot to ar frontend skatu tabulu: https://www.figma.com/file/zQBJ2cH1zZfiKOQhDpZ4IX/TMEDIA.LV-test-task?type=design&node-id=0%3A1&mode=design&t=2jgoVzqavDUFybmd-1

Frontend prasības:

- ReactJS ar Typescript izmantojot NextJS framework
- Stiliem izmantot TailwindCSS.

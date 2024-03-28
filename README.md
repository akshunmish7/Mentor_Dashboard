# Mentor Dashboard App [Link](https://mentor-dashboard-lyart.vercel.app/)
This App helps you easily view, update/edit , add or remove students to a particular mentor and then download their report card as well in the form of a pdf :-).

### **Features:**
1. The Mentor Dashboard provides a platform for mentors to manage student evaluations and is Responsive as well. 
2. Mentors can click on their name and open the dashboard.
3. Once Entered, mentors can add students to their dashboard and assign marks based on project criteria such as ideation, execution and viva. 
4. The App automatically calculates the total marks obtained by each student.
5. Once the mentor is sure of the marks given to the students, He/She can lock the grades.
6. Once Locked, the changes cannot be made further, and the marks can be downloaded as a student report pdf.

### **Edge Cases Taken care Of**
1. The number of students while locking the grades should not be less than 3 and greater than 4.
2. The Marks field i.e. (Viva, Ideation, Execution) cannot be empty while locking of grades.
3. Same student is not assigned to more than one mentor.
4. The marks field's cannot take a value greater than 10 as the maximum marks are 10 for each topic.
5. Once Locked no modifications can be done and only the pdf can be downloaded.

### **Major Issue I faced**
I faced a major issue in deploying frontend and backend sides of the app and then connecting them. To Overcome this I made a "database.js" file in src folder of my App that follows the same schema and then connected it to the frontend. It serves the same purpose as the backend just that Backend Tech Stacks were ignored.

### **Next Onto the App**
1. The Send Email Feature is to be added.
2. Backend to be deployed and is to be connected to Frontend.

## **Method to install the App and run it in the local**
1. Open the terminal in the VS Code or any other Code Editor.
2. Copy Paste the Following Command in the terminal.
``` 
git clone https://github.com/akshunmish7/Mentor_Dashboard.git
```
3. Next Run the following command on the Terminal
```
cd Mentor_Dashboard (or press the "tab" key after cd)
npm install
```
4. Once All the Dependencies are installed you can Run the App
```
npm start
```

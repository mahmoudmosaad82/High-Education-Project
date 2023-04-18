# High-Education-Project
We are making a RESTful API by framework Node.js with Express.js , Our program is for University to save data of those who willing to continue Masters and PHD Degrees.
A student management system for higher education registry is a software system designed to help manage student information, enrollment, academic records, and other administrative functions. The system should be able to store data in a local database and provide access to the data at any time. The system should also include the ability to perform CRUD (Create, Read, Update, Delete) functions for student records.

Key features of the system  include:

Student data management: The system should be able to store and manage data on students, including personal information, academic records, and enrollment details.

Enrollment management: The system should allow administrators to manage student enrollment, including course registration and scheduling.

Academic records management: The system should enable administrators to manage student academic records, including grades, transcripts, and degree requirements(FUTURE USE).

User management: The system should provide role-based access controls to ensure that only authorized users have access to sensitive student information.

To wrap up, the student management system should be designed to streamline administrative processes, improve data accuracy and accessibility, and support decision-making based on data analysis.



### Here we get all the saved data (objects) with .get() method ....

<img width="1279" alt="Screen Shot 2023-04-01 at 12 13 25 AM" src="https://user-images.githubusercontent.com/66203316/229242703-79405957-e050-49ba-9d1d-36014999a44a.png">

### Here we send the data (objects) to the server using .post() method....

<img width="1280" alt="Screen Shot 2023-04-01 at 12 14 18 AM" src="https://user-images.githubusercontent.com/66203316/229242700-fecc417e-6e7d-4543-880f-6051b5346315.png">

### Here we confirm that that the data is sent succesfully by calling .get() method again to see the update in data ....

<img width="1279" alt="Screen Shot 2023-04-01 at 12 14 42 AM" src="https://user-images.githubusercontent.com/66203316/229242697-478150b9-5d71-4ccb-80eb-3201daa49a8e.png">

### Here we delet a specific objeject by it's id by calling .delete() method ...

<img width="1280" alt="Screen Shot 2023-04-01 at 12 15 08 AM" src="https://user-images.githubusercontent.com/66203316/229242695-be7edd4f-ca28-4d05-8e38-c9283faed170.png">

### Here we confirm that that the data is deleted succesfully by calling .get() method again to see the update in data ....

<img width="1280" alt="Screen Shot 2023-04-01 at 12 15 32 AM" src="https://user-images.githubusercontent.com/66203316/229242693-a3b5a83b-ae87-49b6-85eb-22d2f9f6af1a.png">

### Here we update a specific object by it's id by calling .put() method ....

<img width="1275" alt="Screen Shot 2023-04-01 at 12 16 05 AM" src="https://user-images.githubusercontent.com/66203316/229242687-f4c49e6b-6d37-4da9-831d-4cd716fd2a91.png">

### Here we confirm that that the data is updated succesfully by calling .get() method again to see the update in data ....

<img width="1280" alt="Screen Shot 2023-04-01 at 12 16 40 AM" src="https://user-images.githubusercontent.com/66203316/229242681-0d798960-397f-4adb-ba05-b0fa97851e1c.png">

## TASK 2 :
### Creating MongoDB. and we see that we have 2 Documents
![db_Saved data](https://user-images.githubusercontent.com/65768688/231809400-7bdae765-1d2e-4169-901a-892eb27af25f.PNG)
### Getting all data we have by using PostMan
![get savedData](https://user-images.githubusercontent.com/65768688/231809408-09308c60-4025-4359-82f6-f6b606e268e3.PNG)
### Getting Student Details By ID

![getDataWithID](https://user-images.githubusercontent.com/65768688/231809411-b69b2ef1-d380-4f69-803a-7ad2303882e2.PNG)
### Adding New Document(student)

![AddNewStudent](https://user-images.githubusercontent.com/65768688/231809378-af85dd61-ec7d-4d2c-aba8-cc3a12d1163e.PNG)
### To make sure that our work is properly working, we try to see all student we have after adding new student

![confirmThatNewStudentIsSent](https://user-images.githubusercontent.com/65768688/231809383-6887e6f4-5c82-4139-a007-44c5f7cf83ae.PNG)
### Also Making sure that student we have added him have added to MongoDB

![db_confirmthatStudentIs Added](https://user-images.githubusercontent.com/65768688/231809398-904d34df-5be5-46b2-86c5-fe39f82077c9.PNG)
### Updating Student By ID and use Edit endpoint


![editStudent](https://user-images.githubusercontent.com/65768688/231809407-f539ebe0-5e6b-4fbc-889f-2c5c1216ba07.PNG)
### Confirm that my most recent update has been successfully executed in MongoDB

![db_confirmEditing](https://user-images.githubusercontent.com/65768688/231809396-cdbbf19f-e1a4-4749-a4d4-1331471552f4.PNG)

### Use Delet Endpoint and delete student by ID

![deleteStudent](https://user-images.githubusercontent.com/65768688/231809402-0cb362b3-43ed-4e8f-8e29-1375401917bf.PNG)
### Confirm that my most recent delete has been successfully executed in MongoDB

![db_confirm that student is deleted](https://user-images.githubusercontent.com/65768688/231809388-0112bbd2-8b94-45e3-885b-89de900d1f97.PNG)



## TASK 3 :



###  run docker by using the command < docker run nodejs-api-rest > and
this is the remot repository after we push docker by using the command  < docker run nodejs-api-rest >

![1](https://user-images.githubusercontent.com/65768688/232782540-a75b2022-2ac8-4a14-9044-b62961438a2e.jpeg)


### After we build docker using the command  < docker build -t nodejs-api-rest >

![2](https://user-images.githubusercontent.com/65768688/232782546-6d49d7b2-c336-40ac-8def-ae28aff11d11.jpeg)



# Welcome to Scriblet!
>The study helper designed to help you get your goal grade easily.
>(Currently offline to save on costs)

## User Flow
1. Student creates an account so they can save their data easily
2. The student is granted a 'global' subject to save their unorganized quizes and notes.
3. They can then create a new subject to contain other quizzes and notes. 
4. The student can create a quiz then go to the quiz page.
5. On the quiz page, the student can edit the quiz then add questions for the quiz.
6. Once questions are stored in the quiz, the student can 'start' the quiz by clicking the start button.
7. If a student has notes they need to take for a subject, they can go to the subject then click on the plus button when they are on the note tab. This will redirect them to the create note page. 
8. They can then specify the title, body, and subject(if they want to change it)

## Technologies used
- React
- Node.js
- Bcrypt
- Express
- Prisma
- mySql
- AWS
- React Router
- Redux Toolkit
- axios


## Application Architecture
This app is hosted on the AWS Cloud:
- The react frontend is hosted on aws Amplify which is connected to this repository. That allows for easy deployment of new versions. 
- The Scriblet node.js API is hosted on a t2.micro ec2 instance. I decided to use this approach since the api I am writing for my current job is serverless (api gateway -> Lambda function -> [dynamodb / stepMachines / SNS / ...]) and I wanted a change of pace post work. 
- The data base is a mySql community server instance created through aws RDS. This service allows for a generous free tier and is simple in terms of upkeep. The API uses Prisma to talk to the database.
- The backend firewall is protected by security group instances. The only traffic allowed into the database has to originate from the ec2 instance hosting the Scriblet API. The same principal goes for the ec2 instance containing the API. Only traffic from the frontend website hosted by Amplify is allowed to trigger endpoints on the ec2 instance. 

## Pictures
> As stated above, these resources have been temporarily taken offline to save on costs. If you would like to see the app or want to talk more about it, feel free to contanct me -> leocucinell@gmail.com

**Home Page**
![alt text](https://i.imgur.com/wF0ZbJ8.png)
**Quiz Page**
![alt text](https://i.imgur.com/K2bNRDk.png)
**Subject Page**
![alt text](https://i.imgur.com/8ug4z6e.png)
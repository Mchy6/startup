# Bird Quiz

## Description deliverable

### Elevator pitch

People are always impressed when I can accurately identify birds simply by listening to their calls, and nothing else. It seems like a strange, difficult task to learn this skill, but in reality, anyone can with a bit of practice. That's where my website comes in. When a user enters the website and logs in, they can practice learning the most common bird calls from their region with a quiz that has a flashcard-like structure. Progress is saved to their account, so they can pick up where they left off and see their skills improve.  

### Design

![Mock](birdQuizMockUI.png)

Here is a mock up of what the bird quiz UI will look like.

### Key features

- Secure login of HTTPS
- Ability to do multiple-choice style quiz of birds based in different regions
- "Show hint" will reveal an image of the current bird
- Display of four bird names as possible answers
- Test history is stored for each user
- Compare quiz results with other users for the same region

### Technologies

I am going to use the required technologies in the following ways.

- **Authentication** - Includes login page to create account or log back in to existing account. Account name is displayed on login page.
- **Database data** - Users' past quizzes and scores will be stored in database.
- **WebSocket data** - Other users results for tests in the same region will be displayed in real time

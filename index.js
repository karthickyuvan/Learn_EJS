import express from 'express'; // Import the Express framework
const app = express(); // Create an instance of Express
const port = 3000; // Define the port number where the server will run


app.get('/', (req, res) => { // When user accesses the home route ('/'), this function executes
//const today = new Date("june 24,2023 11:13:00"); // Create a Date object (static date used)
const today = new Date();
const day = today.getDay(); // Get the day of the week (0 = Sunday, 6 = Saturday)
    let type = " a Weekday"; // Default message (assume it's a weekday)
    let adv = " it's Time to WorkHard"; // Default advice for weekdays

    if (day === 0 || day === 6) { // If it's Sunday (0) or Saturday (6)
        type = " the Weekend"; // Change type to "Weekend"
        adv = " it's time to have Some Fun"; // Change advice for weekends
    }
    res.render('index.ejs', { dayType: type, advice: adv });

  });
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
/*            
Uses getDay() to retrieve the day of the week:
0 → Sunday
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday */

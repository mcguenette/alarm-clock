### Variables:
alarmTime: Represents the time at which the alarm is set.
alarmTimeout: Represents the timeout ID for the alarm, used to clear the alarm if needed.
audio: An HTML Audio element used to play an alarm sound.
hoursInput and minutesInput: Parsed integers from the values of input elements for hours and minutes.

### Functions:
getCurrentTime():

Updates the displayTime element with the current formatted time.
formatTime(time):

Formats a given time value to ensure it has leading zeros if less than 10.
setAlarm():

Sets the alarm time based on user input (hours and minutes).
Compares the alarm time with the current time and schedules a timeout to play the alarm sound when the alarm time is reached.
validateAlarm():

Validates user input for hours and minutes.
If the input is invalid, displays an error message.
If the input is valid, sets the alarm using the setAlarm function.
clearAlarm():

Pauses the alarm sound and clears the scheduled alarm timeout if it exists.
Resets the displayed alarm text and updates the display time color.

### Event Handling:
The script uses the onEvent function to handle click events on the "Set Alarm" and "Clear Alarm" buttons.
Clicking the "Set Alarm" button triggers the validateAlarm function.
Clicking the "Clear Alarm" button triggers the clearAlarm function.


[Demo](https://mcguenette.github.io/alarm-clock/)
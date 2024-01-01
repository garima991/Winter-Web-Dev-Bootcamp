import speech_recognition as sr
import smtplib

recognizer = sr.Recognizer()

with sr.Microphone() as source:
    print("Clearing background noise")
    recognizer.adjust_for_ambient_noise(source, duration = 3)
    print("waiting for your message...")
    recordedAudio = recognizer.listen(source)
    print("Done recording.")
    
    try:
        print("Printing the message...")
        text = recognizer.recognize_google(recordedAudio, Language = 'en-US')
        print(f"Your message is: {text}")
        
    except sr.RequestError:
        print("Speech Recognition service unavailable.")
        
    except sr.UnknownValueError:
        print("Sorry, couldn't understand the speech.")
        
    except Exception as e:
        print(e)
        
# replace with reciever's email address
receiver = 'reciever_email@gmail.com'

# message recognized using speech recognition
message = text

# replace with sender's email address
sender = 'your_email@gamil.com'
subject = "Automated email testing"

# your app password generated through google account seetings
password = 'your_app_password'

# connect to the SMTP server
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()

# Login to the email account using app password
server.login(sender, password)

# send the email
server.sendmail(sender, receiver, message)
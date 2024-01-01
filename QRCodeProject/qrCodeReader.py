import cv2
from pyzbar.pyzbar import decode
import time

# Initialise the camera
cam = cv2.VideoCapture(0)

cam.set(5,640)
cam.set(6,480)

camera = True

while camera == True:
    # Capture frames from the camera
    success, frame = cam.read()
    
    # loop throught the detected QR codes
    for i in decode(frame):
        
        # Get the type of decoded object and print
        print(i.type)
        
        # Extract data from QR code
        print(i.data.decode('utf-8'))
        time.sleep(5)
        
    # Display the frame with detected  QR code and their data
    cv2.imshow("QRScanner", frame) 
    
    # Exit if 'ESC' is pressed
    key = cv2.waitKey(5000)
    if key == 27:
        break
    
# Release the camera 
cam.release()

# Close all OpenCV windows
cv2.destroyAllWindows()
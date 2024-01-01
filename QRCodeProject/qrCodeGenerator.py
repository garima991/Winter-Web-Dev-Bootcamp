import qrcode

# Generate QR code instance -- 
# box_size: denotes size of each pixel in QR code
# border: denotes the width of border around the QR code
features = qrcode.QRCode(version = 1, box_size = 30, border = 2)

# put your desired link inside these quotations and add data to the QR code 
features.add_data("")

features.make(fit = True)

# create an image from the QR code instance
generate_image = features.make_image(fill_color = "black", back_color = "white")

# save the QR code image to the file
generate_image.save("qrcode.png")

# displaying the message confirming successful QR code generation
print("QR code generated successfully!")
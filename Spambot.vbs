'SpamBot made by Merathyst
'Made with some VBS
'Isn't pretty, but she works.
'Don't be stupid
'Be a smarty
'Come and join
'The lemon party
'http://www.lemonparty.org


Function spammer
set shell = createobject ("wscript.shell") 
text = inputbox ("Message","Created by Merathyst")
If text = "" Then wscript.Quit
times = inputbox ("How many times","Created by Merathyst")
If times = "" Then wscript.Quit
interval = inputbox ("Interval (MS)","Created by Merathyst")
If interval = "" Then wscript.Quit
timeneeded = inputbox ("Delay (S)","Created by Merathyst")
If timeneeded = "" Then wscript.Quit
enterOptionInput = msgbox ("Would you like a break (Return Key)?", vbYesNo, "Created by Merathyst")
If enterOptionInput = vbYes Then
enterOptionOutput = "{enter}"
Else If enterOptionInput = vbNo Then
enterOptionOutput = ""
End If
End If
timeneeded2 = timeneeded * 1000 
timeneeded3 = timeneeded
for i=0 to timeneeded3
CreateObject("WScript.Shell").PopUp timeneeded3, 1
timeneeded3 = timeneeded3-1
next
for i=1 to times 
shell.sendkeys (text & enterOptionOutput) 
wscript.sleep interval
next
repeat
End Function
Function repeat
repeatSpam = Msgbox("Repeat?", vbYesNo)
If repeatSpam = vbYes Then
spammer
Else If repeatSpam = vbNo Then
CreateObject("WScript.Shell").PopUp "Thanks!", 1
wscript.Quit
End If
End If
End Function
spammer

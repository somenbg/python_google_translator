import eel
from googletrans import Translator


translator = Translator()

eel.init("web")

@eel.expose
def translate(data, srclang, destlang):
    og_text = data
    t = translator.translate(og_text, src = srclang, dest = destlang)
    print(f'{t.origin}->{t.text}')
    outputText = f'{t.text}'
    # print(outputText)
    
    return outputText


eel.start("home.html")
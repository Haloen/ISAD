from errno import EDQUOT
from pydub import AudioSegment
import wave, json
from vosk import Model, KaldiRecognizer, SetLogLevel

gender = 0
age = 75
education = 6
threshold = 0.6034

class Word:
    def __init__(self, dict):
        self.conf = dict["conf"]
        self.end = dict["end"]
        self.start = dict["start"]
        self.word = dict["word"]

def calc_score(gender, age, education, firsthalf, switching, clustering, perseveration):
    return 1.16 + 0.474 * gender + 0.003 * age + 0.226 * education - 0.089 * firsthalf - 0.516 * switching - 0.303 * clustering + 0.534 * perseveration

model_path = "vosk-model-small-en-us-0.15"
mp3 = "audio.mp3"
wav = "audio.wav"

mp3_audio = AudioSegment.from_mp3(mp3)
mp3_audio.export(wav, format="wav")

model = Model(model_path)
wf = wave.open(wav, "rb")
rec = KaldiRecognizer(model, wf.getframerate())
rec.SetWords(True)

results = []
while True:
    data = wf.readframes(4000)
    if len(data) == 0:
        break
    if rec.AcceptWaveform(data):
        results.append(json.loads(rec.Result()))
results.append(json.loads(rec.FinalResult()))

words = []
for sentence in results:
    if len(sentence) == 1:
        continue
    for obj in sentence['result']:
        w = Word(obj)
        words.append(w)
print(words)

print("Text recongised: ", end="")
for word in words:
    print(word.word, end=" ")
print()

with open('animal.txt', 'r') as file:
    lines = file.readlines()

animals = [i.lower().strip().split() for i in lines]

first_half = []
second_half = []

for i in range(len(words)):
    candidates = []
    for j in range(len(animals)):
        animal = animals[j]
        if words[i].word == animal[0]:
            num_words = len(animal)
            spoken = []
            for k in range(num_words):
                if i + k >= len(words):
                    break
                spoken.append(words[i + k].word)
            if spoken == animal:
                candidates.append(j)
    if len(candidates) == 0:
        continue
    res = candidates[0]
    for j in candidates:
        if len(animals[j]) > len(animals[res]):
            res = j
    if words[i].start < 30:
        first_half.append(res)
    else:
        second_half.append(res)
    i += len(animals[res]) - 1

said = [False for i in animals]

perseveration = 0
for i in first_half + second_half:
    if said[i]:
        perseveration += 1
    said[i] = True

assume_no = calc_score(gender=gender, age=age, education=education, firsthalf=len(first_half), switching=10.39, clustering=2.8, perseveration=perseveration)
assume_yes = calc_score(gender=gender, age=age, education=education, firsthalf=len(first_half), switching=2.4, clustering=2.6, perseveration=perseveration)

print(assume_no, assume_yes)

if assume_yes < threshold:
    print("No Alzheimer's")
elif assume_no >= threshold:
    print("Yes Alzheimer's")
else:
    print("Maybe Alzheimer's")

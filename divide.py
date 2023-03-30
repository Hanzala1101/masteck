import librosa
import soundfile as sf

# Load the audio file
audio_file = 'path/to/audio/file.wav'
audio, sr = librosa.load(audio_file)

# Define the segment duration in seconds
segment_duration = len(audio) / 30

# Split the audio into segments
for i in range(30):
    start = int(i * segment_duration)
    end = int((i + 1) * segment_duration)
    segment = audio[start:end]
    output_file = 'segment_{i}.wav'.format(str(i).zfill(2))
    sf.write(output_file, segment, sr)
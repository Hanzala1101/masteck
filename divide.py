import os
f = os.listdir('dataset/')
for file in f:
    name = file.split('.')
    os.system(f'ffmpeg -i dataset/{file} -f segment -segment_time 30 -c copy train1/{name[0]}_%03d.wav')
    print('done')
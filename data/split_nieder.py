import csv
from collections import defaultdict

d = defaultdict(list)

with open('niederschlag.csv') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=';')
    for row in list(spamreader)[3:]:
        if len(row[0].split(' ')) != 2:
            continue
        date, time = row[0].split(' ')
        number = float(row[1].replace(',', '.'))
        d[date].append((date, time, number))

for index, val in enumerate(d.values()):
    with open('../app/assets/data_nieder/' + str(index) + '.csv', 'w') as file:
        writer = csv.writer(file)
        writer.writerow(['date', 'time', 'value'])
        writer.writerows(val)

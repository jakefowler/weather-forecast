import requests
import pprint as p
import statistics as stat
from collections import Counter

apiKey = "99e23cb08eada4180401a2c68fbd3014"
baseUrl = "https://api.openweathermap.org/data/2.5/forecast"

def getZipcodeWeather(zipcode):
    return requests.get(url = baseUrl, params = {'zip':zipcode, 'appid':apiKey})

response = getZipcodeWeather('84010')
print(response.status_code)
weather = response.json()
print(weather['city'])
print(weather['list'][0]['main'])
print(weather['list'][0]['main']['temp'])
temps = [w['main']['temp'] for w in weather['list']]
print("Temperatures", temps)
avgTemp = stat.mean(temps)
print("Average Temp: ", avgTemp)

minTemps = [w['main']['temp_min'] for w in weather['list']]
print("Min Temperatures: ",minTemps)
avgMinTemp = stat.mean(minTemps)
print("Average Min Temp: ", avgMinTemp)

maxTemps = [w['main']['temp_max'] for w in weather['list']]
print("Max Temperatures: ",maxTemps)
avgMaxTemp = stat.mean(maxTemps)
print("Average Max Temp: ", avgMaxTemp)

def convertKelvToFahr(kelv):
    return (kelv - 273.150) * 9/5 + 32

fahrAvgMaxTemp = convertKelvToFahr(avgMaxTemp)
print(fahrAvgMaxTemp)
print(round(fahrAvgMaxTemp))


def getKeyInList(data, key):
    return [d[key] for d in data]

# weatherMain = [w['main'] for w in weather['list']]
weatherList = weather['list']

wind = getKeyInList(weatherList, 'wind')

p.pprint(wind)

def getAvgHumidity(weatherList):
        humidity = [w['main']['humidity'] for w in weatherList]
        return stat.mean(humidity)

avgHumidity = getAvgHumidity(weatherList)
print(avgHumidity)

def getAverageWindDirection():
    pass

# p.pprint(weatherList)

secondsInDay = 86400
unixUtc = weather['list'][0]['dt']
print(unixUtc)
timeZoneShift = weather['city']['timezone']
print(timeZoneShift)



data = {'city': weather['city']}
data['days'] = []
# data.update(weather['city'])
print("data: ",data)
days = []
temp_min = []
temp_max = []
wind_dir = []
humidity = []
wind_speed = []
description = []
weather_icon_id = []


print([w['dt'] for w in weatherList])
print([w['dt_txt'] for w in weatherList])
print([w['dt_txt'][8:10] for w in weatherList])

dayNum = weatherList[0]['dt_txt'][8:10]
print(dayNum)

dayCheck = weatherList[0]['dt_txt'][8:10]
recordsInDay = 8
for w in weatherList:
    if (w['dt_txt'][8:10] != dayCheck):
        dayCheck = w['dt_txt'][8:10]
        # counter used to avoid mode errors on equal counts
        counter_desc = Counter(description)
        counter_icon = Counter(weather_icon_id)
        data['days'].append({'temp_min':round(convertKelvToFahr(min(temp_min))), 
                            'temp_max':round(convertKelvToFahr(max(temp_max))),
                            'humidity':stat.mean(humidity),
                            'wind_speed':max(wind_speed),
                            'wind_dir':stat.mean(wind_dir),
                            'weather_description':max(counter_desc, key=counter_desc.get),
                            'weather_icon_id':max(counter_icon, key=counter_icon.get),
                            'date':date[:10]
                            })
        temp_min = []
        temp_max = []
        humidity = []
        wind_speed = []
        wind_dir = []
        description = []
        weather_icon_id = []
    temp_min.append(w['main']['temp_min'])
    temp_max.append(w['main']['temp_max'])
    humidity.append(w['main']['humidity'])
    wind_speed.append(w['wind']['speed'])
    wind_dir.append(w['wind']['deg'])
    description.append(w['weather'][0]['description'])
    weather_icon_id.append(w['weather'][0]['icon'])
    date = w['dt_txt']

p.pprint(data)    

print([w['weather'][0]['description'] for w in weatherList])
print([w['weather'][0]['main'] for w in weatherList])
print([w['weather'][0]['icon'] for w in weatherList])

icon_ids = [w['weather'][0]['icon'] for w in weatherList]
counter_icon = Counter(icon_ids)
print(counter_icon)
most_common_icon = max(counter_icon, key=counter_icon.get)
print(most_common_icon)







    





    
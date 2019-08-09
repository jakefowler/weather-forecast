from botocore.vendored import requests
import json
from statistics import mean
from collections import Counter

def convertKelvToFahr(kelv):
    return (kelv - 273.150) * 9/5 + 32

def lambda_handler(event, context):

    apiKey = "99e23cb08eada4180401a2c68fbd3014"
    baseUrl = "https://api.openweathermap.org/data/2.5/forecast"

    response = ''

    if 'zipcode' in event["queryStringParameters"]:
        zipcode = event["queryStringParameters"]["zipcode"]
        response = requests.get(url = baseUrl, params = {'zip':zipcode, 'appid':apiKey})
    elif 'lat' in event["queryStringParameters"]:
        lat = event["queryStringParameters"]["lat"]
        lon = event["queryStringParameters"]["lon"]
        response = requests.get(url = baseUrl, params = {'lat':lat, 'lon':lon, 'appid':apiKey})
    else:
        return {
        'statusCode': 400,
        'headers': {
            'Access-Control-Allow-Origin': '*'
        }

    weather = response.json()

    data = {'city': weather['city']}
    data['days'] = []
    temp_min = []
    temp_max = []
    humidity = []
    wind_speed = []
    wind_dir = []
    description = []
    weather_icon_id = []
    dayCheck = weather['list'][0]['dt_txt'][8:10]

    for w in weather['list']:
        if (w['dt_txt'][8:10] != dayCheck):
            dayCheck = w['dt_txt'][8:10]
            counter_desc = Counter(description)
            counter_icon = Counter(weather_icon_id)
            data['days'].append({'temp_min':round(convertKelvToFahr(min(temp_min))), 
                                'temp_max':round(convertKelvToFahr(max(temp_max))),
                                'humidity':mean(humidity),
                                'wind_speed':max(wind_speed),
                                'wind_dir':mean(wind_dir),
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
        
    return {
        'statusCode': 200,
        'body': json.dumps(data),
        'headers': {
            'Access-Control-Allow-Origin': '*'
        }
    }
import React from 'react';

//Source: https://github.com/schachmat/wego/blob/master/frontends/ascii-art-table.go
const asciiWeather = {
    "Unknown": "    .-.      </br>     __)     </br>    (        </br>     `-᾿     </br>      •      ",
    "Cloudy": "             </br>     .--.    </br>  .-(    ).  </br> (___.__)__) </br>             ",
    "Fog": "             </br> _ - _ - _ - </br>  _ - _ - _  </br> _ - _ - _ - </br>             ",
    "HeavyRain": "     .-.     </br>    (   ).   </br>   (___(__)  </br><span class=\"blue\">  ‚ʻ‚ʻ‚ʻ‚ʻ   </br>  ‚ʻ‚ʻ‚ʻ‚ʻ   </span>",
    "HeavyShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br><span class=\"blue\">   ‚ʻ‚ʻ‚ʻ‚ʻ  </br>   ‚ʻ‚ʻ‚ʻ‚ʻ  </span>",
    "HeavySnow": "     .-.     </br>    (   ).   </br>   (___(__)  </br>   * * * *   </br>  * * * *    ",
    "HeavySnowShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br>    * * * *  </br>   * * * *   ",
    "LightRain": "     .-.     </br>    (   ).   </br>   (___(__)  </br><span class=\"lightblue\">    ʻ ʻ ʻ ʻ  </br>   ʻ ʻ ʻ ʻ   </span>",
    "LightShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br><span class=\"lightblue\">     ʻ ʻ ʻ ʻ </br>    ʻ ʻ ʻ ʻ  </span>",
    "LightSleet": "     .-.     </br>    (   ).   </br>   (___(__)  </br>    ʻ * ʻ *  </br>   * ʻ * ʻ   ",
    "LightSleetShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br>     ʻ * ʻ * </br>    * ʻ * ʻ  ",
    "LightSnow": "     .-.     </br>    (   ).   </br>   (___(__)  </br>    *  *  *  </br>   *  *  *   ",
    "LightSnowShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br>     *  *  * </br>    *  *  *  ",
    "PartlyCloudy": "<span class=\"yellow\">   \\  /      </span></br><span class=\"yellow\"> _ /\"\"</span>.-.    </br><span class=\"yellow\">   \\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br>             ",
    "Sunny": "<span class=\"yellow\">    \\   /    </br>     .-.     </br>  ‒ (   ) ‒  </br>     `-᾿     </br>    /   \\    </span>",
    "ThunderyHeavyRain": "     .-.     </br>    (   ).   </br>   (___(__)  </br><span class=\"blue\">  ‚ʻ⚡ʻ‚⚡‚ʻ   </br>  ‚ʻ‚ʻ⚡ʻ‚ʻ   </span>",
    "ThunderyShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br>    ⚡ʻ ʻ⚡ʻ ʻ </br>    ʻ ʻ ʻ ʻ  ",
    "ThunderySnowShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br>     *⚡ *⚡ * </br>    *  *  *  ",
    "VeryCloudy": "             </br>     .--.    </br>  .-(    ).  </br> (___.__)__) </br>             "
};

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function ForecastDay(props) {
    let {maxTemp, minTemp, wind, humidity, weatherPic} = props.forecast;

    return <div className="day">
        <div id="dayName">
            "{days[props.dayNum]}":
        </div>
        <div id="maxTemp">
            {maxTemp}
        </div>
        <div id="minTemp">
            {minTemp}
        </div>
        <div id="wind">
            <div id="windDirection" style={{transform: `rotate(${wind.direction}deg)`}}>
                ->
            </div>
            <div id="windSpeed">
                {wind.speed}mph
            </div>
        </div>
        <div id="humidity">
            {humidity}%
        </div>
        <pre id="pic" dangerouslySetInnerHTML={{__html: asciiWeather[weatherPic]}}>
        </pre>
    </div>
}

export default ForecastDay

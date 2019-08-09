import React from 'react';

//Source: https://github.com/schachmat/wego/blob/master/frontends/ascii-art-table.go
const asciiWeather = {
    "Unknown": "    .-.      </br>     __)     </br>    (        </br>     `-᾿     </br>      •      ",
    "03d": "             </br>     .--.    </br>  .-(    ).  </br> (___.__)__) </br>             ",
    "50d": "             </br> _ - _ - _ - </br>  _ - _ - _  </br> _ - _ - _ - </br>             ",
    "09d": "     .-.     </br>    (   ).   </br>   (___(__)  </br><span class=\"blue\">  ‚ʻ‚ʻ‚ʻ‚ʻ   </br>  ‚ʻ‚ʻ‚ʻ‚ʻ   </span>",
    "10d": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br><span class=\"blue\">   ‚ʻ‚ʻ‚ʻ‚ʻ  </br>   ‚ʻ‚ʻ‚ʻ‚ʻ  </span>",
    "13d": "     .-.     </br>    (   ).   </br>   (___(__)  </br>   * * * *   </br>  * * * *    ",
    "HeavySnowShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br>    * * * *  </br>   * * * *   ",
    "LightRain": "     .-.     </br>    (   ).   </br>   (___(__)  </br><span class=\"lightblue\">    ʻ ʻ ʻ ʻ  </br>   ʻ ʻ ʻ ʻ   </span>",
    "LightShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br><span class=\"lightblue\">     ʻ ʻ ʻ ʻ </br>    ʻ ʻ ʻ ʻ  </span>",
    "LightSleet": "     .-.     </br>    (   ).   </br>   (___(__)  </br>    ʻ * ʻ *  </br>   * ʻ * ʻ   ",
    "LightSleetShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br>     ʻ * ʻ * </br>    * ʻ * ʻ  ",
    "LightSnow": "     .-.     </br>    (   ).   </br>   (___(__)  </br>    *  *  *  </br>   *  *  *   ",
    "LightSnowShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br>     *  *  * </br>    *  *  *  ",
    "02d": "<span class=\"yellow\">   \\  /      </span></br><span class=\"yellow\"> _ /\"\"</span>.-.    </br><span class=\"yellow\">   \\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br>             ",
    "01d": "<span class=\"yellow\">    \\   /    </br>     .-.     </br>  ‒ (   ) ‒  </br>     `-᾿     </br>    /   \\    </span>",
    "11d": "     .-.     </br>    (   ).   </br>   (___(__)  </br><span class=\"blue\">  ‚ʻ⚡ʻ‚⚡‚ʻ   </br>  ‚ʻ‚ʻ⚡ʻ‚ʻ   </span>",
    "ThunderyShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br>    ⚡ʻ ʻ⚡ʻ ʻ </br>    ʻ ʻ ʻ ʻ  ",
    "ThunderySnowShowers": "<span class=\"yellow\"> _`/\"\"</span>.-.    </br><span class=\"yellow\">  ,\\_</span>(   ).  </br><span class=\"yellow\">   /</span>(___(__) </br>     *⚡ *⚡ * </br>    *  *  *  ",
    "04d": "             </br>     .--.    </br>  .-(    ).  </br> (___.__)__) </br>             "
}

function ForecastDay(props) {
    let {temp_max, temp_min, wind_dir, wind_speed, humidity, weather_icon_id} = props.forecast;

    return <div className="day">
        <div id="maxTemp">
            {temp_max}
        </div>
        <div id="minTemp">
            {temp_min}
        </div>
        <div id="wind">
            <div id="windDirection" style={{transform: `rotate(${wind_dir}deg)`}}>
                ->
            </div>
            <div id="windSpeed">
                {Math.round(wind_speed)}mph
            </div>
        </div>
        <div id="humidity">
            {Math.round(humidity)}%
        </div>
        <pre id="pic" dangerouslySetInnerHTML={{__html: asciiWeather[weather_icon_id.replace('n','d')]}}>
        </pre>
    </div>
}

export default ForecastDay

import WeatherIcon from './WeatherIcon'

const Data = ({data}) => {
    return (
        <div className="container">
            <div className="top">
                <div className="row temperature">
                    {data.main ? <p>Dans la ville de {data.name} il fait {data.main.temp} °C aujourd'hui</p> : <p>Veuillez entrer une ville pour afficher les données.</p>}
                </div>
                <div className="description">
                    {data.weather ? <p>Temps : {data.weather[0].description}</p> : null}
                    <WeatherIcon data={data} />
                </div>
            </div>
            {data.name !== undefined && 
            <div className="bottom">
                <div className="row feels">
                    {data.main ? <p>{data.main.feels_like} °C</p> : null}
                    <p>Température ressentie :</p>
                </div>
                <div className="row humidity">
                    {data.main ? <p>{data.main.humidity} %</p> : null}
                    <p>Humidité :</p>
                </div>
                <div className="row wind">
                    {data.wind ? <p>{(data.wind.speed * 3.6).toFixed(2)} km/h</p> : null}
                    <p>Vitesse du vent :</p>
                </div>
            </div>}        
        </div>
    )
}

export default Data
import "./RubingResume.css";
import * as datefns from 'date-fns';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const RubingResume = () => {
  const [quoteData, setQuoteData] = useState({});
  const [tempInCelsius, setTempInCelsius] = useState(null);
  const [formattedAddress, setFormattedAddress] = useState('');
  const [geoData, setGeoData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  /* const[quoteData,setQuoteData]=useState({});
  const[tempInCelius,setTemInCelius]=useState(null); */
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch quotes from the API
        const quotesResponse = await axios.get('https://dummyjson.com/quotes');
        // Assuming the first quote in the response
        const fetchedQuoteData = quotesResponse.data.quotes[0];
        setQuoteData(fetchedQuoteData);

        // Fetch temperature from OpenWeatherMap API
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Brossard&appid=1691c37009f5ba8b8a957b31b9655570`
        );

        const tempInKelvin = weatherResponse.data.main.temp;
        const calculatedTempInCelsius = Math.round(tempInKelvin - 273.15);
        setTempInCelsius(calculatedTempInCelsius);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchFormattedAddress = async () => {
      const options = {
        method: 'GET',
        url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
        params: {
          latlng: '40.714224,-73.96145',
          language: 'en',
        },
        headers: {
          'X-RapidAPI-Key': '372e4bf1dfmshb6594fcde380071p16d4f8jsn1c51b5429090',
          'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com',
        },
      };

      let fetchedFormattedAddress = '';

      try {
        const response = await axios.request(options);

        if (response.data.results && response.data.results.length > 0) {
          fetchedFormattedAddress = response.data.results[0].formatted_address;
          setFormattedAddress(fetchedFormattedAddress);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchWeatherAndAddress = async () => {
      let address = null;
      const apiKey = '4c5de634bf34e3';
      if (process.env.REACT_APP_X_REAL_IP === undefined) {
        address = `https://ipinfo.io/json?token=${apiKey}`;
      } else {
        address = `https://ipinfo.io/${process.env.REACT_APP_X_REAL_IP}/json?token=${apiKey}`;
      }

      try {
        const geoResponse = await fetch(address);
        const geoData = await geoResponse.json();
        setGeoData(geoData);
        const weatherApiKey = '1691c37009f5ba8b8a957b31b9655570';
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${geoData.city},${geoData.country}&appid=${weatherApiKey}`
        );
        const weatherData = await weatherResponse.json();
        setWeatherData(weatherData);

        const timezone = weatherData.timezone * 1000;
        const offset = new Date().getTimezoneOffset() * 60 * 1000;
        const localTime = new Date().getTime();
        const utc = localTime + offset;
        const targetDate = new Date(utc + timezone);
        setDateTime(datefns.format(targetDate, 'd MMM   HH:mm aaa'));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    fetchFormattedAddress();
    fetchWeatherAndAddress();
  }, []);
  
    if (!dateTime || !geoData || !weatherData) {
      // Loading state or error handling
      return <div>Loading...</div>;
    }
  
    const weatherDataToSend = {
      title: 'Weather',
      dateTime: dateTime,
      city: geoData.city,
      country: geoData.country,
      icon: weatherData.weather[0].icon,
      description: weatherData.weather[0].description,
      main: weatherData.weather[0].main,
      temp: Math.round(weatherData.main.temp - 273.15),
      feels_like: Math.round(weatherData.main.feels_like - 273.15),
      humidity: `${weatherData.main.humidity}%`,
      wind: weatherData.wind.speed,
      visibility: weatherData.visibility,
      pressure: weatherData.main.pressure,
    };
  return (
    <div className="rubing-resume1">
      <div className="rectangle55" />
      <div className="rectangle56" />
      <div className="rectangle57" />
      <div className="rectangle58" />
      <div className="rectangle59" />
      <div className="rectangle60" />
      <div className="rectangle61" />
      <div className="rectangle62" />
      <div className="image6" />
      <div className="rectangle63" />
      <div className="rectangle64" />
      <img className="frame-icon17" alt="" src="/frame.svg" />
      <div className="rectangle65" />
      <div className="rectangle66" />
      <div className="image7" />
      <div className="rectangle67" />
      <div className="rectangle68" />
      <img className="frame-icon18" alt="" src="/frame.svg" />
      <div className="rectangle69" />
      <div className="rectangle70" />
      <div className="image8" />
      <div className="rectangle71" />
      <div className="rectangle72" />
      <img className="frame-icon19" alt="" src="/frame.svg" />
      <div className="rectangle73" />
      <div className="rectangle74" />
      <div className="image9" />
      <div className="rectangle75" />
      <div className="rectangle76" />
      <img className="frame-icon20" alt="" src="/frame.svg" />
      <div className="rectangle77" />
      <div className="rectangle78" />
      <div className="image10" />
      <div className="rectangle79" />
      <div className="rectangle80" />
      <img className="frame-icon21" alt="" src="/frame.svg" />
      <div className="rectangle81" />
      <div className="rectangle82" />
      <div className="image11" />
      <div className="rectangle83" />
      <div className="rectangle84" />
      <img className="frame-icon22" alt="" src="/frame.svg" />
      <div className="rectangle85" />
      <div className="rectangle86" />
      <img className="frame-icon23" alt="" src="/frame1.svg" />
      <div className="rectangle87" />
      <div className="rectangle88" />
      <div className="rectangle89" />
      <div className="rectangle90" />
      <img className="frame-icon24" alt="" src="/frame2.svg" />
      <div className="rectangle91" />
      <img className="frame-icon25" alt="" src="/frame2.svg" />
      <div className="rectangle92" />
      <div className="rectangle93" />
      <div className="rectangle94" />
      <div className="rectangle95" />
      <div className="rectangle96" />
      <div className="rectangle97" />
      <div className="rectangle98" />
      <div className="rectangle99" />
      <img className="frame-icon26" alt="" src="/frame3.svg" />
      <div className="rectangle100" />
      <div className="rectangle101" />
      <div className="rectangle102" />
      <img className="frame-icon27" alt="" src="/frame4.svg" />
      <div className="rectangle103" />
      <img className="frame-icon28" alt="" src="/frame5.svg" />
      <div className="rectangle104" />
      <img className="frame-icon29" alt="" src="/frame6.svg" />
      <div className="rectangle105" />
      <img className="frame-icon30" alt="" src="/frame7.svg" />
      <div className="rectangle106" />
      <img className="frame-icon31" alt="" src="/frame8.svg" />
      <div className="rectangle107" />
      <img className="frame-icon32" alt="" src="/frame9.svg" />
      <div className="rectangle108" />
      <img className="frame-icon33" alt="" src="/frame10.svg" />
      <div className="rectangle109" />
      <div className="full-stack1">Full Stack</div>
      <div className="say-hello1">Say Hello</div>
      <div className="frontend-backend1">{`Frontend & Backend Developer `}</div>
      <div className="i-design-and1">
        I design and code beautiful websites in the shortest time.
      </div>
      <div className="hi-im-rubing1">Hi, I’m Rubing. Nice to meet you.</div>
      <div className="full-stack-developer1">Full-Stack Developer</div>
      <div className="i-spans-front-end1">
        I spans front-end and back-end development, and often work with
        databases, APIs, and deployment processes.
      </div>
      <div className="experiences-i-draw3">Experiences I draw from:</div>
      <div className="java-python-c1">Java, Python, C#, C++</div>
      <div className="design-tools1">Design Tools:</div>
      <div className="htmlcss-javasript1">HTML/CSS Javasript</div>
      <div className="figma1">Figma</div>
      <div className="reactjs1">React.js</div>
      <div className="est-javascript-junit1">
        est (JavaScript), JUnit (Java), pytest (Python)
      </div>
      <div className="mysql-postgresql-mongodb1">
        MySQL, PostgreSQL, MongoDB
      </div>
      <div className="aws-azure-google1">AWS, Azure, Google Cloud</div>
      <div className="frontend-developer1">Frontend Developer</div>
      <div className="designing-and-implementing1">
        designing and implementing the user interface (UI) and user experience
        (UX)
      </div>
      <div className="backend-developer1">Backend Developer</div>
      <div className="server-side-programming-langua1">
        server-side programming languages such as Python, Java, Ruby, PHP, or
        Node.js to implement the business logic of an application
      </div>
      <div className="experiences-i-draw4">Experiences I draw from:</div>
      <div className="java-python-nodejs1">Java, Python, Node.js, PHP, C#</div>
      <div className="django-python1">Django (Python)</div>
      <div className="express-nodejs1">Express (Node.js))</div>
      <div className="mysql-postgresqlmongodb1">MySQL, PostgreSQL,MongoDB,</div>
      <div className="restful-api1">RESTful API</div>
      <div className="junit-java-pytest1">JUnit (Java), pytest (Python)</div>
      <div className="here-are-a1">
        Here are a few past design projects I've worked on. Want to see more?
      </div>
      <div className="email-me1">Email me</div>
      <div className="div1">.</div>
      <div className="implement-a-dynamic1">
      <p><h3>{quoteData.quote}</h3>
        <h3>Author: {quoteData.author}</h3></p>
      </div>
      <div className="visit-website5"></div>
      <div className="build-a-scalable1">
      <p>Temperature in Celsius: {tempInCelsius}</p>
      <p>City: Brossard</p>
      </div>
      <div className="visit-website6">Weather</div>
      <div className="enhance-the-user1">
      <p>Formatted Address: {formattedAddress}</p>
      </div>
      <div className="visit-website7">Address</div>
      <div className="establish-a-seamless1">
      <h1>{weatherDataToSend.city}</h1>
      <p>{weatherDataToSend.description}</p>
      </div>
      <div className="visit-website8">City</div>
      <div className="implement-a-responsive1">
        {" "}
        Implement a responsive design for the user interface of a new e-commerce
        website.
      </div>
      <div className="visit-website9">Visit Website</div>
      <div className="develop-a-robust1">
        Develop a robust authentication system for a social media platform.
      </div>
      <div className="view-website1">View Website</div>
      <div className="see-more1">{`See more `}</div>
      <div className="i-take-pride1">
        I take pride in my collaborations with various companies and
        institutes.:
      </div>
      <div className="my-startup-projects1">My Startup Projects</div>
      <div className="designing-and-building1">
        {" "}
        Designing and building your own large-scale business website can be a
        rewarding and challenging endeavour.
      </div>
      <div className="clearly-define-goals1">
        Clearly Define Goals and Purpose:
      </div>
      <div className="thorough-market-research1">
        Thorough Market Research and Business Plan:
      </div>
      <div className="interested-in-collaborating1">
        Interested in collaborating with me?
      </div>
      <div className="im-always-open1">
        I’m always open to discussing product work or partnership opportunities.
      </div>
      <div className="start-a-conversation1">Start a conversation</div>
      <div className="testimonials1">Testimonials</div>
      <div className="people-ive-worked1">
        People I've worked with have said some nice things...
      </div>
      <div className="rubing-was-a1">
        “Rubing was a real pleasure to work with and we look forward to working
        with him again. He’s definitely the kind of programmerer you can trust
        with a project from start to finish.”
      </div>
      <div className="yong-zhong1">Yong Zhong</div>
      <div className="creative-lead-good1">Creative Lead, Good Kind</div>
      <div className="start-a-project1">Start a project</div>
      <div className="design-large-scale-business1">
        Design large-scale business websites in the shortest time
      </div>
      <div className="lets-do-this1">Let's do this</div>
      <div className="coding-and-coding1">
        Coding and coding again, I am passionate about programming.
      </div>
      <div className="handcrafted-by-me1">Handcrafted by me</div>
      <div className="rubing-zhang1">Rubing Zhang</div>
      <img className="image-1-icon2" alt="" src="/image-1@2x.png" />
      <div className="i-am-a1">
        I am a versatile developer excelling in both front-end and back-end
        development, demonstrating proficiency in Java, Python, and C# to craft
        robust desktop and mobile applications. My skills extend to database
        management, API integration, and the compilation process. I specialize
        in implementing robust CI/CD pipelines for swift deployment from GitHub
        to AWS. With confidence in my abilities, I can manage the entire
        development cycle, from design to deployment, within a two-week
        timeframe, ensuring the efficient delivery of high-quality,
        business-oriented web solutions.
      </div>
      <div className="html-css-javascript1">{`HTML, CSS, javascript, CSS, `}</div>
      <div className="experiences-i-draw5">Experiences I draw from:</div>
      <div className="dev-tools2">Dev Tools:</div>
      <div className="react1">React</div>
      <div className="vue1">Vue</div>
      <div className="webpack1">Webpack</div>
      <div className="vite1">Vite</div>
      <div className="dev-tools3">Dev Tools:</div>
      <img className="image-3-icon1" alt="" src="/image-3@2x.png" />
      <img className="image-4-icon1" alt="" src="/image-4@2x.png" />
      <img className="image-6-icon2" alt="" src="/image-6@2x.png" />
      <img className="image-6-icon3" alt="" src="/image-61@2x.png" />
      <img className="image-7-icon1" alt="" src="/image-7@2x.png" />
      <img className="image-8-icon1" alt="" src="/image-8@2x.png" />
      <img className="rubing-resume-inner" alt="" src="/group-24.svg" />
      <img className="image-9-icon1" alt="" src="/image-9@2x.png" />
      <img className="image-10-icon1" alt="" src="/image-10@2x.png" />
      <img className="image-11-icon1" alt="" src="/image-11@2x.png" />
      <img className="image-12-icon1" alt="" src="/image-12@2x.png" />
      <div className="slice-div" />
      <img className="image-1-icon3" alt="" src="/image-13@2x.png" />
    </div>
  );
};

export default RubingResume;

import React, { useEffect, useState } from 'react';
import munchQuestLogin from '../projectImgs/munchQuestLogin.png'
import munchQuestSearch from '../projectImgs/munchQuestSearch.png'
import munchQuestprofile from '../projectImgs/munchQuestprofile.png'
import savedMunches from '../projectImgs/savedMunches.png'
import publicMunchies from '../projectImgs/publicMunchies.png'
import createMunch from '../projectImgs/createMunch.png'
import './projects.css'



export default function Projects() {
const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
    showSlides(slideIndex);
    }, [slideIndex]);

  // Next/previous controls
    function plusSlides(n) {
        const newSlideIndex = slideIndex + n;
        const slides = document.getElementsByClassName('mySlides');
        // If newSlideIndex is within the valid range, update the slideIndex.
        // Otherwise, loop the carousel back to the first or last slide.
        if (newSlideIndex >= 1 && newSlideIndex <= slides.length) {
            setSlideIndex(newSlideIndex);
        } else if (newSlideIndex > slides.length) {
          setSlideIndex(1); // Loop to the first slide
        } else if (newSlideIndex < 1) {
          setSlideIndex(slides.length); // Loop to the last slide
        }
    }

  // Thumbnail image controls
    function currentSlide(n) {
    setSlideIndex(n);
    }


    function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length) setSlideIndex(1);
    if (n < 1) setSlideIndex(slides.length);
    for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    } 

    return (
    <div className='projectsContainer'>
        <div className="slideshow-container">
            <div className="mySlides fade">
            <div className="numbertext">1 / 6</div>
            <img className='slideImg' src={munchQuestLogin}  alt="Slide 1" />
            <div className="text">Login Page</div>
        </div>
        <div className="mySlides fade">
            <div className="numbertext">2 / 6</div>
            <img className='slideImg' src={munchQuestSearch}  alt="Slide 2" />
            <div className="text">Search page where user finds 30 best restaurants by location</div>
        </div>
        <div className="mySlides fade">
            <div className="numbertext">3 / 6</div>
            <img className='slideImg' src={savedMunches}  alt="Slide 3" />
            <div className="text">This page shows all of the restaurants that were saved by the user</div>
        </div>
        <div className="mySlides fade">
            <div className="numbertext">4 / 6</div>
            <img className='slideImg' src={munchQuestprofile} alt="Slide 4" />
            <div className="text">This is the user profile page where the user can view all blogs they've created</div>
        </div>
        <div className="mySlides fade">
            <div className="numbertext">5 / 6</div>
            <img className='slideImg' src={publicMunchies} alt="Slide 5" />
            <div className="text">This image shows the public feed of all blogs from all users</div>
        </div>
        <div className="mySlides fade">
            <div className="numbertext">6 / 6</div>
            <img className='slideImg' src={createMunch} alt="Slide 6" />
            <div className="text">This inage is where the user creates a blog on a certian restaurant</div>
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
            &#10095;
        </a>
        <br />
        <div className='' style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
        <span className="dot" onClick={() => currentSlide(6)}></span>
        </div>
        </div>
        <div className='mqDescription'>
            <h1 className='workH1 text-2xl'>MunchQuest</h1>
            <p>Munch Quest is a webpage designed for the foodie in all of us. The user will be able to search by location and find the top 30 ranked restuarants in that city and can also create blogs about those restuarants and share with others who are members of the webpage</p>
            <h3 className='workH1'>Stacks used:</h3>
            <ul className='workUl'>
                <li className='workLi'> 
                    <img className='techImg2 relative top-3 left-2.5' src='https://img.icons8.com/?size=2x&id=NfbyHexzVEDk&format=png'/>
                </li>
                <li className='workLi'>
                    <img className='techImg2 relative top-3 left-2.5' src='https://img.icons8.com/?size=2x&id=108784&format=png'/>
                </li>
                <li className='workLi'>
                    <img className='techImg2 relative top-3 left-2.5' src='https://img.icons8.com/?size=2x&id=7gdY5qNXaKC0&format=png'/>
                </li>
                <li className='workLi'>
                    <img className='techImg2 relative top-3 left-2.5'  src='https://img.icons8.com/?size=2x&id=20909&format=png'/>
                </li>
                <li className='workLi' >
                    <img className='techImg2 relative top-1 left-2.5'src='https://adeeb-dev.onrender.com/static/media/mongoDB.2178943141ba7e7fae4e.png'/>
                </li>
            </ul>
        </div>
    </div>
    );
}
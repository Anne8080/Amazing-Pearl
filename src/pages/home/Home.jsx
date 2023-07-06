import React from 'react'
import './home.scss'
import '../../scss.scss'
import Navbar from '../../components/navbar/Navbar'
import logo from '../../img/logo.png'
import oldwoman from '../../img/oldwoman.png'
import Doings from '../../components/doings/Doings'
import feed from '../../img/feed.png'
import learn1 from '../../img/learn1.png'
import oldman from '../../img/oldman.png'
import article1 from '../../img/article1.png'
import article2 from '../../img/article2.png'
import article3 from '../../img/article3.png'
import Articles from '../../components/articles/Articles'
import email from '../../img/email.png'
import ellipse1 from '../../img/Ellipse1.png'
import ellipse2 from '../../img/Ellipse2.png'
import ellipse3 from '../../img/Ellipse3.png'
import ellipse4 from '../../img/Ellipse4.png'
import ellipse5 from '../../img/Ellipse5.png'
import Footer from '../../components/footer/Footer'
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    const fill = [
        {
            title: 'Home Support',
            explain: 'Help with light housekeeping, grocery shopping, transportation…',
            link: '#'
        },
        {
            title: 'Personal Care',
            explain: 'There for physical assistance, hygiene, mobility…',
            link: '#'
        },
        {
            title: 'Nursing services',
            explain: 'In-home medical care, ostomy care…',
            link: '#'
        },
        {
            title: 'Respite care',
            explain: 'Support for conditions like dementia',
            link: '#'
        }
    ]
    const latest = [
        {
            img: article1,
            title: 'Unlocking the power of home healthcare',
            words: 'There are many unique health considerations for aging females, and ways their loved ones can help. Read on to get tips on what you can do.',
            link: ''
        },
        {
            img: article2,
            title: 'How To Engage in Exercise Even if You Have Limited Mobility',
            words: 'Even if you have limited mobility, there are ways you can keep your body moving to avoid muscle atrophy and ways you can keep your mind engaged for your mental health. Here are some ideas to try.',
            link: ''
        },
        {
            img: article3,
            title: 'The future of compassionate care',
            words: 'There are four main symptoms of Parkinson’s disease, and it is important to seek treatment if you have more than one of them. However, there are some lesser-known indicators as well.',
            link: ''
        },
    ]
  return (
    <div>
        <Navbar/>

        <section>
            <div className="homehead">
                <img id='b1' src={ellipse1} alt="" />
                <img id='b2' src={ellipse2} alt="" />
                <img id='b3' src={ellipse3} alt="" />
                <img id='b4' src={ellipse4} alt="" />
                <img id='b5' src={ellipse5} alt="" />
                <img id='b6' src={ellipse5} alt="" />
                <div className="up"><img src={logo} alt="" /></div>
                <div className="down">
                    <div className="right">
                        <div className="top">
                            <h2>FEEL RIGHT AT HOME</h2>
                            <h4>There's no greater feeling than living with Love</h4>
                        </div>
                        <div className="bottom">
                            <p>Find services in your area</p>
                            <div className="zip">
                                <input type="text" placeholder='Enter ZIP code/city, state ' /><button><SearchIcon/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='whatwedo'>
                <h2>What We Do</h2>
                <div id='doings'>
                    { fill.map((fill, i)=>(
                        <Doings title={fill.title} explain={fill.explain} link={fill.link} />
                    ))}
                </div>
                {/* Slider */}
            </div>
        </section>
        <section>
            <div className="habout">
                <h2>About Us</h2>
                <p>Amazing pearl is a residential service agaency that aims to improve the quality of life of our clients through the delivery of amazing excellent cpmpassionate care and extraordinary services in the comfort of their homes while being recognized as an employer of first choice. <br /> Our mission is to create a compassionate and comfortable enviroment for both the adults and pediatrics entrusted in our care and foster a healthy relationship amongst them and their family.</p>
                <a className='button' href="">Learn More</a>
            </div>
            <div className="habouttwo">
                <div className="top"><img src={feed} alt="" /></div>
                <div className="bottom">
                    <div className="left"><img src={learn1} alt="" /></div>
                    <div className="right"><p>We believe there’s more to caring for people than just providing in-home assistance. For decades, families have trusted Right at Home for our expert guidance and experience to help them navigate every step of the aging journey.</p></div>
                </div>
                <img id='ellipse' src={ellipse1} alt="" />
            </div>
        </section>
        <section>
            <div className="article">
                <h3>Articles</h3>
                <div className="featured">
                    <div className="left">
                        <span>Featured Article</span>
                        <img src={oldman} alt="" />
                    </div>
                    <div className="right">
                        <h2>Caring for a Loved One With Aphasia</h2>
                        <h4>Learn more about aphasia, the limitations it can cause, and how you can help a loved one.</h4>
                        <a href="">Learn More</a>
                    </div>
                </div>
                <div className="latest">
                    { latest.map((fill, i)=>(
                        <Articles img={fill.img} title={fill.title} words={fill.words} link={fill.link} />
                    ))}
                </div>
                <p><a href="">Latest articles</a></p>
            </div>
        </section>
        <section>
            <div className="sign">
                <div className="left">
                    <img src={email} alt="" />
                    <h2>Sign Up for the Caring Right at Home® E-Newsletter</h2>
                </div>
                <div className="right">
                    <form action="">
                        <div className="info">
                            <div className="l">
                                <label htmlFor="">*Name</label><br />
                                <input type="text" />
                            </div>
                            <div className="r">
                                <label htmlFor="">*Email</label><br />
                                <input type='email' />
                            </div>
                        </div>
                        <div className="check">
                            <input type="checkbox" />
                            <p>By checking this box and submitting this form, you are consenting to receive marketing emails from Right at Home. You can revoke your consent to receive emails at any time. <a href=''>Privacy Policy</a>.</p>
                        </div>
                        <a id='sign' href="">Sign up</a>
                    </form>
                </div>
            </div>
        </section>

        <Footer/>
    </div>
  )
}

export default Home
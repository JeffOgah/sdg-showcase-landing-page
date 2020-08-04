import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import { HealthModalContext } from '../contexts/ModalContext';
import HealthList from '../components/HealthList';
import Aos from 'aos';
import "aos/dist/aos.css";
import HealthDetails from '../components/HealthDetails';
import { ModeContext } from '../contexts/ModeContext';


export default function GoodHealthAndWellbeing() {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    
    let [ healthModal, setHealthModal ] = useState(false);
    
    let { darkMode } = useContext(ModeContext);


    let { goodHealth } = useContext(ProjectContext);
    
    let [selectedProject, setSelectedProject] = useState(null);

       const onProjectSelect = (project) => {
        setSelectedProject(project);
    }

    return (
        <HealthModalContext.Provider value={{ healthModal, setHealthModal }}>
            <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
                <Header />
                <div className="container">
                    <div className="theme-project"><span className={darkMode ? 'color-dark' : 'color-light'}>Theme</span></div>

                    <h2 style={{ color: '#4C9F38'}} className="top-projects  my-5">Good Health And Wellbeing</h2>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Du</p>
                        </div>
                    </div>



                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-8 col-sm-12">
                                <h2 className={darkMode ? `font-weight-bold pb-2 color-light` : `font-weight-bold pb-2`}>Problem Statements</h2>
                                <p className={darkMode ? `color-light h3 pb-2` : `h3 pb-2`}>Data Monitoring and Accountability.</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">- Governments and institutions are increasingly aware of the importance of harnessing data to better inform decision making. Lack of reliable data on even the most basic indicators of development can lead to misguided policies and misallocation of resources. </p>
                                <p style={{ color: '#19486A' }} className="h4 pb-2">- Develop a solution platform that could increase the availability of high-quality, timely and reliable data relevant to aid national statistical planning. </p>
                                <p className={darkMode ? `color-light h3 pb-2` : `h3 pb-2`}>MOBILIZE RESOURCES TO IMPROVE DOMESTIC REVENUE COLLECTION.</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">- Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection. </p>
                                <p style={{ color: '#19486A' }} className="h4 pb-2">- Develop a tech solution that could help improve revenue collection within your local government/community. </p>
                            </div>

                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col">
                            <p className={darkMode ? `color-light font-weight-bold h2 text-theme mb-5` : `color-dark font-weight-bold h2 text-theme mb-5`}>Explore by theme</p>

                            <div className="themeproject-container">
                                <Link to="/themes/No-Poverty" style={{ background: '#E5243B' }} className=' text-white health font-weight-bold px-2 py-3'>
                                    No Poverty
                                </Link>
                                <Link to="/themes/Zero-Hunger" style={{ background: '#DDA639' }} className='text-white active-box health font-weight-bold px-2 py-3'>Zero Hunger</Link>
                                <Link to="/themes/Patnerships-For-Goals" style={{ background: '#19486A' }} className='text-white health font-weight-bold  px-2 py-3'>Partnership 4Goals</Link>
                                <Link to="/themes/Good-Health-And-Wellbeing" style={{ background: '#4C9F38', boxShadow: darkMode ? `#222 0px 0px 0px 3px, #4C9F38 0px 0px 0px 6px` : `#fff 0px 0px 0px 3px, #4C9F38 0px 0px 0px 6px` }} className='text-white health font-weight-bold px-2 py-3'>Good Health and...</Link>
                                <Link to="/themes/Quality-Education" style={{ background: '#C5192D' }} className='text-white health font-weight-bold px-2 py-3'>Quality-Education</Link>
                                <Link to="/themes/Peace-And-Justice" style={{ background: '#10689D' }} className='text-white health font-weight-bold px-2 py-3'>Peace-And-Justice</Link>
                                <Link to="/themes/Decent-Work" style={{ background: '#A21942' }} className='text-white health font-weight-bold px-2 py-3'>Decent-Work</Link>
                                <Link to="/themes/Industry-innovation" style={{ background: '#FA6926' }} className='text-white health font-weight-bold px-2 py-3'>Industry-Innovation</Link>
                                <Link to="/themes/Sustainable-Cities" style={{ background: '#FB9D24' }} className='text-white health font-weight-bold px-2 py-3'>Sustainable-Cities</Link>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="">
                            <HealthDetails project={selectedProject} />

                            <HealthList projects={goodHealth} onProjectSelect={onProjectSelect} />

                        </div>
                    </div>

                </div>
            </div>
        </HealthModalContext.Provider>
        
    )
}